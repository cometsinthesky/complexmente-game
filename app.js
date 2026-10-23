/* =============================================
   COMPLEXMENTE
   MOTOR DO JOGO

   HTML5 + CSS3 + JAVASCRIPT
   Sem bibliotecas externas

   Lucas Ferreira | PPGEduc/UnB
============================================= */

"use strict";

/* =============================================
   CONFIGURAÇÕES E VARIÁVEIS
============================================= */

const $ = (id) => document.getElementById(id);

const CONTENT = window.COMPLEXM_CONTENT;

const TEAM_COLORS = [
  "#34e5e5",
  "#ee79b2",
  "#ffc857",
  "#a579ff"
];

const LETTERS = ["A", "B", "C", "D"];

let game = null;

let timerInterval = null;

let soundEnabled = true;

let audioContext = null;


/* =============================================
   UTILITÁRIOS
============================================= */

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

}


function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [result[i], result[j]] = [
      result[j],
      result[i]
    ];

  }

  return result;

}


function clamp(value, min, max) {

  return Math.max(
    min,
    Math.min(max, value)
  );

}


function showElement(id) {

  $(id).classList.remove("hidden");

}


function hideElement(id) {

  $(id).classList.add("hidden");

}


function showView(id) {

  document.querySelectorAll(".view").forEach(
    (view) => {

      view.classList.toggle(
        "active",
        view.id === id
      );

    }
  );

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* =============================================
   EFEITOS SONOROS
============================================= */

function playSound(
  frequency = 600,
  duration = 0.09,
  type = "sine"
) {

  if (!soundEnabled) {
    return;
  }

  try {

    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    if (!audioContext) {

      audioContext =
        new AudioContextClass();

    }

    if (audioContext.state === "suspended") {

      audioContext.resume().catch(() => {});

    }

    const oscillator =
      audioContext.createOscillator();

    const gain =
      audioContext.createGain();

    const now = audioContext.currentTime;

    oscillator.type = type;

    oscillator.frequency.setValueAtTime(
      frequency,
      now
    );

    gain.gain.setValueAtTime(
      0.055,
      now
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      now + duration
    );

    oscillator.connect(gain);

    gain.connect(
      audioContext.destination
    );

    oscillator.start(now);

    oscillator.stop(
      now + duration
    );

  } catch (error) {

    // O jogo continua normalmente
    // caso o navegador bloqueie áudio.

  }

}


function playCorrectSound() {

  playSound(540, 0.13);

  window.setTimeout(
    () => playSound(820, 0.17),
    110
  );

}


function playWrongSound() {

  playSound(
    230,
    0.22,
    "sawtooth"
  );

}


/* =============================================
   CONFIGURAÇÃO DE EQUIPES
============================================= */

function renderTeamInputs() {

  const count =
    Number($("teamCount").value);

  const previousNames = Array.from(
    document.querySelectorAll(
      "#teamFields input"
    )
  ).map((input) => input.value);

  const defaults = [
    "Equipe Horizonte",
    "Equipe Entropia",
    "Equipe Gaia",
    "Equipe Incerteza"
  ];

  const html = [];

  for (let i = 0; i < count; i++) {

    const name =
      previousNames[i] || defaults[i];

    html.push(`

      <div class="team-name-field">

        <span
          class="team-dot"
          style="background:${TEAM_COLORS[i]}"
        ></span>

        <input
          type="text"
          class="team-name-input"
          maxlength="24"
          aria-label="Nome da equipe ${i + 1}"
          value="${escapeHTML(name)}"
        >

      </div>

    `);

  }

  $("teamFields").innerHTML =
    html.join("");

}


/* =============================================
   INICIALIZAÇÃO DA PARTIDA
============================================= */

function startGame() {

  clearTimer();

  const count =
    Number($("teamCount").value);

  const baseSeconds =
    Number($("timeChoice").value);

  const nameInputs = Array.from(
    document.querySelectorAll(
      ".team-name-input"
    )
  );

  const teams = nameInputs
    .slice(0, count)
    .map((input, index) => {

      return {

        id: index,

        name:
          input.value.trim() ||
          `Equipe ${index + 1}`,

        color:
          TEAM_COLORS[index],

        score: 0,

        streak: 0,

        powers: {

          double: true,
          hint: true,
          time: true

        }

      };

    });

  /*
    Na fase 1, cada equipe responde:
    - uma pergunta fácil;
    - uma pergunta média.

    Na fase 2:
    - duas perguntas complexas.

    Na fase 3:
    - um dilema por equipe.

    Na fase final:
    - uma pergunta por equipe.
  */

  const easy = shuffle(
    CONTENT.questoesFaceis
  ).slice(0, count);

  const medium = shuffle(
    CONTENT.questoesMedias
  ).slice(0, count);

  const complex = shuffle(
    CONTENT.questoesComplexas
  ).slice(0, count * 2);

  const dilemmas = shuffle(
    CONTENT.dilemas
  ).slice(0, count);

  const finalQuestions = shuffle(
    CONTENT.questoesFinais
  ).slice(0, count);

  game = {

    teams,

    baseSeconds,

    phase: 0,

    round: 0,

    stages: [
      [...easy, ...medium],
      complex,
      dilemmas,
      finalQuestions
    ],

    risks: shuffle(
      CONTENT.cartasRisco
    ),

    current: null,

    currentRisk: null,

    locked: false,

    selectedIndex: -1,

    doubleActive: false,

    hintActive: false,

    pendingReveal: false,

    pointsChange: 0,

    argumentBonusUsed: false,

    timerRemaining: 0,

    timerTotal: 0,

    paused: false,

    world: {

      clima: 50,
      justica: 50,
      confianca: 50

    }

  };

  showView("game");

  enterPhase();

}


/* =============================================
   EQUIPES E PLACAR
============================================= */

function activeTeamIndex() {

  if (!game) {
    return 0;
  }

  return (
    game.round %
    game.teams.length
  );

}


function activeTeam() {

  return game.teams[
    activeTeamIndex()
  ];

}


function updateScoreboard() {

  if (!game) {
    return;
  }

  const currentIndex =
    activeTeamIndex();

  $("scoreboard").innerHTML =
    game.teams.map((team, index) => {

      const active =
        index === currentIndex;

      return `

        <div
          class="score-item ${active ? "is-active" : ""}"
          style="--team-color:${team.color}"
        >

          <span class="score-item-name">
            ${escapeHTML(team.name)}
          </span>

          <strong class="score-item-points">
            ${team.score}
          </strong>

          <span class="score-item-streak">
            ${
              team.streak > 1
                ? `🔥 ${team.streak} ACERTOS`
                : "&nbsp;"
            }
          </span>

        </div>

      `;

    }).join("");

}


/* =============================================
   TRANSIÇÃO ENTRE FASES
============================================= */

function enterPhase() {

  clearTimer();

  if (game.phase >= 4) {

    finishGame();
    return;

  }

  game.round = 0;

  const phaseInfo =
    CONTENT.fases[game.phase];

  $("introNumber").textContent =
    phaseInfo.numero;

  $("introIcon").textContent =
    phaseInfo.icone;

  $("introTitle").textContent =
    phaseInfo.nome;

  $("introDescription").textContent =
    phaseInfo.descricao;

  showElement("stageIntro");

  hideElement("playArea");

  updateScoreboard();

  playSound(460, 0.13);

}


function beginPhase() {

  hideElement("stageIntro");

  showElement("playArea");

  beginRound();

}


/* =============================================
   NOVA RODADA
============================================= */

function beginRound() {

  clearTimer();

  const questions =
    game.stages[game.phase];

  if (game.round >= questions.length) {

    game.phase++;

    enterPhase();

    return;

  }

  game.current =
    questions[game.round];

  game.locked = false;

  game.selectedIndex = -1;

  game.doubleActive = false;

  game.hintActive = false;

  game.pendingReveal = false;

  game.pointsChange = 0;

  game.argumentBonusUsed = false;

  game.currentRisk = null;

  game.paused = false;

  resetRoundInterface();

  updateScoreboard();

  updateRoundHeader();

  renderQuestion();

  playSound(520, 0.07);

}


/* =============================================
   LIMPEZA DA INTERFACE
============================================= */

function resetRoundInterface() {

  hideElement("answerFeedback");

  hideElement("challengePanel");

  hideElement("moderatorBonus");

  hideElement("nextTurn");

  hideElement("riskNotice");

  hideElement("wagerPanel");

  hideElement("worldBoard");

  $("answerFeedback").innerHTML = "";

  $("answerFeedback").className =
    "answer-feedback hidden";

  $("awardArgument").disabled = false;

  $("pauseTimer").disabled = false;

  $("pauseTimer").textContent =
    "⏸ PAUSAR TEMPO";

  $("wagerChoice").value = "0";

}


/* =============================================
   CABEÇALHO DA RODADA
============================================= */

function updateRoundHeader() {

  const phaseInfo =
    CONTENT.fases[game.phase];

  const count =
    game.stages[game.phase].length;

  $("stageLabel").textContent =
    phaseInfo.numero;

  $("roundLabel").textContent =
    `RODADA ${game.round + 1}`;

  $("activeTeam").textContent =
    activeTeam().name;

  $("activeTeam").style.color =
    activeTeam().color;

  $("roundProgressText").textContent =
    `${game.round + 1} / ${count}`;

  const progress =
    ((game.round + 1) / count) * 100;

  $("roundProgressFill").style.width =
    `${progress}%`;

}


/* =============================================
   RENDERIZAÇÃO DA QUESTÃO
============================================= */

function renderQuestion() {

  const question =
    game.current;

  const phase =
    game.phase;

  $("questionCategory").textContent =
    question.categoria;

  $("questionText").textContent =
    question.pergunta;

  if (question.contexto) {

    $("questionContext").textContent =
      question.contexto;

    showElement("questionContext");

  } else {

    hideElement("questionContext");

  }

  let difficulty = "";

  if (phase === 0) {

    difficulty =
      game.round < game.teams.length
        ? "FÁCIL"
        : "MÉDIA";

  } else if (phase === 1) {

    difficulty = "COMPLEXA";

  } else if (phase === 2) {

    difficulty = "DILEMA CTSA";

  } else {

    difficulty = "DESAFIO FINAL";

  }

  $("questionDifficulty").textContent =
    difficulty;

  /* Cartas de risco */

  let seconds = game.baseSeconds;

  if (phase === 1) {

    const risk =
      game.risks[
        game.round % game.risks.length
      ];

    game.currentRisk = risk;

    $("riskTitle").textContent =
      risk.titulo;

    $("riskDescription").textContent =
      risk.descricao;

    showElement("riskNotice");

    seconds += risk.tempo;

  }

  /* Dilemas possuem tempo maior */

  if (phase === 2) {

    seconds += 30;

    showElement("worldBoard");

    updateWorldBoard();

  }

  /* Conselho do Futuro */

  if (phase === 3) {

    seconds += 20;

    showElement("wagerPanel");

  }

  /* Poderes apenas nas fases 1 e 2 */

  if (phase === 0 || phase === 1) {

    showElement("powersPanel");

    updatePowers();

  } else {

    hideElement("powersPanel");

  }

  /* Alternativas */

  $("answerOptions").innerHTML =
    question.alternativas.map(
      (option, index) => {

        const text =
          typeof option === "string"
            ? option
            : option.texto;

        return `

          <button
            type="button"
            class="answer-option"
            data-index="${index}"
          >

            <span class="answer-letter">
              ${LETTERS[index]}
            </span>

            <span>
              ${escapeHTML(text)}
            </span>

          </button>

        `;

      }
    ).join("");

  document.querySelectorAll(
    ".answer-option"
  ).forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        const index = Number(
          button.dataset.index
        );

        if (game.phase === 2) {

          chooseDilemma(index);

        } else {

          answerQuiz(index);

        }

      }
    );

  });

  startTimer(
    clamp(seconds, 15, 120)
  );

}


