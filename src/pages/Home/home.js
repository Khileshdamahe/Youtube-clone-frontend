import React from 'react'
import SideNavbar from '../../components/SideNavbar/sideNavbar'
import HomePage from '../../components/HomePage/homePage'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <SideNavbar />
            <HomePage />
        </div>
    )
}

export default Home