import React from 'react'
import SideNavbar from '../../components/SideNavbar/sideNavbar'
import HomePage from '../../components/HomePage/homePage'
import './home.css'

const Home = ({sideNavbar}) => {
    return (
        <div className='home'>
            <SideNavbar sideNavbar={sideNavbar} />
            <HomePage />
        </div>
    )
}

export default Home