/* =============================================
   CRONÔMETRO
============================================= */

function clearTimer() {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    timerInterval = null;

  }

}


function startTimer(seconds) {

  clearTimer();

  game.timerRemaining = seconds;

  game.timerTotal = seconds;

  game.paused = false;

  updateTimer();

  timerInterval = setInterval(
    () => {

      if (!game || game.paused) {
        return;
      }

      if (game.locked) {
        return;
      }

      game.timerRemaining--;

      updateTimer();

      if (game.timerRemaining <= 0) {

        clearTimer();

        if (game.phase === 2) {

          chooseDilemma(-1);

        } else {

          answerQuiz(-1);

        }

      }

    },
    1000
  );

}


function updateTimer() {

  if (!game) {
    return;
  }

  const remaining =
    Math.max(0, game.timerRemaining);

  $("timerText").textContent =
    remaining;

  const percent =
    game.timerTotal > 0
      ? (remaining / game.timerTotal) * 100
      : 0;

  $("timerFill").style.width =
    `${clamp(percent, 0, 100)}%`;

  const danger =
    remaining <= 10;

  $("timerFill").classList.toggle(
    "danger",
    danger
  );

  document.querySelector(
    ".timer-display"
  ).classList.toggle(
    "danger",
    danger
  );

}


function togglePause() {

  if (!game || game.locked) {
    return;
  }

  game.paused = !game.paused;

  $("pauseTimer").textContent =
    game.paused
      ? "▶ RETOMAR TEMPO"
      : "⏸ PAUSAR TEMPO";

}


