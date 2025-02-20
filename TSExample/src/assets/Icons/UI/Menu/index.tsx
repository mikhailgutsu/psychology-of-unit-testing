import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { color = 'white', width = 24, height = 24, ...rest } = props

  return (
    <Svg
      data-name="Layer 3"
      viewBox="0 0 128 128"
      width={width}
      height={height}
      {...rest}
    >
      <Path
        d="M97.092 36.078H30.908a2.111 2.111 0 000 4.222h66.184a2.111 2.111 0 000-4.222zM97.092 61.889H30.908a2.111 2.111 0 000 4.222h66.184a2.111 2.111 0 000-4.222zM97.092 87.7H30.908a2.111 2.111 0 000 4.222h66.184a2.111 2.111 0 000-4.222z"
        fill={color}
      />
    </Svg>
  )
}

export default Icon
