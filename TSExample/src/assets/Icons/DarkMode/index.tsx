import * as React from 'react'
import Svg, { Circle, Path, type SvgProps } from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  const { color = '#ААА', width = 24, height = 24, ...rest } = props

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx={12} cy={12} r={12} fill="#4A1A92" />
      <Path
        d="M10.635 6.909c-1.185.73-1.97 1.97-2.29 3.317-.32 1.345-.113 3.214.617 4.398.73 1.185 1.92 2.076 3.265 2.396 1.345.32 3.047-.113 4.232-.844l.665-.488c.09-.055.313-.314.382-.381-.87-.275-2.326-.593-3.054-1.146-.728-.553-1.303-1.378-1.79-2.17-.489-.793-.715-1.511-.882-2.41-.167-.9.168-2.438.313-3.338-.09.031-.543.116-.632.171l-.826.495zm-.383-.576c.312-.192.643-.353.993-.482.35-.13.706-.22 1.068-.271a.685.685 0 01.364.052.59.59 0 01.36.496.624.624 0 01-.044.286 5.855 5.855 0 00-.332 2.692c.1.921.395 1.778.883 2.57a6.084 6.084 0 004.466 2.851.698.698 0 01.262.097.62.62 0 01.287.542.635.635 0 01-.11.344 5.584 5.584 0 01-1.613 1.51c-.738.455-1.52.743-2.343.863a6.35 6.35 0 01-2.4-.097 6.333 6.333 0 01-2.187-.992A6.104 6.104 0 018.2 14.969a6.125 6.125 0 01-.863-2.343 6.325 6.325 0 01.097-2.4 6.357 6.357 0 01.992-2.188 6.087 6.087 0 011.825-1.705z"
        fill="#FEF5FF"
      />
    </Svg>
  )
}

export default Icon
