import React from 'react'

interface Props {
  handleClick: (e) => void
}
const ConstructButton: React.FC<Props> = ({ handleClick }) => (
  <button
    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg mt-8 text-lg"
    onClick={handleClick}
  >
    CONSTRUCT URL
  </button>
)

export default ConstructButton
