import React from 'react'
import SEO from '../seo'
import Hero from '../hero'
import { navigate } from 'gatsby'

interface Props {
  title: string
  description: string
  displayBackButton: boolean
}

const BaseLayout: React.FC<Props> = ({ children, title, description, displayBackButton }) => (
  <div className="bg-gray-100 min-h-screen">
    <SEO title={title} description={description} />
    {displayBackButton ? <BackButton /> : <></>}
    <div className="text-center max-w-xs md:max-w-screen-lg mx-auto py-16">
      <Hero title={title} subtitle={description} />
      {children}
    </div>
  </div>
)

export default BaseLayout

const BackButton: React.FC = () => (
  <div
    className="max-w-xs md:max-w-screen-lg mx-auto pt-4 text-gray-500 cursor-pointer hover:text-black"
    onClick={() => navigate('/')}
  >
    <i className="fas fa-long-arrow-alt-left"></i> Back to Menu
  </div>
)
