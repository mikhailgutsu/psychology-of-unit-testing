import * as React from 'react'
import Svg, {
  Defs,
  LinearGradient,
  Path,
  RadialGradient,
  Stop,
  type SvgProps,
} from 'react-native-svg'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={27} height={37} viewBox="0 0 27 37" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.98 19.415c.031-.057-.051.2-.078.243-.118.19-.244.453-.369.643-.325.497-.443 1.114-.822 1.577-1.028 1.253-.848 3.427-.636 4.372.09.404.168 1.291.283 1.692.202.7.019.75.28 1.429.166.433 1.868 3.859 1.868 3.859s.846 1.747 1.568 2.548c.209.231.509.476 1.015.76.395.223.866.405 1.332.462.013.001 5.706-.007 5.706-.007S7.107 19.598 6.97 19.306"
        fill="url(#paint0_linear_14_1202)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.857 10.317h3.248c-.06.121-5.678 9.698-6.48 12.466-.636 2.195-.48 4.67.463 6.831.44 1.013 1.418 3.616 1.418 3.616l-4.748-8.163s-.225-3.8-.024-5.082c.439-2.806 1.985-5.14 3.59-7.438.67-.958 1.003-1.443 1.968-2.075a1.09 1.09 0 01.549-.153l.016-.002z"
        fill="url(#paint1_radial_14_1202)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.858 10.317s-2.776-.022-3.064.011c-.356.04-.673.047-1.2.413-.472.327-.65.724-.875 1.14-.161.299-3.283 5.982-3.457 6.293-.227.404-.243.889-.261 1.29-.016.352.242 1.332.546 1.856.254.438.868 1.484.868 1.484l1.655 2.8s-.58-2.504-.049-4.126c.844-2.578 5.837-11.16 5.837-11.16z"
        fill="url(#paint2_linear_14_1202)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.021 17.564c-.032.058.05-.2.076-.243.117-.19.242-.454.366-.645.322-.498.438-1.116.815-1.58 1.022-1.258.831-3.431.615-4.375-.092-.405-.174-1.29-.291-1.691-.205-.699-.023-.75-.287-1.427-.168-.433-1.887-3.851-1.887-3.851s-.854-1.743-1.58-2.54c-.21-.231-.51-.474-1.017-.757-.397-.22-.87-.4-1.336-.455C15.483 0 9.79.033 9.79.033s10.103 17.349 10.241 17.64"
        fill="url(#paint3_linear_14_1202)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.186 26.67l-3.247.015c.059-.12 5.631-9.723 6.42-12.494.626-2.198.458-4.672-.495-6.83-.445-1.01-1.436-3.609-1.436-3.609l4.788 8.142s.242 3.798.048 5.081c-.426 2.809-1.96 5.15-3.555 7.455-.665.96-.996 1.447-1.958 2.084a1.09 1.09 0 01-.548.155l-.017.002z"
        fill="url(#paint4_radial_14_1202)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.186 26.67s2.776.01 3.064-.024c.356-.043.673-.05 1.198-.419.47-.33.646-.727.87-1.145.159-.298 3.253-5.995 3.426-6.307.225-.406.24-.89.255-1.292.015-.352-.249-1.33-.554-1.853-.256-.438-.876-1.48-.876-1.48l-1.668-2.793s.592 2.502.069 4.126c-.832 2.582-5.784 11.187-5.784 11.187z"
        fill="url(#paint5_linear_14_1202)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_14_1202"
          x1={4.72025}
          y1={20.8224}
          x2={13.2702}
          y2={37.26}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#430058" />
          <Stop offset={1} stopColor="#E93ECB" />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_14_1202"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.43584 14.987 -15.21021 3.48701 3.327 10.623)"
        >
          <Stop stopColor="#B111A7" />
          <Stop offset={1} stopColor="#DB2DD1" />
        </RadialGradient>
        <LinearGradient
          id="paint2_linear_14_1202"
          x1={1.13152}
          y1={22.3179}
          x2={7.18477}
          y2={10.2846}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C119B6" />
          <Stop offset={1} stopColor="#A50B9C" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_14_1202"
          x1={22.2735}
          y1={16.1466}
          x2={13.647}
          y2={-0.252322}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3E017A" />
          <Stop offset={1} stopColor="#8F00FF" />
        </LinearGradient>
        <RadialGradient
          id="paint4_radial_14_1202"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-3.50701 -14.97102 15.19301 -3.55901 23.715 26.34)"
        >
          <Stop stopColor="#C134FD" />
          <Stop offset={1} stopColor="#D025FF" />
        </RadialGradient>
        <LinearGradient
          id="paint5_linear_14_1202"
          x1={25.8551}
          y1={14.6345}
          x2={19.8579}
          y2={26.695}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B02BFD" />
          <Stop offset={1} stopColor="#AF34F8" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Icon
