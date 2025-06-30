export function getRandomHexColor() {
  return Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')
}

type GenerateImageUrlOption = {
  width: number
  height: number
  title: string
}

export function generateImageUrl({
  width,
  height,
  title,
}: GenerateImageUrlOption) {
  const randomNumber = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
  const text = `${title}+img+№${randomNumber}`

  return `https://placeimg.dev/${width}x${height}/${getRandomHexColor()}?text=${text}&textColor=${getRandomHexColor()}`
}
