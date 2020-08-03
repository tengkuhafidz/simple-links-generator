import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react'
import SEO from '../components/seo'
import Card from '../components/card'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Home = () => {
  const linkTypes = [
    {
      title: 'Whatsapp',
      iconClass: 'fab fa-whatsapp',
      path: 'whatsapp',
    },
    {
      title: 'Telegram',
      iconClass: 'fab fa-telegram-plane',
      path: 'telegram',
    },
    {
      title: 'Twitter',
      iconClass: 'fab fa-twitter',
      path: 'twitter',
    },
    {
      title: 'Email',
      iconClass: 'fas fa-envelope-open',
      path: 'email',
    },
    {
      title: 'SMS',
      iconClass: 'fas fa-sms',
      path: 'sms',
    },
    {
      title: 'Phone Call',
      iconClass: 'fas fa-phone-volume',
      path: 'phone-call',
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
      path: 'google-drive-image',
    },
  ]

  const renderLinkTypes = () => {
    return linkTypes.map((linkType) => (
      <Card key={linkType.title} title={linkType.title} iconClass={linkType.iconClass} path={linkType.path} />
    ))
  }

  return (
    <Layout displayHomeLink={false}>
      <SEO />
      <Hero
        title="Links Generator"
        subtitle="Easily generate useful/deep links by filling in the information you know"
      />
      <div className="grid md:grid-cols-3 gap-12">{renderLinkTypes()}</div>
    </Layout>
  )
}

export default Home
