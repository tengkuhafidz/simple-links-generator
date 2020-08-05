import { replaceEmptySpaces } from './utils'

export const constructSMSUrl = (phoneNumberWithPrefix: string, message: string) => {
  const bodyParameter = message ? `?&body=${replaceEmptySpaces(message)}` : ''
  return `sms:${phoneNumberWithPrefix + bodyParameter}`
}
