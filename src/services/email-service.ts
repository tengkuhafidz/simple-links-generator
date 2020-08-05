export const constructEmailUrl = (sendTo: string, cc: string, bcc: string, subject: string, body: string) => {
  const ccParameter: string = cc ? `cc=${cc}` : ''
  const bccParameter: string = bcc ? `&bcc=${bcc}` : ''
  const subjectParameter: string = subject ? `&subject=${subject}` : ''
  const bodyParameter: string = body ? `&body=${body}` : ''
  return `mailto:${sendTo}?${ccParameter + bccParameter + subjectParameter + bodyParameter}`
}
