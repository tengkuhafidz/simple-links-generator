import React from 'react'
import BaseLayout from './base-layout'

interface Props {
  title: string
  description: string
}

const ConstructorLayout: React.FC<Props> = ({ title, description, children }) => (
  <BaseLayout title={title} description={description} displayBackButton={true}>
    {children}
  </BaseLayout>
)

export default ConstructorLayout
