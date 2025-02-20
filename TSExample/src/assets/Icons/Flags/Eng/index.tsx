import * as React from 'react'
import Svg, { Defs, G, Path, type SvgProps, ClipPath } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <G clipPath="url(#clip0_189_247)">
        <Path
          d="M18.346 14.769H.654A2 2 0 002.5 16h14a2 2 0 001.846-1.231zM.5 12.405h18v1.281H.5v-1.28zm5.75-7.09H18.5v1.28H6.25v-1.28zM18.346 4.23A2 2 0 0016.5 3H6.25v1.231h12.096zM6.25 7.678H18.5v1.28H6.25v-1.28zM.5 10.041h18v1.281H.5v-1.28z"
          fill="#BF0A30"
        />
        <Path
          d="M6.25 6.595H18.5v1.083H6.25V6.595zM.5 8.959v1.082h18V8.96H.5zM6.25 4.23v1.084H18.5V5c0-.272-.055-.532-.154-.769H6.25zM.5 11.322h18v1.084H.5v-1.084zM.5 14c0 .273.055.532.154.769h17.692c.101-.244.154-.505.154-.769v-.315H.5V14z"
          fill="#EEE"
        />
        <Path d="M2.5 3a2 2 0 00-2 2v3.959h6V3h-4z" fill="#002868" />
      </G>
      <Defs>
        <ClipPath id="clip0_189_247">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Icon
