import React from 'react'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Twitter: React.FC = () => {
  return (
    <Layout displayHomeLink={true}>
      <SEO />
      <Hero
        title="Twitter URL Generator"
        subtitle="Easily generate Twitter url based on the tweet and hashtag that you want"
      />
    </Layout>
  )
}

export default Twitter
