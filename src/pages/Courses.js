import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CourseComp from '../components/courseComp/CourseComp'
import Layout from './Layout';

const Courses = () => {
    return (
        <Layout backgroundColor="white">
            <Navbar />
            <CourseComp />
        </Layout>
    )
}

export default Courses
