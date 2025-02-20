import * as React from 'react'
import Svg, { Circle, Defs, G, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { width = 24, height = 24, ...rest } = props

  return (
    <Svg width={7} height={7} viewBox="0 0 7 7" fill="none" {...props}>
      <Circle cx={3.5} cy={3.5} r={3.5} fill="#4A1A92" />
    </Svg>
  )
}

export default Icon
