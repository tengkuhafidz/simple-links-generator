import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const GoogleMaps: React.FC = () => {
  return (
    <Layout displayHomeLink={true}>
      <SEO />
      <Hero
        title="Google Maps URL Generator"
        subtitle="Easily generate Google Maps url based on your location details"
      />
    </Layout>
  )
}

export default GoogleMaps
