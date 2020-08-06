import { replaceEmptySpaces } from './utils'

export const constructEmailUrl = (sendTo: string, cc: string, bcc: string, subject: string, body: string) => {
  const ccParameter: string = cc ? `cc=${cc}` : ''
  const bccParameter: string = bcc ? `&bcc=${bcc}` : ''
  const subjectParameter: string = subject ? `&subject=${replaceEmptySpaces(subject)}` : ''
  const bodyParameter: string = body ? `&body=${replaceEmptySpaces(body)}` : ''
  return `mailto:${sendTo}?${ccParameter + bccParameter + subjectParameter + bodyParameter}`
}
