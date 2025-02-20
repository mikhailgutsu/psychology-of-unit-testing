import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={53} height={38} viewBox="0 0 53 38" fill="none" {...props}>
      <Path
        d="M1 25.25A11.25 11.25 0 0012.25 36.5h30a8.75 8.75 0 001.25-17.413 17.5 17.5 0 00-34.4-4.642A11.25 11.25 0 001 25.25z"
        stroke="#FEF5FF"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
