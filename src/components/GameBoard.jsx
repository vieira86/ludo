import { useState, useEffect } from 'react'
import Board from './Board'
import Dice from './Dice'
import QuestionModal from './QuestionModal'
import AcidAlertModal from './AcidAlertModal'
import ScoreBoard from './ScoreBoard'
import GameHistory from './GameHistory'

const GameBoard = ({ players: initialPlayers }) => {
  const [players, setPlayers] = useState(initialPlayers)
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [diceValue, setDiceValue] = useState(null)
  const [isRolling, setIsRolling] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [showAcidAlert, setShowAcidAlert] = useState(false)
  const [pendingAcidMove, setPendingAcidMove] = useState(null)
  const [acidType, setAcidType] = useState('cloridrico')
  const [pendingMove, setPendingMove] = useState(null)
  const [gameHistory, setGameHistory] = useState([])
  const [canRoll, setCanRoll] = useState(true)

  const boardSize = 50 // Número de casas no tabuleiro

  const handleDiceRoll = async () => {
    if (!canRoll || isRolling) return
    
    setIsRolling(true)
    setCanRoll(false)
    
    // Simular animação do dado
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const value = Math.floor(Math.random() * 6) + 1
    setDiceValue(value)
    
    // Adicionar ao histórico
    const historyEntry = {
      player: players[currentPlayer].name,
      action: `lançou o dado e tirou ${value}`,
      timestamp: new Date().toLocaleTimeString()
    }
    setGameHistory(prev => [...prev, historyEntry])
    
    setIsRolling(false)
    
    // Esperar 2 segundos para mostrar o resultado do dado antes da pergunta
    setTimeout(() => {
      setShowQuestion(true)
    }, 2000)
  }

  const handleQuestionAnswer = (correct) => {
    if (correct && pendingMove !== null) {
      // Move o jogador
      const oldPosition = players[currentPlayer].position
      let newPosition = oldPosition + diceValue
      
      console.log(`=== MOVIMENTO ===`)
      console.log(`Jogador: ${players[currentPlayer].name}`)
      console.log(`Posição antiga: ${oldPosition}`)
      console.log(`Valor do dado: ${diceValue}`)
      console.log(`Nova posição calculada: ${oldPosition} + ${diceValue} = ${newPosition}`)
      
      let points = diceValue * 10
      let actionText = `respondeu corretamente e moveu ${diceValue} casas (da ${oldPosition} para a ${newPosition})`
      
      // Verifica se a nova posição é uma casa especial
      const boardLayout = [
          { id: 4, type: 'danger' },
          { id: 9, type: 'safe' },
          { id: 12, type: 'danger' },
          { id: 18, type: 'safe' },
          { id: 20, type: 'danger' },
          { id: 30, type: 'danger' },
          { id: 34, type: 'safe' },
          { id: 38, type: 'danger' },
          { id: 42, type: 'safe' },
          { id: 45, type: 'danger' },
          { id: 50, type: 'danger' }
        ]
        
        const landedCell = boardLayout.find(cell => cell.id === newPosition)
        
        if (landedCell) {
          if (landedCell.type === 'safe') {
            points += 20
            actionText += ` + ganhou 20 pontos extras na casa segura!`
          } else if (landedCell.type === 'danger') {
            // Mostra alerta de ácido antes de voltar
            const acids = ['cloridrico', 'sulfurico', 'nitrico', 'acetico']
            const randomAcid = acids[Math.floor(Math.random() * acids.length)]
            setAcidType(randomAcid)
            setPendingAcidMove(oldPosition)
            setShowAcidAlert(true)
            
            // Não atualiza a posição ainda - espera o alerta
            return prevPlayers
          }
        }
        
        newPosition = Math.min(newPosition, boardSize)
        
        // Atualiza o estado do jogador
        setPlayers(prevPlayers => {
          const newPlayers = [...prevPlayers]
          newPlayers[currentPlayer].position = newPosition
          newPlayers[currentPlayer].score += points
          
          console.log(`Posição final após atualização: ${newPlayers[currentPlayer].position}`)
          
          return newPlayers
        })
        
        // Adiciona ao histórico
        const historyEntry = {
          player: players[currentPlayer].name,
          action: actionText,
          timestamp: new Date().toLocaleTimeString()
        }
        setGameHistory(prev => [...prev, historyEntry])
        
        // Verifica se o jogador venceu
        if (newPosition >= boardSize) {
          setPlayers(prevPlayers => {
            const newPlayers = [...prevPlayers]
            newPlayers[currentPlayer].finished = true
            return newPlayers
          })
          
          const winEntry = {
            player: players[currentPlayer].name,
            action: `venceu o jogo! 🎉`,
            timestamp: new Date().toLocaleTimeString()
          }
          setGameHistory(prev => [...prev, winEntry])
        } else {
          // Passa para o próximo jogador após 1 segundo
          setTimeout(() => {
            nextTurn()
          }, 1000)
        }
    } else {
      // Errou a pergunta - perde a vez
      const historyEntry = {
        player: players[currentPlayer].name,
        action: `errou a pergunta e perdeu a vez`,
        timestamp: new Date().toLocaleTimeString()
      }
      setGameHistory(prev => [...prev, historyEntry])
      
      // Passa para o próximo jogador imediatamente
      nextTurn()
    }
    
    setShowQuestion(false)
    setPendingMove(null)
    setDiceValue(null)
  }

  const handleAcidAlert = () => {
    console.log('=== TRATANDO ALERTA DE ÁCIDO ===')
    console.log(`Jogador atual: ${players[currentPlayer].name}`)
    console.log(`Posição antes do ácido: ${pendingAcidMove}`)
    
    // Aplica o movimento de volta
    setPlayers(prevPlayers => {
      const newPlayers = [...prevPlayers]
      const currentPlayerData = newPlayers[currentPlayer]
      
      const newPosition = Math.max(0, pendingAcidMove - 5)
      currentPlayerData.position = newPosition
      
      console.log(`Nova posição após voltar 5 casas: ${newPosition}`)
      
      const historyEntry = {
        player: currentPlayerData.name,
        action: `caiu numa casa ácida (${acidType}) e voltou 5 casas para a ${newPosition}`,
        timestamp: new Date().toLocaleTimeString()
      }
      setGameHistory(prev => [...prev, historyEntry])
      
      return newPlayers
    })
    
    setShowAcidAlert(false)
    setShowQuestion(false) // Garante que não vai mostrar pergunta
    setPendingAcidMove(null)
    setDiceValue(null)
    setCanRoll(false) // Garante que o próximo jogador possa rolar
    
    console.log('=== PRÓXIMO JOGADOR APÓS ÁCIDO ===')
    
    // Passa para o próximo jogador após 1 segundo
    setTimeout(() => {
      nextTurn()
    }, 1000)
  }

  const nextTurn = () => {
    console.log(`=== TROCA DE TURNO ===`)
    console.log(`Jogador atual: ${players[currentPlayer].name} (índice: ${currentPlayer})`)
    
    setCurrentPlayer(prevCurrentPlayer => {
      // Simplesmente alterna entre 0 e 1 (2 jogadores)
      const nextPlayer = (prevCurrentPlayer + 1) % players.length
      console.log(`Próximo jogador: ${players[nextPlayer].name} (índice: ${nextPlayer})`)
      return nextPlayer
    })
    
    // Garante que o próximo jogador possa rolar o dado
    setCanRoll(true)
    console.log(`Próximo jogador pode rolar o dado`)
    console.log(`=== FIM DA TROCA DE TURNO ===`)
  }

  const checkGameEnd = () => {
    return players && players.some(player => player.finished)
  }

  const resetGame = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (showQuestion && diceValue !== null) {
      setPendingMove(diceValue)
    }
  }, [showQuestion, diceValue])

  if (checkGameEnd()) {
    const winner = players.find(player => player.finished)
    return (
      <div className="text-center">
        <div className="glass-morphism rounded-2xl p-8 max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🎉 Jogo Terminado! 🎉
          </h2>
          <p className="text-2xl mb-6">
            <span style={{ color: winner.color }}>{winner.name}</span> venceu!
          </p>
          <div className="space-y-2 mb-6">
            {players.map(player => (
              <div key={player.id} className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                <span style={{ color: player.color }}>{player.name}</span>
                <span className="font-semibold">{player.score} pontos</span>
              </div>
            ))}
          </div>
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200"
          >
            Novo Jogo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Tabuleiro Principal */}
      <div className="lg:col-span-3">
        <div className="glass-morphism rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Tabuleiro</h2>
            <div className="flex items-center space-x-4">
              <div className="text-lg font-semibold">
                Vez de: <span style={{ color: players[currentPlayer].color }}>
                  {players[currentPlayer].name}
                </span>
              </div>
            </div>
          </div>
          
          <Board 
            players={players} 
            currentPlayer={currentPlayer}
          />
          
          <div className="flex justify-center mt-6">
            <Dice
              value={diceValue}
              isRolling={isRolling}
              onRoll={handleDiceRoll}
              canRoll={canRoll}
              showQuestion={showQuestion}
            />
          </div>
        </div>
      </div>

      {/* Painel Lateral */}
      <div className="space-y-6">
        {/* Placar */}
        <ScoreBoard players={players} />
        
        {/* Histórico */}
        <GameHistory history={gameHistory} />
      </div>

      {/* Modal de Perguntas */}
      {showQuestion && (
        <QuestionModal
          onClose={() => {
            setShowQuestion(false)
            handleQuestionAnswer(false)
          }}
          onAnswer={handleQuestionAnswer}
        />
      )}

      {/* Modal de Alerta de Ácido */}
      {showAcidAlert && (
        <AcidAlertModal
          isOpen={showAcidAlert}
          onClose={() => {
            setShowAcidAlert(false)
            handleAcidAlert()
          }}
          onConfirm={handleAcidAlert}
          acidType={acidType}
          housesBack={5}
        />
      )}
    </div>
  )
}

export default GameBoard
