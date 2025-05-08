import React, { useEffect, useState } from 'react'
import { useTrail, animated } from '@react-spring/web'

const SplitText = ({ text, className, delay, animationFrom, animationTo, easing, threshold, rootMargin, onLetterAnimationComplete }) => {
  const [show, setShow] = useState(false)

  const trail = useTrail(text.length, {
    from: animationFrom || { opacity: 0, y: 20 },
    to: { opacity: show ? 1 : 0, y: show ? 0 : 20 },
    config: { tension: 200, friction: 20 },
    delay: delay || 0,
    easing: easing || 'easeOutCubic',
  })

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    if (onLetterAnimationComplete) {
      onLetterAnimationComplete()
    }
  }, [show, onLetterAnimationComplete])

  return (
    <h1 className={className}>
      {trail.map((style, index) => (
        <animated.span key={index} style={style}>
          {text[index] === ' ' ? '\u00A0' : text[index]}
        </animated.span>
      ))}
    </h1>
  )
}

export default SplitText
