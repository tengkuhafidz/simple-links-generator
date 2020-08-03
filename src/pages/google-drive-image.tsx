import React, { useState } from 'react'
import GenerateButton from '../components/Generator/generate-button'
import GeneratedUrl from '../components/Generator/generated-url'
import Toast from '../components/Generator/toast'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { generateGDriveImageUrl } from '../services/google-drive-image-service'

const GoogleDriveImageUrl: React.FC = () => {
  const [inputUrl, setInputUrl] = useState(null)
  const [generatedUrl, setGeneratedUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)

  const displayToast = () => {
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

  const handleCopy = (url: string) => {
    copyToClipboard(url)
    displayToast()
  }

  const handleClick = () => {
    setErrorMessage(null)
    if (!inputUrl) {
      setErrorMessage('Please input a valid Google Drive Shareable URL')
      setGeneratedUrl(null)
    } else {
      setToastVisible(false)
      const generatedUrl = generateGDriveImageUrl(inputUrl)
      setGeneratedUrl(generatedUrl)
      handleCopy(generatedUrl)
    }
  }

  return (
    <ConstructorLayout
      title="Google Drive Image URL Generator"
      description="Easily generate image url based on Google Drive image shareable link"
    >
      <input
        className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gdrive-url"
        type="text"
        placeholder="Google Drive Shareable Link"
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <p className="text-red-600 text-left ml-3">{errorMessage}</p>
      <GenerateButton handleClick={handleClick} />
      <GeneratedUrl url={generatedUrl} handleCopy={handleCopy} />
      <Toast isVisible={toastVisible} />
    </ConstructorLayout>
  )
}

export default GoogleDriveImageUrl
