import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={60} height={60} viewBox="0 0 60 60" fill="none" {...props}>
      <Path
        d="M8 24.682c0 1.224.239 2.435.702 3.566a9.323 9.323 0 002 3.023A9.174 9.174 0 0017.221 34h24.592a7.133 7.133 0 004.895-1.938 7.278 7.278 0 002.273-4.79 7.298 7.298 0 00-1.572-5.07 7.156 7.156 0 00-4.571-2.624 14.584 14.584 0 00-3.517-9.591 14.303 14.303 0 00-8.91-4.857 14.229 14.229 0 00-9.864 2.297 14.49 14.49 0 00-5.908 8.306 9.222 9.222 0 00-4.797 3.356A9.382 9.382 0 008 24.682z"
        stroke="#FEF5FF"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M20.832 41L15 48.445M28.832 41L23 48.445M36.832 41L31 48.445"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Icon
