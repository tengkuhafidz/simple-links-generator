import React from 'react'
import { Animated } from 'react-animated-css'

interface Props {
  isVisible: boolean
}
const Toast: React.FC<Props> = ({ isVisible = true }) => (
  <Animated animationIn="jello" animationOut="fadeOut" isVisible={isVisible}>
    <span className="bg-blue-300 font-semibold px-1">URL copied to clipboard!</span>
  </Animated>
)

export default Toast
