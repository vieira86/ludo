import { useState } from 'react'
import Login from './components/Login'
import GameBoard from './components/GameBoard'
import './index.css'

function App() {
  const [gameState, setGameState] = useState('login') // 'login', 'playing', 'finished'
  const [players, setPlayers] = useState([])

  const handleStartGame = (playerData) => {
    setPlayers(playerData)
    setGameState('playing')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Ludo Orgânico
              </h1>
              <p className="text-gray-600 mt-2">Aprenda Química Orgânica jogando!</p>
            </div>
            
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-xl font-semibold text-purple-600 animate-pulse">
                🧪 Transforme moléculas em conhecimento! ⚗️
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Onde a diversão encontra a ciência
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {gameState === 'login' && (
          <Login onStartGame={handleStartGame} />
        )}
        
        {gameState === 'playing' && (
          <GameBoard players={players} />
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ludo Orgânico</h3>
                    <p className="text-gray-400">
                        Plataforma gamificada para aprendizado de Química Orgânica, tornando o estudo divertido e interativo.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                        <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                        <li><a href="https://github.com/vieira86" target="_blank" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-semibold mb-4">Sobre o Autor</h4>
                    
                    <div className="flex items-center space-x-4">
                        {/* Foto */}
                        <img src="https://github.com/vieira86.png" 
                            alt="Rafael Vieira" 
                            className="w-16 h-16 rounded-full border-2 border-purple-500 shadow-lg" />

                        {/* Infos */}
                        <div>
                            <p className="font-semibold text-white">Prof. Rafael Vieira</p>
                            <p className="text-sm text-gray-400">Química Orgânica</p>
                            <p className="text-sm text-gray-400">rafael.vieira@ifro.edu.br</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/vieira86" target="_blank"
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.423 3.297-1.423.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.524-6.89 8.524-1.271 0-2.471-.267-3.564-.748l1.416-2.409c1.004.335 2.084.515 3.207.515 5.406 0 9.799-4.393 9.799-9.799 0-5.406-4.393-9.799-9.799-9.799z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                    © 2026 Ludo Orgânico - Código aberto e gratuito para educação química.
                </p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default App
