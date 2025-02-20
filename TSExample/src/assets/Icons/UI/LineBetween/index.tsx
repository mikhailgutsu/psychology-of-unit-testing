import React from 'react'
import Svg, { Line as SvgLine } from 'react-native-svg'

const Line: React.FC<{ width: number; color: string }> = ({ width, color }) => {
  return (
    <Svg height="2" width={width}>
      <SvgLine x1="0" y1="0" x2={width} y2="0" stroke={color} strokeWidth="2" />
    </Svg>
  )
}

export default Line
