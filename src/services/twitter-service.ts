import { replaceEmptySpaces } from './utils'

export const constructTwitterUrl = (inputMessage, inputUrl, inputHashtag) => {
  const textParameter = `text=${replaceEmptySpaces(inputMessage)}`
  const urlParameter = inputUrl ? `&url=${inputUrl}` : ''
  const hashtagParameter = inputHashtag ? `&hashtags=${inputHashtag}` : ''
  return `https://twitter.com/share?${textParameter + urlParameter + hashtagParameter}`
}
