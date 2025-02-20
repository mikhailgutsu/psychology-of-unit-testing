import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps, ClipPath } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={18} height={19} viewBox="0 0 18 19" fill="none" {...props}>
      <G clipPath="url(#clip0_189_816)">
        <Path d="M16 3H2a2 2 0 00-2 2v4.5h18V5a2 2 0 00-2-2z" fill="#005BBB" />
        <Path d="M18 14a2 2 0 01-2 2H2a2 2 0 01-2-2V9.5h18V14z" fill="#FFD500" />
      </G>
      <Defs>
        <ClipPath id="clip0_189_816">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
