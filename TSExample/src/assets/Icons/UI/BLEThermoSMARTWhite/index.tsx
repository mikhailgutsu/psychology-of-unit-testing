import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <G clipPath="url(#clip0_256_2993)">
        <Path
          d="M2 11.839h3.5m11.5 0h3.5M11.36 6.5V3.34m0 17.322v-3.16M9.9 1.892a2.134 2.134 0 011.368-.631c.5-.03.97.14 1.303.474l8.8 8.8c.333.333.504.802.474 1.303-.03.501-.257.993-.632 1.368l-8.485 8.485a2.134 2.134 0 01-1.368.632c-.501.03-.97-.141-1.303-.474l-8.8-8.8a1.684 1.684 0 01-.475-1.303c.03-.501.257-.993.632-1.368L9.9 1.893z"
          stroke="#170E25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_256_2993">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
