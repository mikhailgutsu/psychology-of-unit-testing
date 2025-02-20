import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={328} height={1} viewBox="0 0 328 1" fill="none" {...props}>
      <Path
        stroke="url(#paint0_linear_14_3763)"
        strokeLinecap="round"
        d="M0.5 0.5L327.5 0.499971"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_14_3763"
          x1={4.37114e-8}
          y1={1.5}
          x2={328}
          y2={1.49997}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#431581" />
          <Stop offset={0.405} stopColor="#7648AF" />
          <Stop offset={0.94} stopColor="#431581" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Icon
