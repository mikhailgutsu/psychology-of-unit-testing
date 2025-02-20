import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={119} height={119} viewBox="0 0 119 119" fill="none" {...props}>
      <Path
        d="M59.5 40.375V59.5m0 0v19.125m0-19.125h19.125m-19.125 0H40.375m76.5 0c0 31.687-25.688 57.375-57.375 57.375S2.125 91.187 2.125 59.5 27.813 2.125 59.5 2.125s57.375 25.688 57.375 57.375z"
        stroke="#C1B4C2"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
