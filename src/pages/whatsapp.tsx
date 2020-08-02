import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Whatsapp: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Hero
        title="Whatsapp URL Generator"
        subtitle="Easily generate Whatsapp url based on your message and contact details"
      />
    </Layout>
  )
}

export default Whatsapp
