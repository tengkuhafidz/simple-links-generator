import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { setAndCopyConstructedUrl } from '../services/common-service'
import { constructGDriveImageUrl } from '../services/google-drive-image-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const GoogleDriveImageUrl: React.FC = () => {
  const [inputUrl, setInputUrl] = useState(null)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)

  const resetStates = () => {
    setErrorMessage(null)
    setConstructedUrl(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputUrl) {
      setErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructGDriveImageUrl(inputUrl)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Google Drive Image URL Constructor"
      description="Easily construct image url based on Google Drive image shareable link"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Google Drive Shareable Link"
        type="text"
        errorMessage={errorMessage}
        setInput={setInputUrl}
      />
    </ConstructorLayout>
  )
}

export default GoogleDriveImageUrl
