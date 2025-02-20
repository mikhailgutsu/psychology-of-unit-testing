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
    <Svg width={85} height={116} viewBox="0 0 85 116" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.156 60.653c.1-.182-.156.63-.238.764-.366.596-.757 1.423-1.142 2.023-1.006 1.564-1.372 3.506-2.546 4.96-3.183 3.946-2.624 10.787-1.97 13.759.28 1.274.52 4.064.878 5.327.624 2.201.057 2.356.866 4.495.515 1.363 5.784 12.144 5.784 12.144s2.618 5.496 4.854 8.017c.645.728 1.573 1.499 3.14 2.394 1.222.699 2.683 1.273 4.126 1.452.039.005 17.662-.022 17.662-.022S22.552 61.229 22.127 60.31"
        fill="url(#paint0_linear_50_2457)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.97 32.023l10.054.001c-.185.38-17.576 30.514-20.059 39.225-1.968 6.907-1.485 14.695 1.43 21.498 1.366 3.185 4.393 11.378 4.393 11.378l-14.7-25.69s-.695-11.954-.074-15.99c1.358-8.832 6.144-16.175 11.116-23.406 2.071-3.013 3.104-4.54 6.09-6.53.158-.106.754-.45 1.699-.48.016 0 .051-.007.051-.007z"
        fill="url(#paint1_radial_50_2457)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.971 32.023s-8.593-.07-9.484.034c-1.103.128-2.084.147-3.715 1.299-1.461 1.03-2.01 2.278-2.708 3.59-.499.937-10.162 18.82-10.702 19.799-.703 1.273-.752 2.799-.809 4.06-.05 1.108.751 4.192 1.69 5.84.786 1.38 2.688 4.67 2.688 4.67l5.124 8.812s-1.795-7.88-.152-12.982c2.614-8.114 18.068-35.122 18.068-35.122z"
        fill="url(#paint2_linear_50_2457)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.53 55.27c-.1.182.152-.63.234-.765.363-.598.75-1.427 1.133-2.029.998-1.569 1.354-3.512 2.522-4.972 3.165-3.96 2.574-10.798 1.905-13.767-.286-1.273-.539-4.062-.902-5.323-.634-2.198-.069-2.356-.887-4.49-.522-1.361-5.84-12.118-5.84-12.118s-2.645-5.483-4.892-7.994c-.65-.725-1.58-1.491-3.15-2.379C51.425.74 49.962.173 48.518 0c-.04-.005-17.662.104-17.662.104s31.274 54.592 31.703 55.51"
        fill="url(#paint3_linear_50_2457)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.849 83.928l-10.054.045c.183-.38 17.433-30.596 19.876-39.318 1.936-6.916 1.416-14.702-1.532-21.491-1.38-3.179-4.445-11.358-4.445-11.358l14.82 25.621s.75 11.951.149 15.99c-1.318 8.838-6.07 16.204-11.007 23.458-2.057 3.023-3.083 4.554-6.059 6.558-.158.107-.752.454-1.697.488a.61.61 0 00-.051.007z"
        fill="url(#paint4_radial_50_2457)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.848 83.926s8.594.03 9.484-.078c1.103-.133 2.084-.157 3.71-1.316 1.455-1.038 1.998-2.288 2.69-3.603.495-.939 10.074-18.867 10.61-19.849.696-1.275.739-2.802.79-4.063.043-1.108-.772-4.188-1.718-5.833-.793-1.376-2.71-4.657-2.71-4.657L74.54 35.74s1.831 7.87.212 12.98c-2.576 8.127-17.904 35.206-17.904 35.206z"
        fill="url(#paint5_linear_50_2457)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_50_2457"
          x1={15.1631}
          y1={65.0806}
          x2={42.32}
          y2={116.442}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#430058" />
          <Stop offset={1} stopColor="#E93ECB" />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_50_2457"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(77.291 -15.201 23.277) scale(48.3456)"
        >
          <Stop stopColor="#B111A7" />
          <Stop offset={1} stopColor="#DB2DD1" />
        </RadialGradient>
        <LinearGradient
          id="paint2_linear_50_2457"
          x1={4.05379}
          y1={69.7865}
          x2={23.2876}
          y2={32.1732}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C119B6" />
          <Stop offset={1} stopColor="#A50B9C" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_50_2457"
          x1={69.5014}
          y1={50.8099}
          x2={42.1047}
          y2={-0.423959}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3E017A" />
          <Stop offset={1} stopColor="#8F00FF" />
        </LinearGradient>
        <RadialGradient
          id="paint4_radial_50_2457"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-102.977 69.96 12.013) scale(48.3456)"
        >
          <Stop stopColor="#C134FD" />
          <Stop offset={1} stopColor="#D025FF" />
        </RadialGradient>
        <LinearGradient
          id="paint5_linear_50_2457"
          x1={80.5886}
          y1={46.0519}
          x2={61.5308}
          y2={83.7546}
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
