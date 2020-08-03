import React from 'react'
import Hero from '../hero'
import SEO from '../seo'

interface Props {
  title: string
  description: string
}
const HomeLayout: React.FC<Props> = ({ title, description, children }) => (
  <div className="bg-gray-100 min-h-screen">
    <SEO title={title} description={description} />

    <div className="text-center max-w-xs md:max-w-screen-lg mx-auto py-16">
      <Hero title={title} subtitle={description} />
      {children}
    </div>
  </div>
)

export default HomeLayout
