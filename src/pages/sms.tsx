import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { constructSMSUrl } from '../services/sms-service'
import { setAndCopyConstructedUrl } from '../services/common-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const SMS: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputPhoneNumber, setInputPhoneNumber] = useState(null)
  const [inputMessage, setInputMessage] = useState(null)
  const [inputMessageErrorMessage, setInputMessageErrorMessage] = useState(null)
  const [inputPhoneNumberErrorMessage, setInputPhoneNumberErrorMessage] = useState(null)

  const resetStates = () => {
    setInputPhoneNumberErrorMessage(null)
    setInputMessageErrorMessage(null)
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
      const url = constructSMSUrl(inputPhoneNumber, inputMessage)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="SMS URL Constructor"
      description="Easily construct SMS url based on your contact and message"
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
      <ConstructorInput
        placeholder="Text Message"
        type="text"
        errorMessage={inputMessageErrorMessage}
        setInput={setInputMessage}
      />
    </ConstructorLayout>
  )
}

export default SMS
