import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const SMS: React.FC = () => {
  return (
    <Layout displayHomeLink={true}>
      <SEO />
      <Hero title="SMS URL Generator" subtitle="Easily generate SMS url based on your contact and message" />
    </Layout>
  )
}

export default SMS
