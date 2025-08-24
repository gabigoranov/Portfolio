import { useState } from 'react'
import '../assets/styles/hero.css'
import { FiMapPin } from "react-icons/fi";

export default function Hero() {
    return (
        <section className='hero'>
            <div className="hero__text">
                <h1 className='hero__title'>Gabriel Goranov</h1>
                <h3 className="hero__desc">Full Stack Developer</h3>
                <p className='hero__location'><FiMapPin /> Bulgaria, Montana</p>
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