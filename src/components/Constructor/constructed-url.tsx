import React from 'react'

interface Props {
  url: string
  handleCopy: (url: string) => void
}

const ConstructedUrl: React.FC<Props> = ({ url, handleCopy }) => {
  const navigateToUrl = () => {
    if (window !== undefined) {
      window.open(url, '_blank')
    }
  }

  const handleClick = (e) => {
    e.stopPropagation()
    handleCopy(url)
  }
  if (!url) return <></>
  return (
    <div className="text-center py-4 lg:px-4 mt-12">
      <div
        className="p-3 bg-black items-center text-gray-100 leading-none lg:rounded-full flex lg:inline-flex shadow hover:shadow-lg cursor-pointer hover:font-semibold"
        onClick={navigateToUrl}
      >
        <span
          className="flex rounded-full bg-gray-600 uppercase px-2 py-2 text-xs font-bold mr-3 hover:bg-blue-500"
          onClick={(e) => handleClick(e)}
        >
          Copy Url &nbsp;<i className="fas fa-copy"></i>
        </span>
        <span className="mr-2 text-left flex-auto ">{url}</span>
        <span className="font-semibold mr-2 text-left flex-auto">
          <i className="fas fa-angle-right"></i>
        </span>
      </div>
    </div>
  )
}

export default ConstructedUrl
