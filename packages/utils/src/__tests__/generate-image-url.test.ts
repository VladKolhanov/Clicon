import { describe, expect, test, vi } from 'vitest'

import { generateImageUrl } from '..'

describe('generateImageUrl', () => {
  test('should return a correct image URL with given width, height, and title', () => {
    vi.spyOn(Math, 'random').mockImplementationOnce(() => 0.0)
    vi.spyOn(Math, 'random').mockImplementation(() => 1.0)

    const url = generateImageUrl({
      width: 300,
      height: 200,
      title: 'Test',
    })

    expect(url).toBe(
      'https://placeimg.dev/300x200/ffffff?text=Test+img+№10000&textColor=ffffff'
    )
  })
})
