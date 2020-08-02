import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Telegram: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Hero
        title="Telegram URL Generator"
        subtitle="Easily generate Telegram url based on your message and contact details"
      />
    </Layout>
  )
}

export default Telegram
