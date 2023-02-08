import React from 'react'
import Typewriter from 'typewriter-effect';


export default function TypeWriter() {


  return (
    <div>
    <Typewriter
  options={{
    strings: [
        'Développeur web', 
        'Développeur web <strong style="color:rgb(137, 147, 190)">PHP</strong>',
        'Développeur web <strong style="color:rgb(240, 219, 79)">Javascript</strong>', 
        'Développeur web <strong style="color:rgb(66, 184, 131)">Vue.js</strong>', 
        'Développeur web <strong style="color:rgb(97, 219, 251)">React</strong>', 
            ],
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 50,
    cursor: '|',
    cursorClassName: 'cursor',
    cursorAnimation: 'blink',
  }}
/>
  
</div>
  )
}
