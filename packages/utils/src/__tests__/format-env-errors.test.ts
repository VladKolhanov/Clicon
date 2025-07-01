import { describe, expect, test } from 'vitest'
import type { ZodIssue } from 'zod'

import { formatEnvErrors } from '../'

const mockErrors: ZodIssue[] = [
  {
    code: 'invalid_type',
    expected: 'string',
    received: 'number',
    path: ['PORT'],
    message: 'Expected string, received number',
  },
  {
    code: 'too_small',
    minimum: 1,
    inclusive: true,
    type: 'string',
    path: ['API_KEY'],
    message: 'String must contain at least 1 character(s)',
  },
]

describe('formatEnvErrors', () => {
  test('should format multiple ZodIssue errors correctly', () => {
    const result = formatEnvErrors(mockErrors)

    expect(result).toBe(
      [
        '❌ Invalid environment variables:',
        'PORT: Expected string, received number',
        'API_KEY: String must contain at least 1 character(s)',
      ].join('\n')
    )
  })
})
