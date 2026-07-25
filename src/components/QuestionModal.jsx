import { useState, useEffect } from 'react'

const organicChemistryQuestions = [
  {
    id: 1,
    question: "Qual é a fórmula estrutural do metano?",
    options: [
      "CH₄",
      "C₂H₆", 
      "C₃H₈",
      "C₄H₁₀"
    ],
    correct: 0,
    explanation: "O metano (CH₄) é o alcano mais simples, com um carbono e quatro hidrogênios."
  },
  {
    id: 2,
    question: "Na reação de nitração do benzeno, qual é o reagente utilizado?",
    options: [
      "HNO₃/H₂SO₄",
      "HCl/H₂SO₄",
      "H₂SO₄/HNO₃",
      "HNO₃/HCl"
    ],
    correct: 0,
    explanation: "A nitração do benzeno utiliza uma mistura de ácido nítrico (HNO₃) e ácido sulfúrico (H₂SO₄) como catalisador."
  },
  {
    id: 3,
    question: "Qual é a diretividade de um grupo -OH (hidroxila) em reações de substituição aromática?",
    options: [
      "Orto-para diretor",
      "Meta diretor",
      "Desativante",
      "Neutro"
    ],
    correct: 0,
    explanation: "O grupo -OH é um ativante forte e diretor orto-para devido aos seus pares de elétrons."
  },
  {
    id: 4,
    question: "Qual é o produto principal da halogenação do metano com cloro?",
    options: [
      "Clorometano",
      "Diclorometano",
      "Triclorometano",
      "Tetraclorometano"
    ],
    correct: 0,
    explanation: "Na halogenação do metano, o produto principal é o clorometano (CH₃Cl)."
  },
  {
    id: 5,
    question: "O que é uma reação de acilação de Friedel-Crafts?",
    options: [
      "Adição de um grupo acila a um anel aromático",
      "Remoção de um grupo acila",
      "Oxidação de um anel aromático",
      "Redução de um anel aromático"
    ],
    correct: 0,
    explanation: "A acilação de Friedel-Crafts adiciona um grupo acila (R-CO-) a um anel aromático."
  },
  {
    id: 6,
    question: "Qual é a fórmula do etanol?",
    options: [
      "CH₃CH₂OH",
      "CH₃CH₂CH₂OH",
      "CH₃COOH",
      "CH₃CHO"
    ],
    correct: 0,
    explanation: "O etanol tem fórmula CH₃CH₂OH, sendo o álcool mais simples após o metanol."
  },
  {
    id: 7,
    question: "Qual é o nome do composto CH₃-CH₂-CH₃?",
    options: [
      "Propano",
      "Etano",
      "Metano",
      "Butano"
    ],
    correct: 0,
    explanation: "CH₃-CH₂-CH₃ é o propano, um alcano com três átomos de carbono."
  },
  {
    id: 8,
    question: "O que caracteriza uma reação de substituição nucleofílica?",
    options: [
      "Um nucleófilo substitui um grupo de saída",
      "Um eletrófilo ataca uma dupla ligação",
      "Ocorre adição de hidrogênio",
      "Ocorre eliminação de moléculas"
    ],
    correct: 0,
    explanation: "Em reações de substituição nucleofílica, um nucleófilo ataca e substitui um grupo de saída."
  },
  {
    id: 9,
    question: "Qual é a função orgânica do ácido acético?",
    options: [
      "Ácido carboxílico",
      "Álcool",
      "Aldeído",
      "Cetona"
    ],
    correct: 0,
    explanation: "O ácido acético (CH₃COOH) é um ácido carboxílico."
  },
  {
    id: 10,
    question: "O que é isomeria?",
    options: [
      "Compostos com mesma fórmula molecular mas estruturas diferentes",
      "Compostos com fórmulas diferentes",
      "Reações de oxidação",
      "Reações de redução"
    ],
    correct: 0,
    explanation: "Isomeria é o fenômeno onde compostos têm mesma fórmula molecular mas estruturas diferentes."
  },
  {
    id: 11,
    question: "Qual é o produto da oxidação de um álcool primário?",
    options: [
      "Aldeído",
      "Cetona",
      "Ácido carboxílico",
      "Éster"
    ],
    correct: 0,
    explanation: "A oxidação de um álcool primário produz um aldeído."
  },
  {
    id: 12,
    question: "O que caracteriza um composto aromático?",
    options: [
      "Presença do anel benzênico",
      "Apenas cadeias abertas",
      "Apenas ligações simples",
      "Apenas ligações duplas"
    ],
    correct: 0,
    explanation: "Compostos aromáticos possuem o anel benzênico ou sistemas aromáticos similares."
  }
]

const QuestionModal = ({ onClose, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(null)

  useEffect(() => {
    // Selecionar uma pergunta aleatória
    const randomQuestion = organicChemistryQuestions[
      Math.floor(Math.random() * organicChemistryQuestions.length)
    ]
    setCurrentQuestion(randomQuestion)
  }, [])

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    const correct = selectedAnswer === currentQuestion.correct
    setIsCorrect(correct)
    setShowResult(true)
    
    setTimeout(() => {
      onAnswer(correct)
    }, 2000)
  }

  const getOptionColor = (index) => {
    if (!showResult) {
      return selectedAnswer === index 
        ? 'bg-purple-100 border-purple-500' 
        : 'bg-white border-gray-200 hover:bg-gray-50'
    }
    
    if (index === currentQuestion.correct) {
      return 'bg-green-100 border-green-500'
    }
    
    if (index === selectedAnswer && !isCorrect) {
      return 'bg-red-100 border-red-500'
    }
    
    return 'bg-gray-100 border-gray-300'
  }

  if (!currentQuestion) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Pergunta de Química Orgânica
            </h2>
            {!showResult && (
              <button
                onClick={() => {
                  onClose()
                  onAnswer(false)
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Question */}
          <div className="mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(index)}
                disabled={showResult}
                className={`
                  w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                  ${getOptionColor(index)}
                  ${!showResult && 'hover:shadow-md'}
                  ${showResult && 'cursor-not-allowed'}
                `}
              >
                <div className="flex items-center space-x-3">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${getOptionColor(index).includes('purple') ? 'border-purple-500' : 
                      getOptionColor(index).includes('green') ? 'border-green-500' :
                      getOptionColor(index).includes('red') ? 'border-red-500' : 'border-gray-300'}
                  `}>
                    {selectedAnswer === index && (
                      <div className="w-3 h-3 rounded-full bg-current" />
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Result */}
          {showResult && (
            <div className={`
              p-4 rounded-lg mb-4
              ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}
            `}>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✓ Correto!' : '✗ Incorreto!'}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {/* Action Button */}
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`
                w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200
                ${selectedAnswer !== null 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              Responder
            </button>
          ) : (
            <div className="text-center text-sm text-gray-500">
              {isCorrect ? 'Você pode avançar!' : 'Você perdeu esta vez...'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionModal
