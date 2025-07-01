import type { ZodIssue } from 'zod'

export function formatEnvErrors(errors: ZodIssue[]): string {
  const formattedErrorMessages = errors.map(
    (err) => `${err.path.join(' && ')}: ${err.message}`
  )

  return `❌ Invalid environment variables:\n${formattedErrorMessages.join('\n')}`
}

export function getRandomHexColor() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')
}

export function generateImageUrl({
  width,
  height,
  title,
}: {
  width: number
  height: number
  title: string
}) {
  const randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
  const text = `${title}+img+№${randomNumber}`

  return `https://placeimg.dev/${width}x${height}/${getRandomHexColor()}?text=${text}&textColor=${getRandomHexColor()}`
}
