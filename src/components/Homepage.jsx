import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Body from './Body'
import { gloabldata } from '../contextApi/context'

const Homepage = () => {

    const {querry,setListofingridients}=useContext(gloabldata)
    const APP_ID = "4e53fd09"
    const APP_KEY = "f4b756472536d50d398c4b7bcf7dbc45"

    const getDataItems = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await res.json();
        setListofingridients(data)
    }

    useEffect(()=>{
        getDataItems()
    },[querry])

    return (
        <>
            <div className="homapageContainer">

                <div className="navbarsection flexDivRow">
                    <Navbar />
                </div>
                <div className="bodysection">
                    <Body />
                </div>

            </div>
        </>
    )
}

export default Homepage