/* =============================================
   PODERES
============================================= */

function updatePowers() {

  if (!game) {
    return;
  }

  const powers =
    activeTeam().powers;

  const enabled =
    !game.locked &&
    !game.paused &&
    (game.phase === 0 || game.phase === 1);

  const doubleButton =
    $("powerDouble");

  const hintButton =
    $("powerHint");

  const timeButton =
    $("powerTime");

  doubleButton.disabled =
    !enabled ||
    !powers.double ||
    game.doubleActive;

  hintButton.disabled =
    !enabled ||
    !powers.hint ||
    game.hintActive;

  timeButton.disabled =
    !enabled ||
    !powers.time;

  doubleButton.classList.toggle(
    "used",
    !powers.double
  );

  hintButton.classList.toggle(
    "used",
    !powers.hint
  );

  timeButton.classList.toggle(
    "used",
    !powers.time
  );

}


function activateDouble() {

  if (
    !game ||
    game.locked ||
    game.paused ||
    game.phase > 1
  ) {
    return;
  }

  const team = activeTeam();

  if (!team.powers.double) {
    return;
  }

  team.powers.double = false;

  game.doubleActive = true;

  playSound(980, 0.15);

  updatePowers();

}


function activateHint() {

  if (
    !game ||
    game.locked ||
    game.paused ||
    game.phase > 1
  ) {
    return;
  }

  const team = activeTeam();

  if (!team.powers.hint) {
    return;
  }

  team.powers.hint = false;

  game.hintActive = true;

  const correct =
    game.current.correta;

  const wrongOptions = shuffle(
    [0, 1, 2, 3].filter(
      (index) => index !== correct
    )
  );

  const remove =
    wrongOptions.slice(0, 2);

  document.querySelectorAll(
    ".answer-option"
  ).forEach((button) => {

    const index = Number(
      button.dataset.index
    );

    if (remove.includes(index)) {

      button.classList.add("hidden");

    }

  });

  playSound(760, 0.13);

  updatePowers();

}


