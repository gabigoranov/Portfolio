import { useState } from 'react'
import '../assets/styles/hero.css'

export default function Hero() {
    return (
        <section className='hero'>
            <div className="hero__text">
                <h1 className='hero__title'>Gabriel Goranov</h1>
                <h2 className="hero__desc">- Full-Stack Developer</h2>
            </div>
            <div className="hero__cta">
                <a href=''>View Projects</a>
                <a href=''>Contact Me</a>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
            </div>

        </section>
    )
}