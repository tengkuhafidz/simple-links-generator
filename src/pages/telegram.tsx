import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import ConstructorInput from '../components/Constructor/constructor-input'
import { constructTelegramUrl } from '../services/telegram-service'
import { setAndCopyConstructedUrl } from '../services/common-service'

const Telegram: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputUsername, setInputUsername] = useState(null)
  const [inputUsernameErrorMessage, setInputUsernameErrorMessage] = useState(null)

  const resetStates = () => {
    setInputUsernameErrorMessage(null)
    setConstructedUrl(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputUsername) {
      setInputUsernameErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructTelegramUrl(inputUsername)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Telegram URL Constructor"
      description="Easily construct Telegram url with your Username"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Username"
        type="text"
        errorMessage={inputUsernameErrorMessage}
        setInput={setInputUsername}
      />
    </ConstructorLayout>
  )
}

export default Telegram
