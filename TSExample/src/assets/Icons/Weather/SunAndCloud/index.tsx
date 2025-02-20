import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={53} height={53} viewBox="0 0 53 53" fill="none" {...props}>
      <Path
        d="M32.043 26.87c-4.245 0-7.698-3.452-7.698-7.698s3.453-7.699 7.698-7.699c4.246 0 7.7 3.453 7.7 7.699s-3.454 7.699-7.7 7.699z"
        stroke="#FEF5FF"
        strokeWidth={2}
      />
      <Path
        d="M32.043 2.812v3.85m16.36 12.51h-3.85m-25.02 0h-3.85m16.36 12.51v3.85m8.661-25.021l2.887-2.887M20.495 30.72l2.887-2.887m-2.887-20.21l2.887 2.888m17.322 17.322l2.887 2.887"
        stroke="#FEF5FF"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M3.786 35.018a8.518 8.518 0 008.517 8.518h22.715a6.625 6.625 0 00.946-13.184A13.25 13.25 0 009.92 26.837a8.518 8.518 0 00-6.133 8.18z"
        fill="#110D1C"
        stroke="#FEF5FF"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
