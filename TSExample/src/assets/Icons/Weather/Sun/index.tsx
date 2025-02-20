import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps, ClipPath } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
      <G clipPath="url(#clip0_111_2322)" stroke="#FEF5FF" strokeWidth={2}>
        <Path d="M22.321 32.49c-5.607 0-10.168-4.56-10.168-10.169 0-5.607 4.56-10.168 10.168-10.168s10.168 4.56 10.168 10.168S27.93 32.49 22.322 32.49z" />
        <Path
          d="M22.322.714v5.084m21.607 16.523h-5.084m-33.047 0H.714m21.607 16.523v5.085m11.44-33.047l3.813-3.813M7.069 37.574l3.813-3.813M7.07 7.069l3.813 3.813m22.879 22.879l3.813 3.813"
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_111_2322">
          <Path fill="#fff" d="M0 0H45V45H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
