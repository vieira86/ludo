// Fonte única do layout do tabuleiro (usada pelo Board visual e pela lógica do jogo)
export const BOARD_SIZE = 50

export const BOARD_PATH = [
  { id: 'start', position: { row: 0, col: 0 }, type: 'start', number: 'INÍCIO' },

  { id: 1, position: { row: 0, col: 1 }, type: 'normal', number: 1 },
  { id: 2, position: { row: 0, col: 2 }, type: 'normal', number: 2 },
  { id: 3, position: { row: 0, col: 3 }, type: 'normal', number: 3 },
  { id: 4, position: { row: 0, col: 4 }, type: 'danger', number: 4 },
  { id: 5, position: { row: 0, col: 5 }, type: 'normal', number: 5 },
  { id: 6, position: { row: 0, col: 6 }, type: 'normal', number: 6 },
  { id: 7, position: { row: 0, col: 7 }, type: 'normal', number: 7 },
  { id: 8, position: { row: 0, col: 8 }, type: 'normal', number: 8 },
  { id: 9, position: { row: 0, col: 9 }, type: 'safe', number: 9 },

  { id: 10, position: { row: 1, col: 9 }, type: 'normal', number: 10 },
  { id: 11, position: { row: 2, col: 9 }, type: 'normal', number: 11 },
  { id: 12, position: { row: 3, col: 9 }, type: 'danger', number: 12 },
  { id: 13, position: { row: 4, col: 9 }, type: 'normal', number: 13 },
  { id: 14, position: { row: 5, col: 9 }, type: 'normal', number: 14 },

  { id: 15, position: { row: 5, col: 8 }, type: 'normal', number: 15 },
  { id: 16, position: { row: 5, col: 7 }, type: 'normal', number: 16 },
  { id: 17, position: { row: 5, col: 6 }, type: 'normal', number: 17 },
  { id: 18, position: { row: 5, col: 5 }, type: 'safe', number: 18 },
  { id: 19, position: { row: 5, col: 4 }, type: 'normal', number: 19 },
  { id: 20, position: { row: 5, col: 3 }, type: 'danger', number: 20 },
  { id: 21, position: { row: 5, col: 2 }, type: 'normal', number: 21 },
  { id: 22, position: { row: 5, col: 1 }, type: 'normal', number: 22 },
  { id: 23, position: { row: 5, col: 0 }, type: 'normal', number: 23 },

  { id: 24, position: { row: 4, col: 0 }, type: 'normal', number: 24 },
  { id: 25, position: { row: 3, col: 0 }, type: 'normal', number: 25 },
  { id: 26, position: { row: 2, col: 0 }, type: 'normal', number: 26 },
  { id: 27, position: { row: 1, col: 0 }, type: 'normal', number: 27 },

  { id: 28, position: { row: 1, col: 1 }, type: 'normal', number: 28 },
  { id: 29, position: { row: 1, col: 2 }, type: 'normal', number: 29 },
  { id: 30, position: { row: 1, col: 3 }, type: 'danger', number: 30 },
  { id: 31, position: { row: 1, col: 4 }, type: 'normal', number: 31 },
  { id: 32, position: { row: 1, col: 5 }, type: 'normal', number: 32 },
  { id: 33, position: { row: 1, col: 6 }, type: 'normal', number: 33 },
  { id: 34, position: { row: 1, col: 7 }, type: 'safe', number: 34 },
  { id: 35, position: { row: 1, col: 8 }, type: 'normal', number: 35 },

  { id: 36, position: { row: 2, col: 8 }, type: 'normal', number: 36 },
  { id: 37, position: { row: 3, col: 8 }, type: 'normal', number: 37 },
  { id: 38, position: { row: 4, col: 8 }, type: 'danger', number: 38 },

  { id: 39, position: { row: 4, col: 7 }, type: 'normal', number: 39 },
  { id: 40, position: { row: 4, col: 6 }, type: 'normal', number: 40 },
  { id: 41, position: { row: 4, col: 5 }, type: 'normal', number: 41 },
  { id: 42, position: { row: 4, col: 4 }, type: 'safe', number: 42 },
  { id: 43, position: { row: 4, col: 3 }, type: 'normal', number: 43 },
  { id: 44, position: { row: 4, col: 2 }, type: 'normal', number: 44 },
  { id: 45, position: { row: 4, col: 1 }, type: 'danger', number: 45 },

  { id: 46, position: { row: 3, col: 1 }, type: 'normal', number: 46 },
  { id: 47, position: { row: 2, col: 1 }, type: 'normal', number: 47 },

  { id: 48, position: { row: 2, col: 2 }, type: 'normal', number: 48 },
  { id: 49, position: { row: 2, col: 3 }, type: 'normal', number: 49 },
  { id: 50, position: { row: 2, col: 4 }, type: 'danger', number: 50 },

  { id: 'end', position: { row: 2, col: 5 }, type: 'end', number: 'FIM' }
]

export function getCellType(cellId) {
  const cell = BOARD_PATH.find(c => c.id === cellId)
  return cell ? cell.type : 'normal'
}
