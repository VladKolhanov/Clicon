import { describe, expect, test, vi } from 'vitest'

import { getRandomHexColor } from '..'

describe('getRandomHexColor', () => {
  test('should return a hex string of length 6', () => {
    const hex = getRandomHexColor()
    expect(hex).toMatch(/^[0-9a-f]{6}$/)
  })

  test('should generate predictable output when Math.random is mocked', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomHexColor()).toBe('000000')

    vi.spyOn(Math, 'random').mockReturnValue(1)
    expect(getRandomHexColor()).toBe('ffffff')
  })
})
