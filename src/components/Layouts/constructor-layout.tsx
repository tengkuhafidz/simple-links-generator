import React from 'react'
import { navigate } from 'gatsby'
import SEO from '../seo'
import Hero from '../hero'

interface Props {
  title: string
  description: string
}
const ConstructorLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO title={title} description={description} />
      <BackButton />
      <div className="text-center max-w-xs md:max-w-screen-lg mx-auto py-16">
        <Hero title={title} subtitle={description} />
        {children}
      </div>
    </div>
  )
}

export default ConstructorLayout

const BackButton: React.FC = () => (
  <div
    className="max-w-xs md:max-w-screen-lg mx-auto pt-4 text-gray-500 cursor-pointer hover:text-black"
    onClick={() => navigate('/')}
  >
    <i className="fas fa-long-arrow-alt-left"></i> Back to Menu
  </div>
)
