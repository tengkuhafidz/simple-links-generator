import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import Card from '../components/card'
import HomeLayout from '../components/Layouts/home-layout'
import UrlServices from '../constants/url-services.json'

const Home = () => {
  const renderLinkTypes = () => {
    return UrlServices.map((linkType) => (
      <Card key={linkType.title} title={linkType.title} iconClass={linkType.iconClass} path={linkType.path} />
    ))
  }

  return (
    <HomeLayout
      title="Simple URL Generator"
      description="Easily generate useful/deep links by filling in the information you know"
    >
      <div className="grid md:grid-cols-3 gap-12">{renderLinkTypes()}</div>
    </HomeLayout>
  )
}

export default Home
