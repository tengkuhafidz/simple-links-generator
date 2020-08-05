import { replaceEmptySpaces } from './utils'

export const constructGoogleMapsUrl = (destinationAddress: string) => {
  return `https://www.google.com/maps?q=${replaceEmptySpaces(destinationAddress)}`
}
