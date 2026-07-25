import { BOARD_SIZE, getCellType } from '../data/boardPath'

export const ACID_TYPES = ['cloridrico', 'sulfurico', 'nitrico', 'acetico']
export const ACID_PENALTY = 5
export const POINTS_PER_HOUSE = 10
export const SAFE_CELL_BONUS = 20

/**
 * Calcula o resultado de mover um jogador `diceValue` casas a partir de `position`.
 * Retorna um resultado 'danger' quando a casa de destino tem ácido: a posição
 * só é confirmada depois que o alerta de ácido é resolvido (ver applyAcidPenalty).
 */
export function resolveMove(position, diceValue) {
  const rawPosition = position + diceValue
  const cellType = getCellType(rawPosition)

  if (cellType === 'danger') {
    return { kind: 'danger', fromPosition: position }
  }

  const newPosition = Math.min(rawPosition, BOARD_SIZE)
  const bonus = cellType === 'safe'
  const points = diceValue * POINTS_PER_HOUSE + (bonus ? SAFE_CELL_BONUS : 0)
  const won = newPosition >= BOARD_SIZE

  return { kind: 'move', position: newPosition, points, bonus, won }
}

export function applyAcidPenalty(position, housesBack = ACID_PENALTY) {
  return Math.max(0, position - housesBack)
}

export function pickRandomAcid() {
  return ACID_TYPES[Math.floor(Math.random() * ACID_TYPES.length)]
}

export function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

export function updatePlayer(players, index, { position, scoreDelta = 0, finished }) {
  return players.map((player, i) => {
    if (i !== index) return player
    return {
      ...player,
      position,
      score: player.score + scoreDelta,
      ...(finished !== undefined ? { finished } : {})
    }
  })
}
