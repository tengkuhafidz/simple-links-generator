import React, { useState } from 'react'
import ConstructorLayout from '../components/Layouts/constructor-layout'
import { setAndCopyConstructedUrl } from '../services/common-service'
import { constructTwitterUrl } from '../services/twitter-service'
import ConstructorInput from '../components/Constructor/constructor-input'

const Twitter: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false)
  const [constructedUrl, setConstructedUrl] = useState(null)
  const [inputUrl, setInputUrl] = useState(null)
  const [inputMessage, setInputMessage] = useState(null)
  const [inputHashtag, setInputHashtag] = useState(null)
  const [inputHashtagErrorMessage, setInputHashtagErrorMessage] = useState(null)
  const [inputUrlErrorMessage, setInputUrlErrorMessage] = useState(null)
  const [inputMessageErrorMessage, setInputMessageErrorMessage] = useState(null)

  const resetStates = () => {
    setConstructedUrl(null)
    setInputUrlErrorMessage(null)
    setInputHashtagErrorMessage(null)
    setInputMessageErrorMessage(null)
    setToastVisible(false)
  }

  const hasValidInputs = () => {
    if (!inputMessage) {
      setInputMessageErrorMessage('Please input a valid Google Drive Shareable URL')
      return false
    }
    return true
  }

  const handleConstructButtonClick = () => {
    resetStates()
    if (hasValidInputs()) {
      const url = constructTwitterUrl(inputMessage, inputUrl, inputHashtag)
      setAndCopyConstructedUrl(url, setConstructedUrl, setToastVisible)
    }
  }

  return (
    <ConstructorLayout
      title="Twitter URL Constructor"
      description="Easily construct Twitter url based on the tweet and hashtag that you want"
      url={constructedUrl}
      toastVisible={toastVisible}
      handleClick={handleConstructButtonClick}
      handleCopy={() => setAndCopyConstructedUrl(constructedUrl, setConstructedUrl, setToastVisible)}
    >
      <ConstructorInput
        placeholder="Tweet Message"
        type="text"
        errorMessage={inputMessageErrorMessage}
        setInput={setInputMessage}
      />
      <ConstructorInput placeholder="URL" type="text" errorMessage={inputUrlErrorMessage} setInput={setInputUrl} />
      <ConstructorInput
        placeholder="Hashtag"
        type="text"
        errorMessage={inputHashtagErrorMessage}
        setInput={setInputHashtag}
      />
    </ConstructorLayout>
  )
}

export default Twitter
