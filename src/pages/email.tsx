import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { setAndCopyConstructedUrl } from '../services/common-service'
import { constructEmailUrl } from '../services/email-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const Email: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputSendTo, setInputSendTo] = useState(null)
  const [inputCC, setInputCC] = useState(null)
  const [inputBCC, setInputBCC] = useState(null)
  const [inputSubject, setInputSubject] = useState(null)
  const [inputBody, setInputBody] = useState(null)
  const [inputSendToErrorMessage, setInputCCErrorSendToErrorMessage] = useState(null)
  const [inputCCErrorMessage, setInputCCErrorMessage] = useState(null)
  const [inputBCCErrorMessage, setInputBCCErrorMessage] = useState(null)
  const [inputSubjectErrorMessage, setInputSubjectErrorMessage] = useState(null)
  const [inputBodyErrorMessage, setInputBodyErrorMessage] = useState(null)

  const resetStates = () => {
    setConstructedUrl(null)
    setInputCCErrorSendToErrorMessage(null)
    setInputCCErrorMessage(null)
    setInputBCCErrorMessage(null)
    setInputSubjectErrorMessage(null)
    setInputBodyErrorMessage(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputSendTo) {
      setInputCCErrorSendToErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructEmailUrl(inputSendTo, inputCC, inputBCC, inputSubject, inputBody)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Email URL Constructor"
      description="Easily construct email url based on your email address, subject and message"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Send To Email Address"
        type="text"
        errorMessage={inputSendToErrorMessage}
        setInput={setInputSendTo}
      />
      <ConstructorInput
        placeholder="CC To Email"
        type="text"
        errorMessage={inputCCErrorMessage}
        setInput={setInputCC}
      />
      <ConstructorInput
        placeholder="BCC To Email"
        type="text"
        errorMessage={inputBCCErrorMessage}
        setInput={setInputBCC}
      />
      <ConstructorInput
        placeholder="Subject"
        type="text"
        errorMessage={inputSubjectErrorMessage}
        setInput={setInputSubject}
      />
      <ConstructorInput
        placeholder="Email Body"
        type="text"
        errorMessage={inputBodyErrorMessage}
        setInput={setInputBody}
      />
    </ConstructorLayout>
  )
}

export default Email
