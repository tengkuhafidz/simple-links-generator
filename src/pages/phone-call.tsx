import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const PhoneCall: React.FC = () => {
  return (
    <Layout displayHomeLink={true}>
      <SEO />
      <Hero title="Telephone URL Generator" subtitle="Easily generate telephone url based on your contact number" />
    </Layout>
  )
}

export default PhoneCall
