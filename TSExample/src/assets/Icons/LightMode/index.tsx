import * as React from 'react'
import Svg, { Circle, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { color = '#ААА', width = 24, height = 24, ...rest } = props

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx={12} cy={12} r={12} fill="#FEF5FF" />
      <Path
        d="M12 15.294A3.297 3.297 0 018.706 12 3.297 3.297 0 0112 8.706 3.297 3.297 0 0115.294 12 3.297 3.297 0 0112 15.294z"
        stroke="#4A1A92"
      />
      <Path
        d="M12 5v1.647M19 12h-1.647M6.647 12H5m7 5.353V19m3.706-10.706L16.94 7.06M7.06 16.94l1.235-1.235M7.06 7.059l1.235 1.235m7.412 7.412l1.235 1.235"
        stroke="#4A1A92"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Icon
