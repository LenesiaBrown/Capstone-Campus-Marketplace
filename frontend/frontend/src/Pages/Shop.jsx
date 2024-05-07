import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Popular from "../Components/Popular/Popular"
import Promotions from './Promotions'
import NewsLetter from "../Components/NewsLetter/NewsLetter"
import Footer from "../Components/Footer/Footer"

const Shop = () => {
    return (
        <div className='home'>
            <Promotions/>
            <br></br><br></br><br></br><br></br><br></br>
            <Popular/>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <NewsLetter/>
        </div>
    )
} 

export default Shop