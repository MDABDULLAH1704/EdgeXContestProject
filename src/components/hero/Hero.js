import React, { useEffect } from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTypewriter } from 'react-simple-typewriter'

const hero = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    // Type Writer
    const [text] = useTypewriter({
        words: ['Learn', 'Grow', 'Develop', 'Think', 'Build', 'Innovate', 'Eat', 'Sleep', 'Code', 'Repeat'],
        loop: 100,
        typeSpeed: 150,
        deleteSpeed: 50,
        delaySpeed: 800
    })

    return (
        <div className='hero'>
            <div className="heroLeft">
                <h1 data-aos="flip-up" data-aos-delay="200">Welcome to AzionXSourcify - <span>{text}</span></h1>
                <p data-aos="fade" data-aos-delay="400" ><b>Azion</b> is a cloud services company that provides edge computing, content delivery, and security solutions. It helps businesses speed up websites, improve performance, and protect data globally. <b>Sourcify</b> in the e-learning space is a platform that provides online courses and various other educational services.</p>
                <Link to='/shop'><button className='btn1' data-aos="fade" data-aos-delay="600">Start Shopping</button></Link>
                <br />
                <Link to='/courses'><button className='btn2' data-aos="fade" data-aos-delay="600">Start Learning</button></Link>
            </div>

            <div className="heroRight">
                <img src={heroImg} alt="image" height='250' width='350' data-aos="zoom-in" data-aos-delay="800" />
            </div>
        </div>
    )
}

export default hero
