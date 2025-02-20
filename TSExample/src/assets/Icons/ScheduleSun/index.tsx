import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { color = '#ААА', width = 24, height = 24, ...rest } = props

  return (
    <Svg width={12} height={11} viewBox="0 0 12 11" fill="none" {...props}>
      <Path
        d="M6 7.853A2.355 2.355 0 013.647 5.5 2.355 2.355 0 016 3.147 2.355 2.355 0 018.353 5.5 2.355 2.355 0 016 7.853z"
        stroke="#FFF"
      />
      <Path
        d="M6 .5v1.176M11 5.5H9.824m-7.648 0H1m5 3.824V10.5m2.647-7.647l.882-.882M2.471 9.029l.882-.882M2.47 1.971l.882.882m5.294 5.294l.882.882"
        stroke="#FFF"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Icon
