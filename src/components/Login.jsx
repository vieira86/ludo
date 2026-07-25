import { useState } from 'react'

const Login = ({ onStartGame }) => {
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!player1Name.trim()) {
      newErrors.player1 = 'Nome do Jogador 1 é obrigatório'
    }
    
    if (!player2Name.trim()) {
      newErrors.player2 = 'Nome do Jogador 2 é obrigatório'
    }
    
    if (player1Name.trim() === player2Name.trim()) {
      newErrors.duplicate = 'Os nomes dos jogadores devem ser diferentes'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const players = [
        {
          id: 1,
          name: player1Name.trim(),
          color: '#ef4444', // red
          position: 0,
          score: 0,
          finished: false
        },
        {
          id: 2,
          name: player2Name.trim(),
          color: '#3b82f6', // blue
          position: 0,
          score: 0,
          finished: false
        }
      ]
      
      onStartGame(players)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-morphism rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Iniciar Jogo
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jogador 1 (Vermelho)
            </label>
            <input
              type="text"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
              placeholder="Digite o nome do jogador 1"
              maxLength={20}
            />
            {errors.player1 && (
              <p className="mt-1 text-sm text-red-500">{errors.player1}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jogador 2 (Azul)
            </label>
            <input
              type="text"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Digite o nome do jogador 2"
              maxLength={20}
            />
            {errors.player2 && (
              <p className="mt-1 text-sm text-red-500">{errors.player2}</p>
            )}
          </div>

          {errors.duplicate && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errors.duplicate}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Começar Jogo
          </button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Como Jogar:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Lance o dado para mover suas peças</li>
            <li>• Responda perguntas de química para avançar</li>
            <li>• Erre a pergunta e perca a vez</li>
            <li>• Primeiro a completar o tabuleiro vence!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login
