import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Email: React.FC = () => {
  return (
    <Layout displayHomeLink={true}>
      <SEO />
      <Hero
        title="Email URL Generator"
        subtitle="Easily generate email url based on your email address, subject and message"
      />
    </Layout>
  )
}

export default Email
