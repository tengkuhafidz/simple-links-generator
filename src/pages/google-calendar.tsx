import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const GoogleCalendar: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Hero
        title="Google Calendar URL Generator"
        subtitle="Easily generate Google Calendar url based on your event details"
      />
    </Layout>
  )
}

export default GoogleCalendar
