import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps, ClipPath } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <G clipPath="url(#clip0_189_893)">
        <Path d="M2.5 3a2 2 0 00-2 2v9a2 2 0 002 2h4V3h-4z" fill="#002B7F" />
        <Path d="M6.5 3h6v13h-6V3z" fill="#FCD116" />
        <Path d="M16.5 3h-4v13h4a2 2 0 002-2V5a2 2 0 00-2-2z" fill="#CE1126" />
      </G>
      <Defs>
        <ClipPath id="clip0_189_893">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
