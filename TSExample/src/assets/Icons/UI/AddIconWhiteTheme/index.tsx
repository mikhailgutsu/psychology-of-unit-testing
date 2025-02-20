import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
      <Path
        d="M22.5 15.375V22.5m0 0v7.125m0-7.125h7.125m-7.125 0h-7.125m28.5 0c0 11.805-9.57 21.375-21.375 21.375S1.125 34.305 1.125 22.5 10.695 1.125 22.5 1.125s21.375 9.57 21.375 21.375z"
        stroke="#4A1A92"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
