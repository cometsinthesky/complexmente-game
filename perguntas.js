/* =============================================
   COMPLEXMENTE
   BANCO DE PERGUNTAS E DILEMAS CTSA
   =============================================

   Adaptação didática baseada em:

   MIANI et al. (2025)
   Embracing Complexity and Uncertainties
   to Deal with Climate Change Challenges.

   CHRISTENSEN (2009)
   Risk and School Science Education.

   Os cenários e indicadores de impacto
   são simulações educativas.
============================================= */

window.COMPLEXM_CONTENT = {

  /* =========================================
     REFERÊNCIAS
  ========================================= */

  fontes: {

    miani: {
      autor: "Miani et al. (2025)",
      titulo:
        "Embracing Complexity and Uncertainties to Deal with Climate Change Challenges",
      url:
        "https://doi.org/10.1007/s11191-025-00658-9"
    },

    christensen: {
      autor: "Christensen (2009)",
      titulo:
        "Risk and School Science Education",
      url:
        "https://doi.org/10.1080/03057260903142293"
    },

    ambos: {
      autor: "Miani et al. (2025); Christensen (2009)",
      titulo:
        "Complexidade, incerteza, risco e educação científica",
      url: ""
    }
  },

  /* =========================================
     DESCRIÇÃO DAS FASES
  ========================================= */

  fases: [

    {
      numero: "FASE 01",
      nome: "DESPERTAR DA COMPLEXIDADE",
      icone: "◈",

      descricao:
        "O conhecimento é seu primeiro recurso. " +
        "Identifique conceitos, reconheça conexões " +
        "e demonstre que sua equipe compreende os " +
        "fundamentos da complexidade, do risco " +
        "e da incerteza."
    },

    {
      numero: "FASE 02",
      nome: "TERRITÓRIO DAS INCERTEZAS",
      icone: "⚡",

      descricao:
        "A realidade raramente oferece respostas " +
        "simples. Enfrente perguntas avançadas, " +
        "cartas inesperadas e desafios cruzados. " +
        "Questione certezas e defenda argumentos."
    },

    {
      numero: "FASE 03",
      nome: "DILEMAS CTSA",
      icone: "🌍",

      descricao:
        "Sua equipe participa de decisões coletivas. " +
        "Cada escolha envolve benefícios, riscos " +
        "e consequências para o clima, a justiça " +
        "social e a confiança pública."
    },

    {
      numero: "FASE FINAL",
      nome: "CONSELHO DO FUTURO",
      icone: "♛",

      descricao:
        "Chegou a hora da decisão final. " +
        "Cada equipe poderá apostar pontos " +
        "antes de enfrentar uma questão decisiva. " +
        "Conhecimento, estratégia e argumentação " +
        "definirão o resultado."
    }

  ],

  /* =========================================
     QUESTÕES FÁCEIS
     100 PONTOS
  ========================================= */

  questoesFaceis: [

    {
      categoria: "COMPLEXIDADE",

      pergunta:
        "O que caracteriza um sistema complexo?",

      alternativas: [
        "A interação entre múltiplos elementos que podem produzir resultados emergentes.",
        "A existência de apenas uma causa para cada fenômeno.",
        "A possibilidade de prever perfeitamente todos os acontecimentos.",
        "A ausência de qualquer organização entre seus componentes."
      ],

      correta: 0,

      explicacao:
        "Sistemas complexos apresentam interações, " +
        "dependências e possíveis propriedades emergentes. " +
        "O comportamento do conjunto não é necessariamente " +
        "explicado pela análise isolada de cada parte.",

      fonte: "miani"
    },

    {
      categoria: "CTSA",

      pergunta:
        "O que representa a abordagem CTSA?",

      alternativas: [
        "O estudo exclusivamente experimental das Ciências Naturais.",
        "A articulação entre Ciência, Tecnologia, Sociedade e Ambiente.",
        "A substituição do conhecimento científico pela opinião individual.",
        "A análise apenas dos benefícios econômicos de uma tecnologia."
      ],

      correta: 1,

      explicacao:
        "A perspectiva CTSA relaciona conhecimentos " +
        "científicos e tecnológicos com suas dimensões " +
        "sociais, políticas, culturais e ambientais.",

      fonte: "ambos"
    },

    {
      categoria: "RISCO",

      pergunta:
        "Qual afirmação representa uma compreensão adequada do risco?",

      alternativas: [
        "Risco significa que um dano certamente acontecerá.",
        "Todo risco pode ser totalmente eliminado.",
        "A avaliação do risco pode envolver probabilidades, consequências e contexto.",
        "Um risco deixa de existir quando não é percebido."
      ],

      correta: 2,

      explicacao:
        "A análise de riscos envolve a possibilidade " +
        "de acontecimentos e suas consequências. " +
        "A percepção social, a exposição e o contexto " +
        "também influenciam a avaliação.",

      fonte: "christensen"
    },

    {
      categoria: "MUDANÇAS CLIMÁTICAS",

      pergunta:
        "Por que um único dia muito frio não refuta o aquecimento global?",

      alternativas: [
        "Porque temperaturas baixas nunca acontecem em climas quentes.",
        "Porque o clima é analisado por padrões de longo prazo, e não por um evento isolado.",
        "Porque a temperatura diária não pode ser medida.",
        "Porque a previsão do tempo e o estudo do clima são a mesma coisa."
      ],

      correta: 1,

      explicacao:
        "O tempo meteorológico descreve condições " +
        "em momentos e lugares específicos. " +
        "O clima envolve padrões estatísticos " +
        "observados em períodos prolongados.",

      fonte: "miani"
    },

    {
      categoria: "NATUREZA DA CIÊNCIA",

      pergunta:
        "A existência de incerteza em uma pesquisa científica significa que:",

      alternativas: [
        "A pesquisa não possui valor.",
        "Todas as explicações são igualmente confiáveis.",
        "O conhecimento científico deve ser abandonado.",
        "Existem limites ou variabilidades que precisam ser considerados."
      ],

      correta: 3,

      explicacao:
        "Incerteza não é sinônimo de ausência de " +
        "conhecimento. Reconhecer e comunicar " +
        "incertezas faz parte da prática científica.",

      fonte: "ambos"
    },

    {
      categoria: "MODELOS CIENTÍFICOS",

      pergunta:
        "Qual é a principal função de um modelo científico?",

      alternativas: [
        "Representar aspectos de um sistema para investigar e compreender fenômenos.",
        "Reproduzir toda a realidade sem simplificações.",
        "Substituir permanentemente as observações.",
        "Garantir previsões exatas em qualquer circunstância."
      ],

      correta: 0,

      explicacao:
        "Modelos são representações construídas " +
        "para investigar fenômenos. " +
        "Eles utilizam hipóteses, dados e simplificações, " +
        "possuindo possibilidades e limitações.",

      fonte: "miani"
    }

  ],

  /* =========================================
     QUESTÕES MÉDIAS
     170 PONTOS
  ========================================= */

  questoesMedias: [

    {
      categoria: "INCERTEZA EPISTÊMICA",

      pergunta:
        "O que caracteriza a incerteza epistêmica?",

      alternativas: [
        "Uma incerteza ligada exclusivamente às decisões políticas.",
        "Uma limitação do conhecimento disponível sobre determinado sistema.",
        "A impossibilidade de qualquer investigação científica.",
        "Uma garantia de que modelos científicos estão incorretos."
      ],

      correta: 1,

      explicacao:
        "A incerteza epistêmica está relacionada " +
        "ao conhecimento limitado sobre processos, " +
        "parâmetros ou mecanismos. " +
        "Parte dela pode ser reduzida por novas " +
        "observações e pesquisas.",

      fonte: "miani"
    },

    {
      categoria: "SOCIEDADE DE RISCO",

      pergunta:
        "Na discussão sobre sociedade de risco, qual problema ganha destaque?",

      alternativas: [
        "A distribuição igualitária de todos os riscos.",
        "A eliminação das consequências da modernização.",
        "A produção e distribuição desigual de riscos associados também à ciência e à tecnologia.",
        "A inexistência de riscos gerados por atividades humanas."
      ],

      correta: 2,

      explicacao:
        "Christensen discute contribuições " +
        "da teoria da sociedade de risco, " +
        "particularmente a produção de riscos " +
        "pela modernização e sua distribuição " +
        "socialmente desigual.",

      fonte: "christensen"
    },

    {
      categoria: "COMPLEXIDADE CLIMÁTICA",

      pergunta:
        "Por que uma mudança relativamente pequena pode produzir efeitos importantes em sistemas complexos?",

      alternativas: [
        "Porque todas as relações são lineares.",
        "Porque não existem mecanismos de retroalimentação.",
        "Porque as variáveis atuam sempre independentemente.",
        "Porque interações não lineares e retroalimentações podem amplificar efeitos."
      ],

      correta: 3,

      explicacao:
        "Em sistemas não lineares, as respostas " +
        "não precisam ser proporcionais às mudanças " +
        "iniciais. Interações e retroalimentações " +
        "podem modificar a evolução do sistema.",

      fonte: "miani"
    },

    {
      categoria: "ALFABETIZAÇÃO CIENTÍFICA",

      pergunta:
        "Por que discutir riscos na Educação em Ciências é importante?",

      alternativas: [
        "Porque favorece decisões fundamentadas sobre questões sociocientíficas.",
        "Porque elimina a necessidade de conhecimentos científicos.",
        "Porque transforma todas as decisões em cálculos exatos.",
        "Porque impede a existência de controvérsias."
      ],

      correta: 0,

      explicacao:
        "Christensen argumenta que compreender " +
        "riscos contribui para a alfabetização " +
        "científica voltada à cidadania e à " +
        "participação em decisões contemporâneas.",

      fonte: "christensen"
    },

    {
      categoria: "EVIDÊNCIAS",

      pergunta:
        "Dois fenômenos aparecem frequentemente juntos. Isso demonstra, por si só, que um causa o outro?",

      alternativas: [
        "Sim, sempre que a correlação é positiva.",
        "Não. Correlação, isoladamente, não estabelece causalidade.",
        "Sim, quando há muitas notícias sobre o assunto.",
        "Não, pois a ciência nunca identifica causas."
      ],

      correta: 1,

      explicacao:
        "Uma associação estatística pode ocorrer " +
        "sem relação causal direta. " +
        "É necessário investigar explicações " +
        "alternativas, mecanismos e evidências.",

      fonte: "christensen"
    },

    {
      categoria: "PRINCÍPIO DA PRECAUÇÃO",

      pergunta:
        "Em qual situação o princípio da precaução pode ser especialmente relevante?",

      alternativas: [
        "Quando um dano já é impossível.",
        "Quando existe certeza absoluta sobre todas as consequências.",
        "Quando há possibilidade plausível de danos graves e conhecimento ainda limitado.",
        "Quando nenhuma decisão possui consequências."
      ],

      correta: 2,

      explicacao:
        "O princípio da precaução pode orientar " +
        "medidas proporcionais de proteção " +
        "diante de riscos plausíveis e relevantes, " +
        "mesmo quando persistem incertezas.",

      fonte: "christensen"
    }

  ],

  /* =========================================
     QUESTÕES COMPLEXAS
     260 PONTOS
  ========================================= */

  questoesComplexas: [

    {
      categoria: "FUTUROS CLIMÁTICOS",

      pergunta:
        "Por que o aprimoramento dos modelos climáticos não elimina a incerteza sobre as emissões futuras?",

      alternativas: [
        "Porque modelos computacionais não utilizam dados reais.",
        "Porque as emissões dependem de decisões políticas, econômicas e sociais futuras.",
        "Porque o clima não apresenta regularidades físicas.",
        "Porque todos os cenários de emissão possuem a mesma probabilidade conhecida."
      ],

      correta: 1,

      explicacao:
        "Mesmo modelos físicos melhores não " +
        "determinam quais decisões as sociedades " +
        "tomarão. Trajetórias de emissões dependem " +
        "de escolhas humanas, tecnologias e políticas.",

      fonte: "miani"
    },

    {
      categoria: "TIPOS DE INCERTEZA",

      pergunta:
        "Qual alternativa distingue adequadamente incerteza epistêmica e aleatória?",

      alternativas: [
        "Ambas resultam apenas de erros humanos.",
        "A epistêmica é sempre impossível de reduzir; a aleatória desaparece com novos dados.",
        "A epistêmica envolve limites do conhecimento; a aleatória envolve variabilidade inerente ao sistema.",
        "A aleatória é exclusivamente política; a epistêmica é exclusivamente econômica."
      ],

      correta: 2,

      explicacao:
        "Miani et al. discutem diferentes " +
        "fontes de incerteza. A epistêmica " +
        "relaciona-se ao conhecimento disponível, " +
        "enquanto a aleatória envolve a " +
        "variabilidade inerente aos processos.",

      fonte: "miani"
    },

    {
      categoria: "RISCO E IGNORÂNCIA",

      pergunta:
        "Uma tecnologia apresenta consequências possíveis ainda desconhecidas, sem que seja possível enumerar todos os resultados. Qual conceito melhor descreve essa situação?",

      alternativas: [
        "Risco com probabilidades conhecidas.",
        "Certeza científica.",
        "Previsibilidade determinística.",
        "Ignorância sobre resultados ou mecanismos ainda não identificados."
      ],

      correta: 3,

      explicacao:
        "Christensen discute distinções entre " +
        "risco, incerteza, ignorância e " +
        "indeterminação. A ignorância envolve " +
        "a existência de aspectos que ainda " +
        "não sabemos identificar.",

      fonte: "christensen"
    },

    {
      categoria: "ESTATÍSTICA DO RISCO",

      pergunta:
        "Um risco passa de 1 caso em 10.000 para 2 casos em 10.000. Como interpretar essa mudança?",

      alternativas: [
        "O risco relativo aumentou 100%, mas o aumento absoluto foi de 1 caso em 10.000.",
        "O risco absoluto aumentou 100 pontos percentuais.",
        "A probabilidade passou a ser de 50%.",
        "O número de casos demonstra que o evento acontecerá com todos."
      ],

      correta: 0,

      explicacao:
        "O risco relativo dobrou, passando " +
        "de 1 para 2 casos em 10.000. " +
        "O aumento absoluto corresponde a " +
        "1 caso em 10.000, ou 0,01 ponto percentual. " +
        "A comunicação isolada do aumento relativo " +
        "pode produzir interpretações equivocadas.",

      fonte: "christensen"
    },

    {
      categoria: "DECISÃO SOB INCERTEZA",

      pergunta:
        "Uma cidade enfrenta incertezas sobre futuras chuvas extremas. Qual estratégia é mais defensável?",

      alternativas: [
        "Aguardar certeza completa antes de qualquer ação.",
        "Construir somente a solução mais barata, independentemente dos riscos.",
        "Combinar evidências disponíveis, cenários, monitoramento e políticas adaptáveis.",
        "Escolher uma previsão e tratá-la como resultado garantido."
      ],

      correta: 2,

      explicacao:
        "Quando o futuro é incerto, decisões " +
        "podem incorporar múltiplos cenários, " +
        "monitoramento e revisão de estratégias. " +
        "A incerteza exige reflexão, não necessariamente " +
        "paralisação.",

      fonte: "ambos"
    },

    {
      categoria: "SISTEMAS COMPLEXOS",

      pergunta:
        "Qual é uma consequência importante da não linearidade nos sistemas climáticos?",

      alternativas: [
        "Todas as respostas são proporcionais às perturbações.",
        "Pequenas mudanças podem produzir respostas desproporcionais dependendo do estado e das interações do sistema.",
        "As interações entre variáveis deixam de existir.",
        "O conhecimento das condições iniciais garante previsão perfeita de longo prazo."
      ],

      correta: 1,

      explicacao:
        "Sistemas climáticos envolvem dinâmicas " +
        "não lineares e dependência das condições " +
        "iniciais. Isso impõe limites à previsibilidade " +
        "de certos processos, embora não torne " +
        "inúteis as projeções climáticas.",

      fonte: "miani"
    },

    {
      categoria: "CIÊNCIA E SOCIEDADE",

      pergunta:
        "Duas comunidades avaliam diferentemente o mesmo risco tecnológico. Qual interpretação é mais consistente com a literatura?",

      alternativas: [
        "A comunidade que percebe maior risco necessariamente desconhece a ciência.",
        "A avaliação técnica elimina diferenças de valores e interesses.",
        "As percepções são sempre idênticas quando existe o mesmo número de especialistas.",
        "Experiências, confiança, exposição, valores e contextos sociais podem influenciar a avaliação."
      ],

      correta: 3,

      explicacao:
        "A análise de risco não se restringe " +
        "a uma estimativa numérica. " +
        "Confiança nas instituições, experiências " +
        "sociais e percepção dos benefícios " +
        "também influenciam julgamentos.",

      fonte: "christensen"
    },

    {
      categoria: "JUSTIÇA AMBIENTAL",

      pergunta:
        "Uma política reduz emissões totais, mas transfere seus impactos ambientais para comunidades vulneráveis. Como avaliá-la?",

      alternativas: [
        "Como necessariamente justa, pois reduziu emissões.",
        "Como irrelevante, pois impactos locais não fazem parte de CTSA.",
        "Considerando benefícios climáticos, distribuição dos danos e participação das comunidades.",
        "Considerando apenas o custo financeiro."
      ],

      correta: 2,

      explicacao:
        "Uma avaliação CTSA considera " +
        "múltiplas dimensões. O benefício " +
        "ambiental agregado não elimina " +
        "questões relativas à justiça, " +
        "à exposição desigual e à participação.",

      fonte: "ambos"
    },

    {
      categoria: "MODELOS E LIMITAÇÕES",

      pergunta:
        "Vários modelos climáticos produzem projeções semelhantes. Qual conclusão é mais cuidadosa?",

      alternativas: [
        "O acordo entre modelos fornece informação relevante, mas não elimina erros ou limitações compartilhadas.",
        "Todos os modelos representam exatamente a realidade.",
        "Não há necessidade de confrontar projeções com observações.",
        "Nenhuma projeção pode fundamentar políticas públicas."
      ],

      correta: 0,

      explicacao:
        "A convergência entre modelos pode " +
        "fortalecer uma conclusão, mas os " +
        "modelos também podem compartilhar " +
        "hipóteses, simplificações e vieses.",

      fonte: "miani"
    },

    {
      categoria: "ALFABETIZAÇÃO PARA CIDADANIA",

      pergunta:
        "Qual prática educacional melhor prepara estudantes para lidar com questões sociocientíficas controversas?",

      alternativas: [
        "Apresentar somente definições sem discutir contextos.",
        "Combinar análise de evidências, comunicação de incertezas, argumentação e reflexão sobre valores.",
        "Eliminar debates por não existir consenso em todas as questões.",
        "Tratar opiniões e evidências como igualmente fundamentadas em qualquer situação."
      ],

      correta: 1,

      explicacao:
        "A alfabetização científica para " +
        "a cidadania envolve compreender " +
        "e avaliar evidências, reconhecer " +
        "incertezas e participar criticamente " +
        "de decisões sociocientíficas.",

      fonte: "christensen"
    }

  ],

  /* =========================================
     DILEMAS CTSA
     SEM GABARITO ÚNICO

     Os impactos são valores fictícios
     para discussão didática.
  ========================================= */

  dilemas: [

    {
      categoria: "ENERGIA E JUSTIÇA",

      pergunta:
        "Uma cidade precisa reduzir suas emissões e garantir energia acessível. Qual política sua equipe priorizaria?",

      contexto:
        "O município possui bairros de baixa renda, " +
        "crescimento da demanda elétrica e recursos " +
        "limitados. Uma decisão precisa ser tomada " +
        "antes da próxima revisão orçamentária.",

      alternativas: [

        {
          texto:
            "Investir rapidamente em uma grande infraestrutura de energia renovável.",

          consequencia:
            "A medida pode acelerar a redução das emissões, " +
            "mas exige análise dos impactos territoriais " +
            "e da distribuição dos custos.",

          impacto: {
            clima: 12,
            justica: -4,
            confianca: -2
          }
        },

        {
          texto:
            "Priorizar eficiência energética e geração distribuída em comunidades vulneráveis.",

          consequencia:
            "A política pode distribuir benefícios " +
            "e reduzir consumo, mas depende de " +
            "coordenação e implementação gradual.",

          impacto: {
            clima: 7,
            justica: 12,
            confianca: 8
          }
        },

        {
          texto:
            "Criar um processo participativo e adiar parte do investimento até concluir os estudos.",

          consequencia:
            "A participação pode melhorar a legitimidade, " +
            "mas o adiamento também possui custos " +
            "e pode prolongar emissões.",

          impacto: {
            clima: -4,
            justica: 7,
            confianca: 12
          }
        }

      ],

      reflexao:
        "Como equilibrar urgência climática, " +
        "justiça distributiva e participação social?"
    },

    {
      categoria: "ENCHENTES URBANAS",

      pergunta:
        "Previsões apontam risco de enchentes intensas, mas existe incerteza sobre quando ocorrerão. O que fazer?",

      contexto:
        "Uma cidade apresenta ocupações em áreas " +
        "suscetíveis a inundações. O orçamento " +
        "permite apenas uma intervenção prioritária.",

      alternativas: [

        {
          texto:
            "Construir imediatamente uma grande obra de contenção.",

          consequencia:
            "A infraestrutura pode proteger áreas críticas, " +
            "mas seu custo elevado e seus impactos " +
            "dependem da localização e manutenção.",

          impacto: {
            clima: 5,
            justica: -3,
            confianca: 2
          }
        },

        {
          texto:
            "Combinar alerta antecipado, drenagem sustentável e participação comunitária.",

          consequencia:
            "A estratégia diversifica medidas de adaptação, " +
            "mas requer coordenação e acompanhamento contínuo.",

          impacto: {
            clima: 9,
            justica: 10,
            confianca: 8
          }
        },

        {
          texto:
            "Aguardar novas séries de dados antes de investir.",

          consequencia:
            "Mais dados podem reduzir determinadas incertezas, " +
            "mas a espera mantém a população exposta.",

          impacto: {
            clima: -5,
            justica: -8,
            confianca: -5
          }
        }

      ],

      reflexao:
        "Em quais situações esperar por mais evidências " +
        "pode produzir riscos maiores do que agir?"
    },

    {
      categoria: "INTELIGÊNCIA ARTIFICIAL",

      pergunta:
        "Uma escola pretende utilizar inteligência artificial para identificar estudantes em risco de evasão. Como proceder?",

      contexto:
        "A ferramenta utiliza dados de frequência, " +
        "desempenho e informações socioeconômicas. " +
        "Sua precisão ainda não foi suficientemente " +
        "validada no contexto local.",

      alternativas: [

        {
          texto:
            "Implementar o sistema automaticamente para todos os estudantes.",

          consequencia:
            "A adoção pode agilizar intervenções, " +
            "mas amplia riscos de vieses, " +
            "erros e tratamento inadequado de dados.",

          impacto: {
            clima: 0,
            justica: -10,
            confianca: -12
          }
        },

        {
          texto:
            "Realizar um projeto piloto com avaliação de vieses, supervisão humana e participação escolar.",

          consequencia:
            "A implantação é mais lenta, " +
            "mas permite avaliar resultados, " +
            "corrigir problemas e fortalecer " +
            "a participação.",

          impacto: {
            clima: 0,
            justica: 9,
            confianca: 12
          }
        },

        {
          texto:
            "Rejeitar o uso de qualquer ferramenta automatizada.",

          consequencia:
            "A decisão evita riscos associados " +
            "à ferramenta, mas também impede " +
            "investigar benefícios potenciais " +
            "sob condições controladas.",

          impacto: {
            clima: 0,
            justica: 3,
            confianca: 1
          }
        }

      ],

      reflexao:
        "Como avaliar benefícios tecnológicos " +
        "sem ignorar incertezas e desigualdades?"
    },

    {
      categoria: "TRANSIÇÃO ENERGÉTICA",

      pergunta:
        "Uma região possui minerais necessários para tecnologias de energia renovável, mas a extração pode causar danos socioambientais. Qual decisão tomar?",

      contexto:
        "A expansão da mineração promete empregos " +
        "e fornecimento de materiais estratégicos. " +
        "Comunidades locais questionam possíveis " +
        "impactos sobre a água e o território.",

      alternativas: [

        {
          texto:
            "Autorizar imediatamente a mineração para acelerar a transição energética.",

          consequencia:
            "A medida favorece a cadeia produtiva, " +
            "mas pode ampliar conflitos " +
            "e danos socioambientais.",

          impacto: {
            clima: 9,
            justica: -12,
            confianca: -10
          }
        },

        {
          texto:
            "Exigir avaliação ambiental, consulta às comunidades e fiscalização independente.",

          consequencia:
            "A decisão pode reduzir riscos e " +
            "melhorar a legitimidade, mas exige " +
            "tempo, recursos e acompanhamento.",

          impacto: {
            clima: 5,
            justica: 10,
            confianca: 11
          }
        },

        {
          texto:
            "Suspender o projeto e priorizar reciclagem, eficiência de materiais e tecnologias alternativas.",

          consequencia:
            "A política reduz a pressão local, " +
            "mas pode enfrentar limitações " +
            "de escala e disponibilidade.",

          impacto: {
            clima: 4,
            justica: 8,
            confianca: 5
          }
        }

      ],

      reflexao:
        "Uma solução ambiental pode produzir " +
        "novos riscos sociais e ecológicos?"
    },

    {
      categoria: "SAÚDE E COMUNICAÇÃO",

      pergunta:
        "Uma nova tecnologia de saúde apresenta resultados promissores, mas ainda existem incertezas sobre seus efeitos de longo prazo. Como comunicar a situação?",

      contexto:
        "A população deseja orientações claras. " +
        "Especialistas possuem evidências favoráveis, " +
        "mas reconhecem limitações nos estudos " +
        "de acompanhamento.",

      alternativas: [

        {
          texto:
            "Divulgar apenas os resultados positivos para evitar preocupação.",

          consequencia:
            "A comunicação parece simples, " +
            "mas pode prejudicar a confiança " +
            "caso limitações sejam descobertas.",

          impacto: {
            clima: 0,
            justica: -4,
            confianca: -12
          }
        },

        {
          texto:
            "Apresentar benefícios, riscos conhecidos, incertezas e critérios de acompanhamento.",

          consequencia:
            "A transparência permite decisões " +
            "mais informadas, embora exija " +
            "comunicação cuidadosa.",

          impacto: {
            clima: 0,
            justica: 8,
            confianca: 12
          }
        },

        {
          texto:
            "Evitar qualquer orientação enquanto não existir certeza completa.",

          consequencia:
            "A espera evita recomendações precipitadas, " +
            "mas pode privar pessoas de informações " +
            "relevantes para suas decisões.",

          impacto: {
            clima: 0,
            justica: -5,
            confianca: -4
          }
        }

      ],

      reflexao:
        "Por que comunicar incertezas pode " +
        "fortalecer, em vez de enfraquecer, " +
        "a confiança na ciência?"
    }

  ],

  /* =========================================
     CARTAS DE RISCO
  ========================================= */

  cartasRisco: [

    {
      titulo: "⚠️ INFORMAÇÃO INCOMPLETA",

      descricao:
        "Parte dos dados está indisponível. " +
        "Sua equipe perde 5 segundos.",

      tempo: -5,
      bonus: 0
    },

    {
      titulo: "🔬 NOVAS EVIDÊNCIAS",

      descricao:
        "Uma pesquisa apresenta informações " +
        "relevantes. Sua equipe recebe " +
        "10 segundos adicionais.",

      tempo: 10,
      bonus: 0
    },

    {
      titulo: "🌪️ EVENTO IMPREVISTO",

      descricao:
        "O cenário mudou inesperadamente. " +
        "Sua equipe terá 5 segundos a menos.",

      tempo: -5,
      bonus: 0
    },

    {
      titulo: "🤝 COOPERAÇÃO CIENTÍFICA",

      descricao:
        "Uma rede de pesquisadores compartilha dados. " +
        "Um acerto vale 40 pontos extras.",

      tempo: 0,
      bonus: 40
    },

    {
      titulo: "📡 MONITORAMENTO AMPLIADO",

      descricao:
        "Novas informações estão disponíveis. " +
        "Sua equipe ganha 5 segundos.",

      tempo: 5,
      bonus: 0
    },

    {
      titulo: "📢 PRESSÃO SOCIAL",

      descricao:
        "Uma decisão precisa ser comunicada " +
        "rapidamente. Um acerto vale " +
        "30 pontos extras.",

      tempo: 0,
      bonus: 30
    }

  ],

  /* =========================================
     QUESTÕES DA FASE FINAL
  ========================================= */

  questoesFinais: [

    {
      categoria: "CONSELHO DO FUTURO",

      pergunta:
        "Uma comissão precisa decidir sobre uma política climática com resultados futuros incertos. Qual procedimento expressa uma abordagem científica e socialmente responsável?",

      alternativas: [
        "Escolher a previsão mais otimista e ignorar os demais cenários.",
        "Considerar evidências, diferentes cenários, possíveis danos, participação social e revisão das medidas.",
        "Transferir integralmente a decisão para um único especialista.",
        "Suspender toda decisão até que desapareçam as incertezas."
      ],

      correta: 1,

      explicacao:
        "A tomada de decisão em problemas " +
        "complexos pode articular evidências, " +
        "cenários, avaliação de riscos, " +
        "participação democrática e " +
        "capacidade de adaptação.",

      fonte: "ambos"
    },

    {
      categoria: "CONSELHO DO FUTURO",

      pergunta:
        "Por que uma educação científica limitada à memorização de conceitos pode ser insuficiente para enfrentar questões CTSA?",

      alternativas: [
        "Porque conceitos científicos não possuem utilidade.",
        "Porque questões sociais não apresentam relações com a ciência.",
        "Porque situações reais exigem relacionar conhecimentos, incertezas, valores e consequências.",
        "Porque qualquer decisão pode ser resolvida apenas por opinião."
      ],

      correta: 2,

      explicacao:
        "Conhecimentos conceituais são fundamentais, " +
        "mas questões sociocientíficas também exigem " +
        "avaliar evidências, riscos, interesses, " +
        "incertezas e impactos sociais.",

      fonte: "christensen"
    },

    {
      categoria: "CONSELHO DO FUTURO",

      pergunta:
        "Qual afirmação descreve melhor a relação entre conhecimento científico e decisões sobre o futuro climático?",

      alternativas: [
        "O conhecimento científico informa cenários e consequências, mas escolhas humanas influenciam as trajetórias futuras.",
        "A física do clima determina automaticamente todas as decisões políticas.",
        "As incertezas tornam todas as políticas igualmente justificáveis.",
        "A existência de modelos elimina a necessidade de participação social."
      ],

      correta: 0,

      explicacao:
        "Projeções científicas auxiliam a compreensão " +
        "dos futuros possíveis. Entretanto, " +
        "decisões coletivas, políticas e tecnológicas " +
        "influenciam as trajetórias de emissões " +
        "e de adaptação.",

      fonte: "miani"
    },

    {
      categoria: "CONSELHO DO FUTURO",

      pergunta:
        "Um projeto tecnológico promete grandes benefícios, mas seus riscos são distribuídos de forma desigual. Qual critério deve integrar a decisão?",

      alternativas: [
        "Considerar apenas a probabilidade média do risco.",
        "Desconsiderar impactos locais quando o benefício total é positivo.",
        "Aceitar automaticamente a avaliação da instituição financiadora.",
        "Analisar evidências, distribuição dos riscos, benefícios, alternativas e participação dos afetados."
      ],

      correta: 3,

      explicacao:
        "Uma análise CTSA considera tanto " +
        "informações técnicas quanto " +
        "questões distributivas, valores, " +
        "confiança e participação pública.",

      fonte: "christensen"
    }

  ]

};