function activateExtraTime() {

  if (
    !game ||
    game.locked ||
    game.paused ||
    game.phase > 1
  ) {
    return;
  }

  const team = activeTeam();

  if (!team.powers.time) {
    return;
  }

  team.powers.time = false;

  game.timerRemaining += 20;

  game.timerTotal += 20;

  updateTimer();

  updatePowers();

  playSound(740, 0.12);

}


/* =============================================
   PONTUAÇÃO
============================================= */

function getBasePoints() {

  if (game.phase === 0) {

    const isEasy =
      game.round <
      game.teams.length;

    return isEasy ? 100 : 170;

  }

  if (game.phase === 1) {
    return 260;
  }

  if (game.phase === 2) {
    return 140;
  }

  return 300;

}


/* =============================================
   RESOLUÇÃO DAS QUESTÕES
============================================= */

function answerQuiz(index) {

  if (!game || game.locked) {
    return;
  }

  game.locked = true;

  game.selectedIndex = index;

  clearTimer();

  $("pauseTimer").disabled = true;

  if (game.phase <= 1) {
    updatePowers();
  }

  const question =
    game.current;

  const team =
    activeTeam();

  const correct =
    index === question.correta;

  let points = 0;

  if (correct) {

    team.streak++;

    points = getBasePoints();

    /*
      O multiplicador afeta
      os pontos-base.
    */

    if (game.doubleActive) {

      points *= 2;

    }

    /*
      Bônus por velocidade
      apenas nas fases 1 e 2.
    */

    if (game.phase <= 1) {

      const speedBonus =
        Math.round(
          (
            game.timerRemaining /
            game.timerTotal
          ) * 40
        );

      points += speedBonus;

      /*
        Bônus de sequência:
        até 80 pontos.
      */

      if (team.streak > 1) {

        points += Math.min(
          (team.streak - 1) * 20,
          80
        );

      }

      /*
        Evento da carta de risco.
      */

      if (
        game.phase === 1 &&
        game.currentRisk
      ) {

        points +=
          game.currentRisk.bonus;

      }

    }

    /*
      Fase final: aposta.
    */

    if (game.phase === 3) {

      const wager =
        Number($("wagerChoice").value);

      points += wager;

    }

    team.score += points;

    playCorrectSound();

  } else {

    team.streak = 0;

    /*
      Aposta perdida no Conselho.
    */

    if (game.phase === 3) {

      const wager =
        Number($("wagerChoice").value);

      points = -wager;

      team.score += points;

    }

    playWrongSound();

  }

  game.pointsChange = points;

  updateScoreboard();

  /*
    Nas duas primeiras fases,
    uma resposta errada permite
    desafio cruzado antes
    da revelação do gabarito.
  */

  if (
    !correct &&
    game.phase <= 1
  ) {

    prepareCrossChallenge();

  } else {

    revealQuizAnswer();

  }

}


/* =============================================
   DESAFIO CRUZADO
============================================= */

function prepareCrossChallenge() {

  game.pendingReveal = true;

  const timedOut =
    game.selectedIndex === -1;

  $("answerFeedback").innerHTML = `

    <h3>
      ${
        timedOut
          ? "⏱ TEMPO ESGOTADO"
          : "⚠ RESPOSTA NÃO CONFIRMADA"
      }
    </h3>

    <p>
      Antes da revelação, outra equipe
      poderá apresentar uma justificativa.
      O professor avaliará sua consistência.
    </p>

  `;

  showElement("answerFeedback");

  const active =
    activeTeamIndex();

  $("challengeTeam").innerHTML =
    game.teams.map(
      (team, index) => {

        if (index === active) {
          return "";
        }

        return `

          <option value="${index}">
            ${escapeHTML(team.name)}
          </option>

        `;

      }
    ).join("");

  showElement("challengePanel");

  hideElement("nextTurn");

}


/*
  O professor concede o bônus somente
  quando considera a justificativa
  fundamentada e consistente.
*/

function awardCrossChallenge() {

  if (
    !game ||
    !game.pendingReveal
  ) {
    return;
  }

  const index = Number(
    $("challengeTeam").value
  );

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= game.teams.length ||
    index === activeTeamIndex()
  ) {
    return;
  }

  game.teams[index].score += 60;

  updateScoreboard();

  playCorrectSound();

  revealQuizAnswer();

}


function skipCrossChallenge() {

  if (
    !game ||
    !game.pendingReveal
  ) {
    return;
  }

  revealQuizAnswer();

}


/* =============================================
   REVELAÇÃO DO GABARITO
============================================= */

function revealQuizAnswer() {

  if (!game || !game.locked) {
    return;
  }

  game.pendingReveal = false;

  hideElement("challengePanel");

  const question =
    game.current;

  const correct =
    game.selectedIndex ===
    question.correta;

  document.querySelectorAll(
    ".answer-option"
  ).forEach((button) => {

    const index = Number(
      button.dataset.index
    );

    button.disabled = true;

    button.classList.remove("hidden");

    if (index === question.correta) {

      button.classList.add(
        "is-correct"
      );

    } else if (
      index === game.selectedIndex
    ) {

      button.classList.add(
        "is-wrong"
      );

    }

  });

  const title = correct
    ? "✓ RESPOSTA CORRETA"
    : (
        game.selectedIndex === -1
          ? "⏱ TEMPO ESGOTADO"
          : "✕ RESPOSTA INCORRETA"
      );

  const answer =
    question.alternativas[
      question.correta
    ];

  const scoreText =
    game.pointsChange > 0
      ? `+${game.pointsChange} pontos`
      : (
          game.pointsChange < 0
            ? `${game.pointsChange} pontos`
            : "Nenhum ponto nesta rodada"
        );

  const source =
    getSourceHTML(
      question.fonte
    );

  $("answerFeedback").className =
    correct
      ? "answer-feedback correct"
      : "answer-feedback wrong";

  $("answerFeedback").innerHTML = `

    <h3>
      ${title}
    </h3>

    <p>
      <strong>
        ${scoreText}
      </strong>
    </p>

    <p>
      <strong>Alternativa correta:</strong>
      ${escapeHTML(answer)}
    </p>

    <p>
      ${escapeHTML(question.explicacao)}
    </p>

    ${source}

  `;

  showElement("answerFeedback");

  showElement("nextTurn");

  $("nextTurn").focus();

}


