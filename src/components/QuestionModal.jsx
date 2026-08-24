import { useEffect, useMemo, useState } from 'react'
import { shuffleQuestionOptions } from '../data/questions'
import { playCorrect, playIncorrect } from '../utils/sound'

const TIME_LIMIT = 20

const DIFFICULTY_LABELS = {
  facil: { label: 'Fácil', className: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' },
  medio: { label: 'Médio', className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300' },
  dificil: { label: 'Difícil', className: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' }
}

const QuestionModal = ({ question, onClose, onAnswer }) => {
  const { options, correctIndex } = useMemo(() => shuffleQuestionOptions(question), [question])

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)

  const finish = (answerIndex) => {
    const correct = answerIndex === correctIndex
    setSelectedAnswer(answerIndex)
    setIsCorrect(correct)
    setShowResult(true)
    if (correct) playCorrect(); else playIncorrect()

    setTimeout(() => {
      onAnswer(correct)
    }, 2000)
  }

  useEffect(() => {
    if (showResult) return undefined
    if (timeLeft <= 0) {
      finish(null)
      return undefined
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, showResult])

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    finish(selectedAnswer)
  }

  const getOptionColor = (index) => {
    if (!showResult) {
      return selectedAnswer === index
        ? 'bg-purple-100 border-purple-500 dark:bg-purple-900/40 dark:border-purple-500'
        : 'bg-white border-gray-200 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700'
    }

    if (index === correctIndex) {
      return 'bg-green-100 border-green-500 dark:bg-green-900/40 dark:border-green-500'
    }

    if (index === selectedAnswer && !isCorrect) {
      return 'bg-red-100 border-red-500 dark:bg-red-900/40 dark:border-red-500'
    }

    return 'bg-gray-100 border-gray-300 dark:bg-slate-800 dark:border-slate-600'
  }

  const difficulty = DIFFICULTY_LABELS[question.difficulty] ?? DIFFICULTY_LABELS.medio
  const timerLow = timeLeft <= 5

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Pergunta de Química Orgânica
              </h2>
              <div className="flex gap-2 mt-2">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                  {question.category}
                </span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficulty.className}`}>
                  {difficulty.label}
                </span>
              </div>
            </div>
            {!showResult && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Fechar pergunta (conta como erro)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {!showResult && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>Tempo para responder</span>
                <span className={timerLow ? 'text-red-500 font-bold' : ''}>{timeLeft}s</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${timerLow ? 'bg-red-500' : 'bg-purple-500'}`}
                  style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              {question.question}
            </p>
            {question.image && (
              <div className="mt-4 flex justify-center">
                <img
                  src={question.image}
                  alt={question.imageAlt || 'Imagem da pergunta'}
                  className="max-h-64 w-auto rounded-lg border border-gray-200 dark:border-slate-700 bg-white p-2"
                />
              </div>
            )}
          </div>

          <div className="space-y-3 mb-6">
            {options.map((option, index) => (
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
                  <span className="text-gray-700 dark:text-gray-200">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className={`
              p-4 rounded-lg mb-4
              ${isCorrect ? 'bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800' : 'bg-red-50 border border-red-200 dark:bg-red-900/30 dark:border-red-800'}
            `}>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-lg font-bold ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {selectedAnswer === null ? '⏱ Tempo esgotado!' : isCorrect ? '✓ Correto!' : '✗ Incorreto!'}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {question.explanation}
              </p>
            </div>
          )}

          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`
                w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200
                ${selectedAnswer !== null
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Responder
            </button>
          ) : (
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              {isCorrect ? 'Você pode avançar!' : 'Você perdeu esta vez...'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionModal
