import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import SEO from '../components/seo'
import Card from '../components/card'
import Hero from '../components/hero'

const Home = () => {
  const linkTypes = [
    {
      title: 'Whatsapp',
      iconClass: 'fab fa-whatsapp-square',
      path: 'whatsapp',
    },
    {
      title: 'Telegram',
      iconClass: 'fab fa-telegram',
      path: 'telegram',
    },
    {
      title: 'Twitter',
      iconClass: 'fab fa-twitter-square',
      path: 'twitter',
    },
    {
      title: 'Google Maps',
      iconClass: 'fas fa-map-marked-alt',
      path: 'google-maps',
    },
    {
      title: 'Google Calendar',
      iconClass: 'fas fa-calendar-alt',
      path: 'google-calendar',
    },
    {
      title: 'Google Drive Image Url',
      iconClass: 'fab fa-google-drive',
      path: 'google-drive-image-url',
    },
  ]

  const renderLinkTypes = () => {
    return linkTypes.map((linkType) => (
      <Card key={linkType.title} title={linkType.title} iconClass={linkType.iconClass} path={linkType.path} />
    ))
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO />
      <div className="text-center max-w-xs md:max-w-screen-xl mx-auto py-16">
        <Hero
          title="Links Generator"
          subtitle="Easily generate useful/deep links by filling in the information you know"
        />
        <div className="grid md:grid-cols-3 gap-8">{renderLinkTypes()}</div>
      </div>
    </div>
  )
}

export default Home
