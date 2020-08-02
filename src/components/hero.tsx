import React from 'react'

interface Props {
  title: string
  subtitle: string
}

const Hero: React.FC<Props> = ({ title, subtitle }) => (
  <div className="mb-16">
    <h1 className="text-5xl font-bold">{title}</h1>
    <p className="text-xl">{subtitle}</p>
  </div>
)

export default Hero
