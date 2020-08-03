import React from 'react'
import { navigate } from 'gatsby'

interface Props {
  displayHomeLink: boolean
}
const Layout: React.FC<Props> = ({ children, displayHomeLink = true }) => {
  const renderBackLink = () => {
    if (displayHomeLink) {
      return (
        <div
          className="max-w-xs md:max-w-screen-lg mx-auto pt-4 text-gray-500 cursor-pointer hover:text-black"
          onClick={() => navigate('/')}
        >
          <i className="fas fa-long-arrow-alt-left"></i> Back to Menu
        </div>
      )
    }
    return <></>
  }
  return (
    <div className="bg-gray-100 min-h-screen">
      {renderBackLink()}
      <div className="text-center max-w-xs md:max-w-screen-lg mx-auto py-16">{children}</div>
    </div>
  )
}

export default Layout
