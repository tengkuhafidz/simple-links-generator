import React, { useState } from 'react'
import ConstructButton from '../components/Constructor/construct-button'
import ConstructedUrl from '../components/Constructor/constructed-url'
import Toast from '../components/Constructor/toast'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { constructGDriveImageUrl } from '../services/google-drive-image-service'

const GoogleDriveImageUrl: React.FC = () => {
  const [inputUrl, setInputUrl] = useState(null)
  const [constructedUrl, setConstructedUrl] = useState(null)
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
      setConstructedUrl(null)
    } else {
      setToastVisible(false)
      const constructdUrl = constructGDriveImageUrl(inputUrl)
      setConstructedUrl(constructdUrl)
      handleCopy(constructdUrl)
    }
  }

  return (
    <ConstructorLayout
      title="Google Drive Image URL Constructor"
      description="Easily construct image url based on Google Drive image shareable link"
    >
      <input
        className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gdrive-url"
        type="text"
        placeholder="Google Drive Shareable Link"
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <p className="text-red-600 text-left ml-3">{errorMessage}</p>
      <ConstructButton handleClick={handleClick} />
      <ConstructedUrl url={constructedUrl} handleCopy={handleCopy} />
      <Toast isVisible={toastVisible} />
    </ConstructorLayout>
  )
}

export default GoogleDriveImageUrl
