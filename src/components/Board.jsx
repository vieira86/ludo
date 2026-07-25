import { useMemo } from 'react'

const Board = ({ players, currentPlayer }) => {
  // Layout com casas especiais: seguras e perigosas
  const boardLayout = useMemo(() => {
    const cells = []
    
    // Criar caminho com casas especiais (10x6)
    const specialPath = [
      // INÍCIO
      { id: 'start', position: { row: 0, col: 0 }, type: 'start', number: 'INÍCIO' },
      
      // Caminho em S com casas especiais
      // Linha 1: direita
      { id: 1, position: { row: 0, col: 1 }, type: 'normal', number: 1 },
      { id: 2, position: { row: 0, col: 2 }, type: 'normal', number: 2 },
      { id: 3, position: { row: 0, col: 3 }, type: 'normal', number: 3 },
      { id: 4, position: { row: 0, col: 4 }, type: 'danger', number: 4 }, // Casa perigosa (ácido)
      { id: 5, position: { row: 0, col: 5 }, type: 'normal', number: 5 },
      { id: 6, position: { row: 0, col: 6 }, type: 'normal', number: 6 },
      { id: 7, position: { row: 0, col: 7 }, type: 'normal', number: 7 },
      { id: 8, position: { row: 0, col: 8 }, type: 'normal', number: 8 },
      { id: 9, position: { row: 0, col: 9 }, type: 'safe', number: 9 }, // Casa segura
      
      // Descida
      { id: 10, position: { row: 1, col: 9 }, type: 'normal', number: 10 },
      { id: 11, position: { row: 2, col: 9 }, type: 'normal', number: 11 },
      { id: 12, position: { row: 3, col: 9 }, type: 'danger', number: 12 }, // Casa perigosa
      { id: 13, position: { row: 4, col: 9 }, type: 'normal', number: 13 },
      { id: 14, position: { row: 5, col: 9 }, type: 'normal', number: 14 },
      
      // Linha 2: esquerda
      { id: 15, position: { row: 5, col: 8 }, type: 'normal', number: 15 },
      { id: 16, position: { row: 5, col: 7 }, type: 'normal', number: 16 },
      { id: 17, position: { row: 5, col: 6 }, type: 'normal', number: 17 },
      { id: 18, position: { row: 5, col: 5 }, type: 'safe', number: 18 }, // Casa segura
      { id: 19, position: { row: 5, col: 4 }, type: 'normal', number: 19 },
      { id: 20, position: { row: 5, col: 3 }, type: 'danger', number: 20 }, // Casa perigosa
      { id: 21, position: { row: 5, col: 2 }, type: 'normal', number: 21 },
      { id: 22, position: { row: 5, col: 1 }, type: 'normal', number: 22 },
      { id: 23, position: { row: 5, col: 0 }, type: 'normal', number: 23 },
      
      // Subida
      { id: 24, position: { row: 4, col: 0 }, type: 'normal', number: 24 },
      { id: 25, position: { row: 3, col: 0 }, type: 'normal', number: 25 },
      { id: 26, position: { row: 2, col: 0 }, type: 'normal', number: 26 },
      { id: 27, position: { row: 1, col: 0 }, type: 'normal', number: 27 },
      
      // Linha 3: direita (meio)
      { id: 28, position: { row: 1, col: 1 }, type: 'normal', number: 28 },
      { id: 29, position: { row: 1, col: 2 }, type: 'normal', number: 29 },
      { id: 30, position: { row: 1, col: 3 }, type: 'danger', number: 30 }, // Casa perigosa
      { id: 31, position: { row: 1, col: 4 }, type: 'normal', number: 31 },
      { id: 32, position: { row: 1, col: 5 }, type: 'normal', number: 32 },
      { id: 33, position: { row: 1, col: 6 }, type: 'normal', number: 33 },
      { id: 34, position: { row: 1, col: 7 }, type: 'safe', number: 34 }, // Casa segura
      { id: 35, position: { row: 1, col: 8 }, type: 'normal', number: 35 },
      
      // Descida parcial
      { id: 36, position: { row: 2, col: 8 }, type: 'normal', number: 36 },
      { id: 37, position: { row: 3, col: 8 }, type: 'normal', number: 37 },
      { id: 38, position: { row: 4, col: 8 }, type: 'danger', number: 38 }, // Casa perigosa
      
      // Linha 4: esquerda (meio)
      { id: 39, position: { row: 4, col: 7 }, type: 'normal', number: 39 },
      { id: 40, position: { row: 4, col: 6 }, type: 'normal', number: 40 },
      { id: 41, position: { row: 4, col: 5 }, type: 'normal', number: 41 },
      { id: 42, position: { row: 4, col: 4 }, type: 'safe', number: 42 }, // Casa segura
      { id: 43, position: { row: 4, col: 3 }, type: 'normal', number: 43 },
      { id: 44, position: { row: 4, col: 2 }, type: 'normal', number: 44 },
      { id: 45, position: { row: 4, col: 1 }, type: 'danger', number: 45 }, // Casa perigosa
      
      // Subida parcial
      { id: 46, position: { row: 3, col: 1 }, type: 'normal', number: 46 },
      { id: 47, position: { row: 2, col: 1 }, type: 'normal', number: 47 },
      
      // Final
      { id: 48, position: { row: 2, col: 2 }, type: 'normal', number: 48 },
      { id: 49, position: { row: 2, col: 3 }, type: 'normal', number: 49 },
      { id: 50, position: { row: 2, col: 4 }, type: 'danger', number: 50 }, // Casa perigosa final
      
      // FIM
      { id: 'end', position: { row: 2, col: 5 }, type: 'end', number: 'FIM' }
    ]
    
    return specialPath
  }, [])

  // Posição inicial para cada jogador - ambos começam na mesma casa
  const getStartPosition = (playerId) => {
    // Para simplificar, ambos começam na casa 0
    return 0
  }

  const getPlayersInCell = (cellId) => {
    const playersInCell = players.filter(player => {
      // Para casas especiais (INÍCIO/FIM), verificar posição específica
      if (cellId === 'start') {
        return player.position === 0
      }
      if (cellId === 'end') {
        return player.position >= 50
      }
      // Para casas numeradas normais - a posição do jogador deve corresponder ao número da casa
      return player.position === cellId
    })
    
    // Debug para verificar quais jogadores estão em quais casas
    if (playersInCell.length > 0 || cellId <= 10) {
      console.log(`Casa ${cellId}: ${playersInCell.map(p => `${p.name} (posição: ${p.position})`).join(', ') || 'vazia'}`)
    }
    
    return playersInCell
  }

  const getCellColor = (cell) => {
    if (cell.type === 'start') return 'bg-gradient-to-br from-green-200 to-green-300 border-green-500 shadow-lg'
    if (cell.type === 'end') return 'bg-gradient-to-br from-red-200 to-orange-300 border-red-500 shadow-lg'
    if (cell.type === 'safe') return 'bg-gradient-to-br from-blue-200 to-blue-300 border-blue-500 shadow-lg'
    if (cell.type === 'danger') return 'bg-gradient-to-br from-red-300 to-pink-400 border-red-600 shadow-lg'
    return 'bg-amber-100 border-amber-300'
  }

  // Debug geral para mostrar posições atuais
  console.log('=== POSIÇÕES ATUAIS DOS JOGADORES ===')
  players.forEach(player => {
    console.log(`${player.name}: posição ${player.position}`)
  })
  console.log('=====================================')

  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-inner">
      <div className="grid gap-2" style={{ 
        gridTemplateColumns: 'repeat(10, minmax(28px, 1fr))',
        aspectRatio: '10/6'
      }}>
        {Array.from({ length: 6 }, (_, row) => (
          Array.from({ length: 10 }, (_, col) => {
            const cell = boardLayout.find(c => c.position.row === row && c.position.col === col)
            
            if (!cell) {
              // Remove todas as áreas roxas/centrais - só deixa vazio
              return <div key={`${row}-${col}`} className="aspect-square" />
            }
            
            const playersInCell = getPlayersInCell(cell.id)
            
            return (
              <div
                key={cell.id}
                className={`
                  rounded-lg border-2 flex items-center justify-center relative p-1
                  ${getCellColor(cell)}
                  ${cell.type === 'safe' ? 'shadow-lg' : 'shadow-sm'}
                  transition-all duration-200 hover:scale-105
                `}
                style={{ aspectRatio: '1/1' }}
              >
                {/* Número da casa */}
                <span className={`
                  font-bold
                  ${cell.type === 'start' || cell.type === 'end' ? 'text-sm' : 'text-sm'}
                  ${cell.type === 'safe' ? 'text-blue-700' : ''}
                  ${cell.type === 'danger' ? 'text-red-700' : ''}
                  ${cell.type === 'normal' ? 'text-gray-700' : ''}
                `}>
                  {cell.number}
                </span>
                
                {/* Peças dos jogadores - menores com espaço entre elas */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {playersInCell.map((player, index) => (
                    <div
                      key={player.id}
                      className={`
                        absolute rounded-full border-2 border-white shadow-lg
                        transition-all duration-500 transform hover:scale-110 pointer-events-auto
                        ${currentPlayer === players.indexOf(player) ? 'animate-bounce-gentle z-10' : ''}
                      `}
                      style={{
                        backgroundColor: player.color,
                        width: '65%',
                        height: '65%',
                        // Centraliza com mais espaço ao redor
                        position: 'absolute',
                        top: '17.5%',
                        left: '17.5%',
                        // Maior espaço entre peças
                        transform: `translate(${(index % 2) * 15 - 7.5}px, ${Math.floor(index / 2) * 15 - 7.5}px)`
                      }}
                      title={player.name}
                    >
                      <span className="text-sm text-white font-bold flex items-center justify-center h-full">
                        {player.id}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Indicadores especiais */}
                {cell.type === 'safe' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                )}
                {cell.type === 'danger' && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                )}
              </div>
            )
          })
        )).flat()}
      </div>
      
      {/* Legendas */}
      <div className="flex justify-center mt-4 space-x-4 text-sm flex-wrap">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-500 rounded" />
          <span className="text-gray-600">Casa Segura (+20 pts)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-br from-red-300 to-pink-400 border-2 border-red-600 rounded" />
          <span className="text-gray-600">Casa Ácida (-5 casas)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-amber-100 border-2 border-amber-300 rounded" />
          <span className="text-gray-600">Casa Normal</span>
        </div>
      </div>
    </div>
  )
}

export default Board