/* =============================================
   REFERÊNCIAS DAS QUESTÕES
============================================= */

function getSourceHTML(key) {

  const source =
    CONTENT.fontes[key];

  if (!source) {
    return "";
  }

  if (source.url) {

    return `

      <span class="source">

        FUNDAMENTAÇÃO:

        <a
          href="${source.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHTML(source.autor)} ↗
        </a>

      </span>

    `;

  }

  return `

    <span class="source">
      FUNDAMENTAÇÃO:
      ${escapeHTML(source.autor)}
    </span>

  `;

}


/* =============================================
   DILEMAS CTSA
============================================= */

function chooseDilemma(index) {

  if (
    !game ||
    game.locked ||
    game.phase !== 2
  ) {
    return;
  }

  game.locked = true;

  game.selectedIndex = index;

  clearTimer();

  $("pauseTimer").disabled = true;

  const team =
    activeTeam();

  const dilemma =
    game.current;

  document.querySelectorAll(
    ".answer-option"
  ).forEach((button) => {

    button.disabled = true;

    const buttonIndex =
      Number(button.dataset.index);

    if (
      buttonIndex === index
    ) {

      button.classList.add(
        "is-correct"
      );

    }

  });

  /*
    Nos dilemas, a marcação verde
    indica a escolha realizada,
    não um gabarito universal.
  */

  if (index === -1) {

    team.streak = 0;

    $("answerFeedback").className =
      "answer-feedback wrong";

    $("answerFeedback").innerHTML = `

      <h3>
        ⏱ TEMPO ESGOTADO
      </h3>

      <p>
        A equipe não registrou uma decisão.
        Nenhuma alteração foi aplicada
        aos indicadores.
      </p>

      <p>
        <strong>Questão para reflexão:</strong>
        ${escapeHTML(dilemma.reflexao)}
      </p>

      ${getSourceHTML("ambos")}

    `;

    showElement("answerFeedback");

    showElement("nextTurn");

    updateScoreboard();

    playWrongSound();

    return;

  }

  const decision =
    dilemma.alternativas[index];

  /*
    Pontos por construir uma decisão.
    A qualidade da argumentação poderá
    ser avaliada separadamente.
  */

  const points = 140;

  team.score += points;

  team.streak = 0;

  /*
    Impactos simulados.
  */

  game.world.clima = clamp(
    game.world.clima +
    decision.impacto.clima,
    0,
    100
  );

  game.world.justica = clamp(
    game.world.justica +
    decision.impacto.justica,
    0,
    100
  );

  game.world.confianca = clamp(
    game.world.confianca +
    decision.impacto.confianca,
    0,
    100
  );

  updateWorldBoard();

  updateScoreboard();

  $("answerFeedback").className =
    "answer-feedback correct";

  $("answerFeedback").innerHTML = `

    <h3>
      🌍 DECISÃO REGISTRADA
    </h3>

    <p>
      <strong>
        +${points} pontos
      </strong>
    </p>

    <p>
      ${escapeHTML(decision.consequencia)}
    </p>

    <p>
      <strong>
        Impactos simulados:
      </strong>
    </p>

    <p>
      Clima:
      ${formatImpact(decision.impacto.clima)}
      <br>

      Justiça:
      ${formatImpact(decision.impacto.justica)}
      <br>

      Confiança:
      ${formatImpact(decision.impacto.confianca)}
    </p>

    <p>
      <strong>
        Para o debate:
      </strong>
      ${escapeHTML(dilemma.reflexao)}
    </p>

    <p>
      Não existe um gabarito único.
      Discuta os critérios, os benefícios,
      os riscos e quem será afetado.
    </p>

    ${getSourceHTML("ambos")}

  `;

  showElement("answerFeedback");

  showElement("moderatorBonus");

  showElement("nextTurn");

  playCorrectSound();

}


