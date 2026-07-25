import { BOARD_PATH, BOARD_SIZE } from '../data/boardPath'

const Board = ({ players, currentPlayer }) => {
  const getPlayersInCell = (cellId) => {
    return players.filter(player => {
      if (cellId === 'start') return player.position === 0
      if (cellId === 'end') return player.position >= BOARD_SIZE
      return player.position === cellId
    })
  }

  const getCellColor = (cell) => {
    if (cell.type === 'start') return 'bg-gradient-to-br from-green-200 to-green-300 border-green-500 shadow-lg dark:from-green-800 dark:to-green-900 dark:border-green-600'
    if (cell.type === 'end') return 'bg-gradient-to-br from-red-200 to-orange-300 border-red-500 shadow-lg dark:from-red-900 dark:to-orange-950 dark:border-red-700'
    if (cell.type === 'safe') return 'bg-gradient-to-br from-blue-200 to-blue-300 border-blue-500 shadow-lg dark:from-blue-800 dark:to-blue-900 dark:border-blue-600'
    if (cell.type === 'danger') return 'bg-gradient-to-br from-red-300 to-pink-400 border-red-600 shadow-lg dark:from-red-900 dark:to-pink-950 dark:border-red-700'
    return 'bg-amber-100 border-amber-300 dark:bg-slate-800 dark:border-slate-600'
  }

  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-950 rounded-xl p-3 sm:p-6 shadow-inner overflow-x-auto">
      <div
        className="grid gap-1.5 sm:gap-2 min-w-[560px]"
        style={{
          gridTemplateColumns: 'repeat(10, minmax(36px, 1fr))',
          aspectRatio: '10/6'
        }}
      >
        {Array.from({ length: 6 }, (_, row) => (
          Array.from({ length: 10 }, (_, col) => {
            const cell = BOARD_PATH.find(c => c.position.row === row && c.position.col === col)

            if (!cell) {
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
                <span className={`
                  font-bold text-sm
                  ${cell.type === 'safe' ? 'text-blue-700 dark:text-blue-200' : ''}
                  ${cell.type === 'danger' ? 'text-red-700 dark:text-red-200' : ''}
                  ${cell.type === 'normal' ? 'text-gray-700 dark:text-gray-300' : ''}
                  ${cell.type === 'start' || cell.type === 'end' ? 'text-gray-700 dark:text-gray-200' : ''}
                `}>
                  {cell.number}
                </span>

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
                        width: '60%',
                        height: '60%',
                        top: '20%',
                        left: '20%',
                        transform: `translate(${(index % 2) * 14 - 7}px, ${Math.floor(index / 2) * 14 - 7}px)`
                      }}
                      title={player.name}
                    >
                      <span className="text-xs text-white font-bold flex items-center justify-center h-full">
                        {player.id}
                      </span>
                    </div>
                  ))}
                </div>

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

      <div className="flex justify-center mt-4 space-x-4 text-sm flex-wrap">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-500 rounded" />
          <span className="text-gray-600 dark:text-gray-400">Casa Segura (+20 pts)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-br from-red-300 to-pink-400 border-2 border-red-600 rounded" />
          <span className="text-gray-600 dark:text-gray-400">Casa Ácida (-5 casas)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-amber-100 border-2 border-amber-300 rounded" />
          <span className="text-gray-600 dark:text-gray-400">Casa Normal</span>
        </div>
      </div>
    </div>
  )
}

export default Board
