import * as React from 'react'
import Svg, { Circle, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={97} height={97} viewBox="0 0 97 97" fill="none" {...props}>
      <Path
        d="M48.5 72h.035m-11.097-8.813c5.9-5.874 16.224-5.874 22.124 0m8.113-8.812c-11.116-9.79-26.55-9.79-38.35 0M19 45.562c9.316-7.834 19.408-11.75 29.5-11.75m8.85 1.47s2.95 0 5.9 5.874c0 0 7.307-11.456 14.75-16.156"
        stroke="#34A853"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={48.5} cy={48.5} r={46.5} stroke="#34A853" strokeWidth={4} />
    </Svg>
  )
}

export default Icon
