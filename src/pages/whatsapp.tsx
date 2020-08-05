import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { setAndCopyConstructedUrl } from '../services/common-service'
import { constructWhatsappUrl } from '../services/whatsapp-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const Whatsapp: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputMobileNumber, setInputMobileNumber] = useState(null)
  const [inputMessage, setInputMessage] = useState(null)
  const [inputMobileNumberErrorMessage, setInputMobileNumberErrorMessage] = useState(null)
  const [inputMessageErrorMessage, setInputMessageErrorMessage] = useState(null)

  const resetStates = () => {
    setConstructedUrl(null)
    setInputMobileNumberErrorMessage(null)
    setInputMessageErrorMessage(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputMessage) {
      setInputMobileNumberErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructWhatsappUrl(inputMobileNumber, inputMessage)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Whatsapp URL Constructor"
      description="Easily construct Whatsapp url based on your message and contact details"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Mobile Number"
        type="number"
        errorMessage={inputMobileNumberErrorMessage}
        setInput={setInputMobileNumber}
      />
      <ConstructorInput
        placeholder="Text Message"
        type="text"
        errorMessage={inputMobileNumberErrorMessage}
        setInput={setInputMessage}
      />
    </ConstructorLayout>
  )
}

export default Whatsapp
