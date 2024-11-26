import React from 'react'
import './CourseComp.css'
import courses1 from '../../assets/courses1.jpeg'
import courses2 from '../../assets/courses2.jpeg'
import { Link } from 'react-router-dom'

const CourseComp = () => {
    return (
        <>
            <div className='courseComp'>
                <div className="courseComp-left">
                    <img src={courses1} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>C programming</h1>
                    <p>Master the C programming language to develop problem-solving skills and create efficient software applications from scratch.</p>
                    <Link to='https://sites.google.com/view/sourcify-courses/home/c-programming-end-to-end-mr-dot?authuser=0' target='_blank'><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={courses2} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>JavaScript</h1>
                    <p>Learn JavaScript from scratch to advanced concepts, building interactive web applications.</p>
                    <Link to='https://sites.google.com/view/sourcify-courses/home/javascript?authuser=0' target='_blank'><button>Link</button></Link>
                </div>
            </div>
        </>
    )
}

export default CourseComp
