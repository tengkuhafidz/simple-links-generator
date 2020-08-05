import React from 'react'

interface Props {
  placeholder: string
  type: string
  errorMessage: string
  setInput: React.Dispatch<any>
}

const ConstructorInput: React.FC<Props> = ({ placeholder, type, errorMessage, setInput }) => {
  return (
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gdrive-url"
        type={type}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
      <p className="text-red-600 text-left ml-3">{errorMessage}</p>
    </div>
  )
}

export default ConstructorInput
