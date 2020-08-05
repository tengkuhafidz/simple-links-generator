import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { setAndCopyConstructedUrl } from '../services/common-service'
import { constructPhoneCallUrl } from '../services/phone-call-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const PhoneCall: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputPhoneNumber, setInputPhoneNumber] = useState(null)
  const [inputPhoneNumberErrorMessage, setInputPhoneNumberErrorMessage] = useState(null)

  const resetStates = () => {
    setInputPhoneNumberErrorMessage(null)
    setConstructedUrl(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputPhoneNumber) {
      setInputPhoneNumberErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructPhoneCallUrl(inputPhoneNumber)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Telephone URL Constructor"
      description="Easily construct telephone url based on your contact number"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Phone Number With Country Code Prefix. (e.g. +6587654321)"
        type="text"
        errorMessage={inputPhoneNumberErrorMessage}
        setInput={setInputPhoneNumber}
      />
    </ConstructorLayout>
  )
}

export default PhoneCall
