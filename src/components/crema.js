import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { css } from '@emotion/core';
import Logo from '../../images/crema.png'
// import './styles.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: '#F2A74B', width: '100vw', height: '100vh' }}>{Logo} </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#D9863D', width: '100vw', height: '100vh' }}>{Logo} </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: '#D96D55', width: '100vw', height: '100vh' }}>{Logo} </animated.div>,
]

export default function Crema() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div css={css`
			div {
				margin: 0 auto;
  			cursor: pointer;
				text-align: center;
				position: relative;
  			width: 75%;
  			height: 50%;
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			color: white;
  			font-weight: 800;
  			font-size: 25em;
  			will-change: transform, opacity;
  			text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
}
		`} onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}