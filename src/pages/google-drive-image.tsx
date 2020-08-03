import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { handleCopyConstructedUrl } from '../services/common-service'
import { constructGDriveImageUrl } from '../services/google-drive-image-service'

const GoogleDriveImageUrl: React.FC = () => {
  const [inputUrl, setInputUrl] = useState(null)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [toastVisible, setToastVisible] = useState(false)

  const handleConstructButtonClick = () => {
    setErrorMessage(null)
    if (!inputUrl) {
      setErrorMessage('Please input a valid Google Drive Shareable URL')
      setConstructedUrl(null)
    } else {
      setToastVisible(false)
      const constructedUrl = constructGDriveImageUrl(inputUrl)
      setConstructedUrl(constructedUrl)
      handleCopyConstructedUrl(constructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Google Drive Image URL Constructor"
      description="Easily construct image url based on Google Drive image shareable link"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => handleCopyConstructedUrl(constructedUrl, setToastVisible)}
    >
      <input
        className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gdrive-url"
        type="text"
        placeholder="Google Drive Shareable Link"
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <p className="text-red-600 text-left ml-3">{errorMessage}</p>
    </ConstructorLayout>
  )
}

export default GoogleDriveImageUrl
