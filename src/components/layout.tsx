import React from 'react'

const Layout: React.FC = ({ children }) => (
  <div className="bg-gray-100 min-h-screen">
    <div className="text-center max-w-xs md:max-w-screen-lg mx-auto py-16">{children}</div>
  </div>
)

export default Layout
