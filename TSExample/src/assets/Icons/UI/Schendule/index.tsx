import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { color = '#FFF', width = 24, height = 24, ...rest } = props
  return (
    <Svg width={40} height={4} viewBox="0 0 32 3" fill="none" {...props}>
      <Path
        stroke="#736A74"
        strokeWidth={1}
        strokeLinecap="round"
        d="M2.13957 1.5L30.4644 1.5"
      />
    </Svg>
  )
}

export default Icon