/* =============================================
   INDICADORES CTSA
============================================= */

function updateWorldBoard() {

  if (!game) {
    return;
  }

  $("metricClimate").textContent =
    game.world.clima;

  $("metricJustice").textContent =
    game.world.justica;

  $("metricTrust").textContent =
    game.world.confianca;

}


function formatImpact(value) {

  if (value > 0) {
    return `+${value}`;
  }

  return String(value);

}


/* =============================================
   BÔNUS DE ARGUMENTAÇÃO
============================================= */

function awardArgumentBonus() {

  if (
    !game ||
    game.phase !== 2 ||
    !game.locked ||
    game.selectedIndex === -1 ||
    game.argumentBonusUsed
  ) {
    return;
  }

  game.argumentBonusUsed = true;

  activeTeam().score += 60;

  $("awardArgument").disabled = true;

  $("awardArgument").textContent =
    "✓ BÔNUS CONCEDIDO";

  updateScoreboard();

  playCorrectSound();

}


/* =============================================
   AVANÇAR RODADA
============================================= */

function nextRound() {

  if (
    !game ||
    !game.locked ||
    game.pendingReveal
  ) {
    return;
  }

  game.round++;

  beginRound();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =============================================
   FINAL DA PARTIDA
============================================= */

function finishGame() {

  clearTimer();

  const ranking = [...game.teams]
    .sort(
      (a, b) => b.score - a.score
    );

  const highest =
    ranking[0].score;

  const winners = ranking.filter(
    (team) => team.score === highest
  );

  let message = "";

  if (winners.length === 1) {

    message =
      `A equipe ${winners[0].name} ` +
      `conquistou o Conselho do Futuro ` +
      `com ${winners[0].score} pontos!`;

  } else {

    message =
      "O Conselho do Futuro terminou empatado! " +
      "As equipes vencedoras são: " +
      winners.map(
        (team) => team.name
      ).join(", ") +
      ".";

  }

  $("winnerMessage").textContent =
    message;

  $("finalRanking").innerHTML =
    ranking.map(
      (team, index) => {

        const first =
          team.score === highest;

        const position =
          first
            ? "🏆"
            : `${index + 1}º`;

        return `

          <div class="
            ranking-item
            ${first ? "first-place" : ""}
          ">

            <span class="ranking-position">
              ${position}
            </span>

            <span
              class="ranking-name"
              style="color:${team.color}"
            >
              ${escapeHTML(team.name)}
            </span>

            <strong class="ranking-points">
              ${team.score}
            </strong>

          </div>

        `;

      }
    ).join("");

  showView("results");

  launchConfetti();

  playSound(680, 0.2);

  window.setTimeout(
    () => playSound(880, 0.23),
    180
  );

}


/* =============================================
   CONFETES
============================================= */

function launchConfetti() {

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }

  const canvas =
    $("confetti");

  const ctx =
    canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const width =
    window.innerWidth;

  const height =
    window.innerHeight;

  const dpr =
    window.devicePixelRatio || 1;

  canvas.width =
    Math.round(width * dpr);

  canvas.height =
    Math.round(height * dpr);

  ctx.setTransform(
    dpr, 0, 0, dpr, 0, 0
  );

  const colors = [
    "#34e5e5",
    "#ffc857",
    "#a579ff",
    "#ee79b2",
    "#38dc98"
  ];

  const particles = Array.from(
    { length: 140 },
    () => ({

      x: Math.random() * width,

      y: -Math.random() * height,

      size:
        3 + Math.random() * 6,

      speed:
        2 + Math.random() * 4,

      drift:
        (Math.random() - 0.5) * 2,

      rotation:
        Math.random() * Math.PI,

      color:
        colors[
          Math.floor(
            Math.random() * colors.length
          )
        ]

    })
  );

  const start =
    performance.now();

  function animate(now) {

    ctx.clearRect(
      0, 0, width, height
    );

    particles.forEach(
      (particle) => {

        particle.y +=
          particle.speed;

        particle.x +=
          particle.drift;

        particle.rotation +=
          0.04;

        ctx.save();

        ctx.translate(
          particle.x,
          particle.y
        );

        ctx.rotate(
          particle.rotation
        );

        ctx.fillStyle =
          particle.color;

        ctx.fillRect(
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size * 0.6
        );

        ctx.restore();

      }
    );

    if (now - start < 6500) {

      requestAnimationFrame(
        animate
      );

    } else {

      ctx.clearRect(
        0, 0, width, height
      );

    }

  }

  requestAnimationFrame(
    animate
  );

}


