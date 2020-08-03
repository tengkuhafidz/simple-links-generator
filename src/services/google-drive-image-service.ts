const replaceOpenWithUc = (inputUrl: string) => {
  return inputUrl.replace('open', 'uc')
}

const changeBaseUrl = (inputUrl: string) => {
  const urlPaths = inputUrl.split('/')
  const imageId = urlPaths[urlPaths.length - 2]
  const BASE_URL = 'https://drive.google.com/uc?id='
  return BASE_URL + imageId
}

export const generateGDriveImageUrl = (inputUrl: string) => {
  if (inputUrl.includes('id=')) {
    return replaceOpenWithUc(inputUrl)
  }
  return changeBaseUrl(inputUrl)
}
