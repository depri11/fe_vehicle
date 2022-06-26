import React, { useState, useEffect } from 'react'
import style from './home.module.css'
import axios from 'axios'
import Header from '../../components/header/header'
import Cards from '../../components/card/card'

function Home() {
    const [prod, setProd] = useState([])

    const getDataProd = async () => {
        try {
            const response = await axios.get('https://rentalvehicle.herokuapp.com/vehicle/')
            setProd(response.data.data)
        } catch (error) {
            console.log('🚀 ~ file: home.jsx ~ line 14 ~ getDataProd ~ error', error)
        }
    }

    useEffect(() => {
        getDataProd()
    }, [])

    return (
        <>
            <div className="container">
                <Header />
                <div className={style.content}>
                    {prod.map((v) => {
                        return <Cards id={v.id} title={v.name} img={v.images.path} price={v.price} likes={v.likes} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