/* =============================================
   NAVEGAÇÃO
============================================= */

function openSetup() {

  clearTimer();

  renderTeamInputs();

  showView("setup");

}


function returnLanding() {

  clearTimer();

  game = null;

  showView("landing");

}


function restartGame() {

  clearTimer();

  game = null;

  showView("setup");

}


/* =============================================
   TECLADO
============================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (!game) {
      return;
    }

    if (
      !$("game").classList.contains(
        "active"
      )
    ) {
      return;
    }

    const element =
      document.activeElement;

    if (
      element &&
      ["INPUT", "SELECT", "TEXTAREA"].includes(
        element.tagName
      )
    ) {
      return;
    }

    const key =
      event.key.toLowerCase();

    /*
      Teclas 1, 2, 3 e 4
      selecionam alternativas.
    */

    if (
      ["1", "2", "3", "4"].includes(key) &&
      !game.locked
    ) {

      const index =
        Number(key) - 1;

      const button =
        document.querySelector(
          `.answer-option[data-index="${index}"]`
        );

      if (
        button &&
        !button.disabled &&
        !button.classList.contains("hidden")
      ) {

        button.click();

      }

    }

    /*
      Barra de espaço:
      pausar ou retomar.
    */

    if (
      event.code === "Space" &&
      !game.locked
    ) {

      event.preventDefault();

      togglePause();

    }

    /*
      Tecla N:
      próxima rodada.
    */

    if (
      key === "n" &&
      game.locked &&
      !game.pendingReveal
    ) {

      nextRound();

    }

  }
);


/* =============================================
   EVENTOS DA INTERFACE
============================================= */

$("goSetup").addEventListener(
  "click",
  openSetup
);

$("goSetupBottom").addEventListener(
  "click",
  openSetup
);

$("backLanding").addEventListener(
  "click",
  returnLanding
);

$("teamCount").addEventListener(
  "change",
  renderTeamInputs
);

$("startGame").addEventListener(
  "click",
  startGame
);

$("startStage").addEventListener(
  "click",
  beginPhase
);

$("nextTurn").addEventListener(
  "click",
  nextRound
);

$("pauseTimer").addEventListener(
  "click",
  () => {

    togglePause();

    updatePowers();

  }
);

$("powerDouble").addEventListener(
  "click",
  activateDouble
);

$("powerHint").addEventListener(
  "click",
  activateHint
);

$("powerTime").addEventListener(
  "click",
  activateExtraTime
);

$("awardChallenge").addEventListener(
  "click",
  awardCrossChallenge
);

$("skipChallenge").addEventListener(
  "click",
  skipCrossChallenge
);

$("awardArgument").addEventListener(
  "click",
  awardArgumentBonus
);

$("restartGame").addEventListener(
  "click",
  restartGame
);

$("soundToggle").addEventListener(
  "click",
  () => {

    soundEnabled =
      !soundEnabled;

    $("soundToggle").textContent =
      soundEnabled
        ? "🔊"
        : "🔇";

  }
);

$("logoLink").addEventListener(
  "click",
  (event) => {

    event.preventDefault();

    if (game) {

      const confirmed =
        window.confirm(
          "Voltar ao início? " +
          "A partida atual será encerrada."
        );

      if (!confirmed) {
        return;
      }

    }

    returnLanding();

  }
);


/* =============================================
   INICIALIZAÇÃO
============================================= */

renderTeamInputs();

showView("landing");

console.info(
  "ComplexMente CTSA iniciado."
);