// Banco de perguntas de Química Orgânica.
// categoria: agrupa por tema; dificuldade: 'facil' | 'medio' | 'dificil'.
export const CATEGORIES = [
  'Hidrocarbonetos',
  'Funções Orgânicas',
  'Nomenclatura',
  'Reações Orgânicas',
  'Isomeria',
  'Aromaticidade'
]

export const QUESTIONS = [
  { id: 1, category: 'Hidrocarbonetos', difficulty: 'facil',
    question: 'Qual é a fórmula estrutural do metano?',
    options: ['CH₄', 'C₂H₆', 'C₃H₈', 'C₄H₁₀'], correct: 0,
    explanation: 'O metano (CH₄) é o alcano mais simples, com um carbono e quatro hidrogênios.' },
  { id: 2, category: 'Reações Orgânicas', difficulty: 'medio',
    question: 'Na reação de nitração do benzeno, qual é o reagente utilizado?',
    options: ['HNO₃/H₂SO₄', 'HCl/H₂SO₄', 'H₂SO₄/HNO₃', 'HNO₃/HCl'], correct: 0,
    explanation: 'A nitração do benzeno utiliza uma mistura de ácido nítrico (HNO₃) e ácido sulfúrico (H₂SO₄) como catalisador.' },
  { id: 3, category: 'Aromaticidade', difficulty: 'dificil',
    question: 'Qual é a diretividade de um grupo -OH (hidroxila) em reações de substituição aromática?',
    options: ['Orto-para diretor', 'Meta diretor', 'Desativante', 'Neutro'], correct: 0,
    explanation: 'O grupo -OH é um ativante forte e diretor orto-para devido aos seus pares de elétrons.' },
  { id: 4, category: 'Reações Orgânicas', difficulty: 'medio',
    question: 'Qual é o produto principal da halogenação do metano com cloro (1 equivalente)?',
    options: ['Clorometano', 'Diclorometano', 'Triclorometano', 'Tetraclorometano'], correct: 0,
    explanation: 'Na halogenação do metano, o produto principal é o clorometano (CH₃Cl).' },
  { id: 5, category: 'Reações Orgânicas', difficulty: 'dificil',
    question: 'O que é uma reação de acilação de Friedel-Crafts?',
    options: ['Adição de um grupo acila a um anel aromático', 'Remoção de um grupo acila', 'Oxidação de um anel aromático', 'Redução de um anel aromático'], correct: 0,
    explanation: 'A acilação de Friedel-Crafts adiciona um grupo acila (R-CO-) a um anel aromático.' },
  { id: 6, category: 'Funções Orgânicas', difficulty: 'facil',
    question: 'Qual é a fórmula do etanol?',
    options: ['CH₃CH₂OH', 'CH₃CH₂CH₂OH', 'CH₃COOH', 'CH₃CHO'], correct: 0,
    explanation: 'O etanol tem fórmula CH₃CH₂OH, sendo o álcool mais simples após o metanol.' },
  { id: 7, category: 'Nomenclatura', difficulty: 'facil',
    question: 'Qual é o nome do composto CH₃-CH₂-CH₃?',
    options: ['Propano', 'Etano', 'Metano', 'Butano'], correct: 0,
    explanation: 'CH₃-CH₂-CH₃ é o propano, um alcano com três átomos de carbono.' },
  { id: 8, category: 'Reações Orgânicas', difficulty: 'medio',
    question: 'O que caracteriza uma reação de substituição nucleofílica?',
    options: ['Um nucleófilo substitui um grupo de saída', 'Um eletrófilo ataca uma dupla ligação', 'Ocorre adição de hidrogênio', 'Ocorre eliminação de moléculas'], correct: 0,
    explanation: 'Em reações de substituição nucleofílica, um nucleófilo ataca e substitui um grupo de saída.' },
  { id: 9, category: 'Funções Orgânicas', difficulty: 'facil',
    question: 'Qual é a função orgânica do ácido acético?',
    options: ['Ácido carboxílico', 'Álcool', 'Aldeído', 'Cetona'], correct: 0,
    explanation: 'O ácido acético (CH₃COOH) é um ácido carboxílico.' },
  { id: 10, category: 'Isomeria', difficulty: 'facil',
    question: 'O que é isomeria?',
    options: ['Compostos com mesma fórmula molecular mas estruturas diferentes', 'Compostos com fórmulas diferentes', 'Reações de oxidação', 'Reações de redução'], correct: 0,
    explanation: 'Isomeria é o fenômeno onde compostos têm mesma fórmula molecular mas estruturas diferentes.' },
  { id: 11, category: 'Reações Orgânicas', difficulty: 'medio',
    question: 'Qual é o produto da oxidação branda de um álcool primário?',
    options: ['Aldeído', 'Cetona', 'Ácido carboxílico', 'Éter'], correct: 0,
    explanation: 'A oxidação branda de um álcool primário produz um aldeído.' },
  { id: 12, category: 'Aromaticidade', difficulty: 'facil',
    question: 'O que caracteriza um composto aromático?',
    options: ['Presença do anel benzênico', 'Apenas cadeias abertas', 'Apenas ligações simples', 'Apenas ligações duplas'], correct: 0,
    explanation: 'Compostos aromáticos possuem o anel benzênico ou sistemas aromáticos similares.' },
  { id: 13, category: 'Hidrocarbonetos', difficulty: 'facil',
    question: 'Qual é a fórmula geral dos alcanos?',
    options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙHₙ'], correct: 0,
    explanation: 'Os alcanos são hidrocarbonetos saturados de fórmula geral CₙH₂ₙ₊₂.' },
  { id: 14, category: 'Hidrocarbonetos', difficulty: 'medio',
    question: 'Qual é a fórmula geral dos alcinos?',
    options: ['CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₄'], correct: 0,
    explanation: 'Os alcinos possuem uma tripla ligação e fórmula geral CₙH₂ₙ₋₂.' },
  { id: 15, category: 'Nomenclatura', difficulty: 'medio',
    question: 'Qual é o nome IUPAC do composto CH₃-CH(CH₃)-CH₃?',
    options: ['2-metilpropano', 'Butano', 'Pentano', '2-metilbutano'], correct: 0,
    explanation: 'A cadeia principal tem 3 carbonos (propano) com uma ramificação metil no carbono 2.' },
  { id: 16, category: 'Funções Orgânicas', difficulty: 'facil',
    question: 'Qual grupo funcional caracteriza uma cetona?',
    options: ['Carbonila entre dois carbonos (R-CO-R)', 'Hidroxila (-OH)', 'Carboxila (-COOH)', 'Amina (-NH₂)'], correct: 0,
    explanation: 'Cetonas têm o grupo carbonila ligado a dois carbonos, diferente do aldeído (carbonila em carbono terminal).' },
  { id: 17, category: 'Funções Orgânicas', difficulty: 'medio',
    question: 'O que é um éster?',
    options: ['Produto da reação entre ácido carboxílico e álcool', 'Produto da reação entre dois álcoois', 'Produto da oxidação de uma cetona', 'Um tipo de amina'], correct: 0,
    explanation: 'Ésteres são formados pela reação de esterificação entre um ácido carboxílico e um álcool, liberando água.' },
  { id: 18, category: 'Isomeria', difficulty: 'medio',
    question: 'Isômeros que diferem apenas na posição de um grupo funcional na cadeia são chamados de:',
    options: ['Isômeros de posição', 'Isômeros de cadeia', 'Isômeros de função', 'Isômeros geométricos'], correct: 0,
    explanation: 'A isomeria de posição ocorre quando o grupo funcional muda de posição na mesma cadeia carbônica.' },
  { id: 19, category: 'Isomeria', difficulty: 'dificil',
    question: 'A isomeria cis-trans (geométrica) ocorre em compostos com:',
    options: ['Dupla ligação ou anel com restrição de rotação', 'Apenas ligações simples', 'Grupos funcionais diferentes', 'Cadeias ramificadas'], correct: 0,
    explanation: 'A rotação restrita em torno de uma dupla ligação (ou anel) permite a existência de isômeros cis e trans.' },
  { id: 20, category: 'Aromaticidade', difficulty: 'medio',
    question: 'Grupos como -NO₂ e -COOH no anel benzênico são geralmente:',
    options: ['Desativantes e meta-diretores', 'Ativantes e orto-para-diretores', 'Neutros', 'Desativantes e orto-para-diretores'], correct: 0,
    explanation: 'Grupos retiradores de elétrons por ressonância/indução, como -NO₂ e -COOH, desativam o anel e direcionam para a posição meta.' },
  { id: 21, category: 'Reações Orgânicas', difficulty: 'dificil',
    question: 'Em uma reação de eliminação (E1/E2), o que é formado a partir de um haleto de alquila?',
    options: ['Um alceno', 'Um álcool', 'Um alcano', 'Um éter'], correct: 0,
    explanation: 'Reações de eliminação removem um haleto e um hidrogênio adjacente, formando uma dupla ligação (alceno).' },
  { id: 22, category: 'Hidrocarbonetos', difficulty: 'medio',
    question: 'Qual é o nome do alcano de cadeia normal com 5 átomos de carbono?',
    options: ['Pentano', 'Butano', 'Hexano', 'Heptano'], correct: 0,
    explanation: 'O alcano com 5 carbonos em cadeia normal é o pentano (C₅H₁₂).' },
  { id: 23, category: 'Funções Orgânicas', difficulty: 'facil',
    question: 'Qual é o grupo funcional característico das aminas?',
    options: ['-NH₂', '-OH', '-COOH', '-CHO'], correct: 0,
    explanation: 'As aminas são caracterizadas pelo grupo amino (-NH₂), derivado da amônia.' },
  { id: 24, category: 'Nomenclatura', difficulty: 'dificil',
    question: 'Qual é o nome IUPAC do composto CH₂=CH-CH₃?',
    options: ['Propeno', 'Propano', 'Propino', 'Ciclopropano'], correct: 0,
    explanation: 'A presença de uma dupla ligação entre os carbonos 1 e 2 de uma cadeia de 3 carbonos gera o propeno.' },
  { id: 25, category: 'Reações Orgânicas', difficulty: 'medio',
    question: 'A reação de um alceno com H₂ na presença de catalisador metálico é chamada de:',
    options: ['Hidrogenação', 'Halogenação', 'Hidratação', 'Ozonólise'], correct: 0,
    explanation: 'A hidrogenação catalítica adiciona H₂ à dupla ligação, saturando o alceno em alcano.' },
  { id: 26, category: 'Isomeria', difficulty: 'medio',
    question: 'Enantiômeros são isômeros que:',
    options: ['São imagens especulares não sobreponíveis um do outro', 'Têm fórmulas moleculares diferentes', 'São idênticos em todas as propriedades físicas e químicas', 'Diferem apenas na posição de uma ramificação'], correct: 0,
    explanation: 'Enantiômeros são estereoisômeros que se relacionam como imagem e objeto especular, não sobreponíveis.' },
  { id: 27, category: 'Aromaticidade', difficulty: 'medio',
    question: 'Quantos elétrons π participam do sistema aromático do benzeno?',
    options: ['6', '3', '8', '4'], correct: 0,
    explanation: 'O benzeno possui 6 elétrons π deslocalizados no anel, obedecendo à regra de Hückel (4n+2, n=1).' },
  { id: 28, category: 'Funções Orgânicas', difficulty: 'medio',
    question: 'O que diferencia um aldeído de uma cetona estruturalmente?',
    options: ['O aldeído tem a carbonila em carbono terminal, ligado a pelo menos um H', 'O aldeído tem dois grupos alquila ligados à carbonila', 'A cetona tem cheiro mais forte', 'Não há diferença estrutural'], correct: 0,
    explanation: 'No aldeído, a carbonila está sempre na extremidade da cadeia, ligada a um hidrogênio; na cetona, está entre dois carbonos.' },
  { id: 29, category: 'Hidrocarbonetos', difficulty: 'dificil',
    question: 'Hidrocarbonetos com fórmula geral CₙH₂ₙ podem ser:',
    options: ['Alcenos ou cicloalcanos', 'Apenas alcanos', 'Apenas alcinos', 'Apenas compostos aromáticos'], correct: 0,
    explanation: 'A fórmula CₙH₂ₙ é compatível tanto com alcenos (uma insaturação) quanto com cicloalcanos (um anel).' },
  { id: 30, category: 'Reações Orgânicas', difficulty: 'dificil',
    question: 'Na reação de Markovnikov (adição de HX a um alceno assimétrico), o hidrogênio se liga:',
    options: ['Ao carbono da dupla ligação com mais hidrogênios', 'Ao carbono mais substituído', 'Sempre ao carbono terminal', 'Não há regra definida'], correct: 0,
    explanation: 'A regra de Markovnikov prevê que o H se adiciona ao carbono da dupla ligação já mais hidrogenado, formando o carbocátion mais estável no carbono oposto.' },
  { id: 31, category: 'Nomenclatura', difficulty: 'medio',
    question: 'Qual é o sufixo utilizado na nomenclatura IUPAC para ácidos carboxílicos?',
    options: ['-oico', '-ol', '-al', '-ona'], correct: 0,
    explanation: 'Ácidos carboxílicos recebem o sufixo "-oico", precedido da palavra "ácido" (ex.: ácido etanoico).' },
  { id: 32, category: 'Funções Orgânicas', difficulty: 'facil',
    question: 'Éteres possuem qual estrutura característica?',
    options: ['Um oxigênio ligado a dois grupos carbônicos (R-O-R\')', 'Uma hidroxila ligada a um carbono', 'Uma carbonila terminal', 'Um nitrogênio ligado a hidrogênios'], correct: 0,
    explanation: 'Éteres têm um átomo de oxigênio conectando duas cadeias carbônicas, sem hidrogênio ligado ao oxigênio.' }
]

export function shuffleArray(array) {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Embaralha as alternativas de uma pergunta, preservando qual é a correta. */
export function shuffleQuestionOptions(question) {
  const order = shuffleArray(question.options.map((_, index) => index))
  return {
    options: order.map(originalIndex => question.options[originalIndex]),
    correctIndex: order.indexOf(question.correct)
  }
}

/**
 * Sorteia uma pergunta evitando repetir as últimas `recentIds` sempre que possível.
 * Quando o pool de "não recentes" esvazia, volta a considerar todas as perguntas.
 */
export function pickRandomQuestion(recentIds = []) {
  const pool = QUESTIONS.filter(q => !recentIds.includes(q.id))
  const source = pool.length > 0 ? pool : QUESTIONS
  return source[Math.floor(Math.random() * source.length)]
}

export const RECENT_QUESTIONS_WINDOW = 10
