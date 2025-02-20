import * as React from 'react'
import Svg, { Defs, G, Path, Rect, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { width = 24, height = 24, ...rest } = props

  return (
    <Svg width={20} height={7} viewBox="0 0 20 7" fill="none" {...props}>
      <Rect width={20} height={7} rx={3.5} fill="#4A1A92" />
    </Svg>
  )
}

export default Icon
