import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M9 18.5h6m3-15a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2v-14a2 2 0 012-2h12z"
        stroke="#FEF5FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
