import React from 'react'
import { navigate } from 'gatsby'

interface Props {
  title: string
  iconClass: string
  path: string
}

const Card: React.FC<Props> = ({ title, iconClass, path }) => (
  <div className="p-4 bg-white shadow rounded-full hover:shadow-lg cursor-pointer" onClick={() => navigate(path)}>
    <i className={`${iconClass} text-5xl`}></i>
    <p className="mt-2 text-lg">{title}</p>
  </div>
)

export default Card
