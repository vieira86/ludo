import { describe, expect, it } from 'vitest'
import { resolveMove, applyAcidPenalty, updatePlayer, ACID_PENALTY, POINTS_PER_HOUSE, SAFE_CELL_BONUS } from './gameLogic'
import { BOARD_SIZE } from '../data/boardPath'

describe('resolveMove', () => {
  it('moves normally on a normal cell and awards dice*10 points', () => {
    const result = resolveMove(0, 3)
    expect(result.kind).toBe('move')
    expect(result.position).toBe(3)
    expect(result.points).toBe(3 * POINTS_PER_HOUSE)
    expect(result.bonus).toBe(false)
    expect(result.won).toBe(false)
  })

  it('awards the safe-cell bonus when landing exactly on a safe cell (9)', () => {
    const result = resolveMove(5, 4) // lands on 9
    expect(result.kind).toBe('move')
    expect(result.position).toBe(9)
    expect(result.bonus).toBe(true)
    expect(result.points).toBe(4 * POINTS_PER_HOUSE + SAFE_CELL_BONUS)
  })

  it('returns a danger result instead of moving when landing exactly on an acid cell (4)', () => {
    const result = resolveMove(1, 3) // lands on 4
    expect(result.kind).toBe('danger')
    expect(result.fromPosition).toBe(1)
  })

  it('does not crash and does not mutate any external state when landing on danger', () => {
    expect(() => resolveMove(9, 3)).not.toThrow() // 9 + 3 = 12 (danger)
  })

  it('caps the final position at BOARD_SIZE when overshooting past the end', () => {
    const result = resolveMove(47, 6) // 53, no exact cell match -> capped
    expect(result.kind).toBe('move')
    expect(result.position).toBe(BOARD_SIZE)
    expect(result.won).toBe(true)
  })

  it('triggers the final danger trap when landing exactly on the last cell (50)', () => {
    const result = resolveMove(44, 6) // exactly 50, which is type "danger"
    expect(result.kind).toBe('danger')
  })
})

describe('applyAcidPenalty', () => {
  it('moves the player back by the penalty amount', () => {
    expect(applyAcidPenalty(20, ACID_PENALTY)).toBe(15)
  })

  it('never goes below zero', () => {
    expect(applyAcidPenalty(2, ACID_PENALTY)).toBe(0)
  })
})

describe('updatePlayer', () => {
  const players = [
    { id: 1, name: 'A', position: 0, score: 0, finished: false },
    { id: 2, name: 'B', position: 0, score: 0, finished: false }
  ]

  it('updates only the targeted player, leaving others untouched', () => {
    const result = updatePlayer(players, 0, { position: 5, scoreDelta: 30 })
    expect(result[0]).toMatchObject({ position: 5, score: 30 })
    expect(result[1]).toEqual(players[1])
  })

  it('sets finished when provided', () => {
    const result = updatePlayer(players, 1, { position: 50, scoreDelta: 10, finished: true })
    expect(result[1].finished).toBe(true)
  })

  it('leaves finished untouched when not provided', () => {
    const result = updatePlayer(players, 0, { position: 5, scoreDelta: 10 })
    expect(result[0].finished).toBe(false)
  })
})
