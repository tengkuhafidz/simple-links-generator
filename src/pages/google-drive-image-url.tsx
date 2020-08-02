import React, { useState } from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'
import GenerateButton from '../components/Generator/generate-button'
import GeneratedUrl from '../components/Generator/generated-url'

const GoogleDriveImageUrl: React.FC = () => {
  const [inputUrl, setInputUrl] = useState(null)
  const [generatedUrl, setGeneratedUrl] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const generateGDriveImageUrl = (inputUrl) => {
    const urlPaths = inputUrl.split('/')
    const imageId = urlPaths[urlPaths.length - 2]
    const BASE_URL = 'https://drive.google.com/uc?id='
    return BASE_URL + imageId
  }

  const handleClick = () => {
    setErrorMessage(null)
    if (!inputUrl) {
      setErrorMessage('Please input a valid Google Drive Shareable URL')
      setGeneratedUrl(null)
    } else {
      const generatedUrl = generateGDriveImageUrl(inputUrl)
      setGeneratedUrl(generatedUrl)
    }
  }

  return (
    <Layout>
      <SEO />
      <Hero
        title="Google Drive Image URL Generator"
        subtitle="Easily generate image url based on Google Drive image shareable link"
      />
      <input
        className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gdrive-url"
        type="text"
        placeholder="Google Drive Shareable Link"
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <p className="text-red-600 text-left ml-3">{errorMessage}</p>
      <GenerateButton handleClick={handleClick} />
      <GeneratedUrl url={generatedUrl} />
    </Layout>
  )
}

export default GoogleDriveImageUrl
