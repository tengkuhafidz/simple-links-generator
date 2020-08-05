const displayToast = (setToastVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
  setToastVisible(true)
  setTimeout(() => {
    setToastVisible(false)
  }, 4000)
}

const copyToClipboard = (textToBeCopied: string) => {
  if (navigator !== undefined) {
    navigator.clipboard.writeText(textToBeCopied)
  }
}

export const setAndCopyConstructedUrl = (
  url: string,
  setConstructedUrl: React.Dispatch<React.SetStateAction<string>>,
  setToastVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setConstructedUrl(url)
  copyToClipboard(url)
  displayToast(setToastVisible)
}
