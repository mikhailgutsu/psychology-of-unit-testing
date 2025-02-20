import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
      <Path
        d="M6.5 1l-5 5 5 5"
        stroke="#C1B4C2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
