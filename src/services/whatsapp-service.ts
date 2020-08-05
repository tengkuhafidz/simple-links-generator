import { replaceEmptySpaces } from './utils'

export const constructWhatsappUrl = (inputMobileNumber, inputMessage) => {
  const formattedMessasage = replaceEmptySpaces(inputMessage)
  return `https://api.whatsapp.com/send?phone=${inputMobileNumber}&text=${formattedMessasage}`
}
