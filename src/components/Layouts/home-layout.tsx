import React from 'react'
import BaseLayout from './base-layout'

interface Props {
  title: string
  description: string
}
const HomeLayout: React.FC<Props> = ({ title, description, children }) => (
  <BaseLayout title={title} description={description} displayBackButton={false}>
    {children}
  </BaseLayout>
)

export default HomeLayout
