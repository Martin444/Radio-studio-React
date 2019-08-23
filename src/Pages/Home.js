import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Index from '../Views/index'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <Footer/>
                <Index/>
        </div>
    )
}
