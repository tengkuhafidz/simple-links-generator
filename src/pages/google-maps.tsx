import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { constructGoogleMapsUrl } from '../services/google-maps-service'
import { setAndCopyConstructedUrl } from '../services/common-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const GoogleMaps: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputDestinationAddress, setInputDestinationAddress] = useState(null)
  const [inputDestinationAddressErrorMessage, setInputDestinationAddressErrorMessage] = useState(null)

  const resetStates = () => {
    setInputDestinationAddressErrorMessage(null)
    setConstructedUrl(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputDestinationAddress) {
      setInputDestinationAddressErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructGoogleMapsUrl(inputDestinationAddress)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Google Maps URL Constructor"
      description="Easily construct Google Maps url based on your location details"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Destination Address"
        type="text"
        errorMessage={inputDestinationAddressErrorMessage}
        setInput={setInputDestinationAddress}
      />
    </ConstructorLayout>
  )
}

export default GoogleMaps
