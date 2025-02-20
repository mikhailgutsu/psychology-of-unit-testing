import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps, ClipPath } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={18} height={19} viewBox="0 0 18 19" fill="none" {...props}>
      <G clipPath="url(#clip0_189_1154)">
        <Path d="M18 14a2 2 0 01-2 2H2a2 2 0 01-2-2v-2h18v2z" fill="#CE2028" />
        <Path d="M0 7h18v5H0V7z" fill="#22408C" />
        <Path d="M16 3H2a2 2 0 00-2 2v2h18V5a2 2 0 00-2-2z" fill="#EEE" />
      </G>
      <Defs>
        <ClipPath id="clip0_189_1154">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
