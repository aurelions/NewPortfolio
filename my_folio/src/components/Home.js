import React from 'react';
import '../styles/home.scss'
import Image from 'react-bootstrap/Image'

export default function Home(){
    return (
    <div className='home_content'>
        <section className='home_img'>
             <Image fluid/>
        </section>
        <section className='bio'>
        <span>Hello, my name is Conary,
            I am a Full-Stack Web Developer.
            What can we create together?
        </span><br/>
        </section>
     </div>
        
        
        
        )
}