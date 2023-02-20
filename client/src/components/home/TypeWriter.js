import React from 'react'
import Typewriter from 'typewriter-effect';


export default function TypeWriter() {

  return (
    <div className='typewriter'>
    <Typewriter
  options={{
    strings: [
        'Développeur web', 
        'Développeur <strong style="color:rgb(240, 219, 79)">Javascript</strong>', 
        'Développeur <strong style="color:rgb(66, 184, 131)">Vue.js</strong>', 
        'Développeur <strong style="color:rgb(97, 219, 251)">React</strong>', 
        'Développeur <strong style="color:rgb(137, 147, 190)">PHP</strong>',
        'Développeur <strong style="color:rgb(68, 65, 64)">Wordpress</strong>', 
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
