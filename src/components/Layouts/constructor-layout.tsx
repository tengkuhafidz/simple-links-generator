import React from 'react'
import BaseLayout from './base-layout'
import ConstructButton from '../Constructor/construct-button'
import ConstructedUrl from '../Constructor/constructed-url'
import Toast from '../Constructor/toast'

interface Props {
  title: string
  description: string
  url: string
  toastVisible: boolean
  handleClick: () => void
  handleCopy: (url: string) => void
}

const ConstructorLayout: React.FC<Props> = ({
  children,
  title,
  description,
  url,
  toastVisible,
  handleClick,
  handleCopy,
}) => (
  <BaseLayout title={title} description={description} displayBackButton={true}>
    {children}
    <ConstructButton handleClick={handleClick} />
    <ConstructedUrl url={url} handleCopy={handleCopy} />
    <Toast isVisible={toastVisible} />
  </BaseLayout>
)

export default ConstructorLayout
