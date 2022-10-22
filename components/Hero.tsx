import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi My Name is Anandu Mohan", "Developer", "Creator"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
      <div>
          <p>{ text }</p>

      </div>
  )
}

export default Hero