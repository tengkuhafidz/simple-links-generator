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

export const handleCopyConstructedUrl = (
  url: string,
  setToastVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  copyToClipboard(url)
  displayToast(setToastVisible)
}
