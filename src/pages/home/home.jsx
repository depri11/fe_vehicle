import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUsers } from '../../store/reducer/users'
import style from './home.module.css'
import Header from '../../components/header/header'
import Intro from '../../components/intro/intro'
import Cards from '../../components/card/card'
import Testimonials from '../../components/testimonial/testimonial'
import Footer from '../../components/footer/footer'
import useApi from '../../helpers/useApi'

function Home() {
    const [prod, setProd] = useState([])
    const { isAuth } = useSelector((state) => state.users)

    const api = useApi()
    const dispatch = useDispatch()

    const getDataProd = async () => {
        api.requests({
            method: 'GET',
            url: '/vehicle/popular',
        })
            .then((res) => {
                const { data } = res.data
                setProd(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getUser = async () => {
        api.requests({
            method: 'GET',
            url: '/users/',
        })
            .then((res) => {
                const { data } = res.data
                dispatch(addUsers(data[0]))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // didmount
    useEffect(() => {
        getDataProd()
        if (isAuth) {
            getUser()
        }
    }, [])

    return (
        <>
            <Header home="bold" />
            <Intro />
            <div className={style.container}>
                <div className="sub">
                    <h2>popular in towns</h2>
                    <a href="/vehicles">view all {'>'} </a>
                </div>
                <div className="content">
                    {prod.map((v) => {
                        return <Cards key={v.id} id={v.id} title={v.name} img={v.images[0].url} city={v.city} />
                    })}
                </div>

                <div className={style.sub}>
                    <h2>testimonials</h2>
                </div>

                <div className="testimoni">
                    <div>
                        "it was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!"
                        <span className="name">
                            <br />
                            <br /> Edward Newgate
                        </span>
                        <br /> Founder Circle
                    </div>
                    <Testimonials backdrop="https://image-cdn.medkomtek.com/7-YiOOMfNTvAw1jL9kPkR_5Z13g=/640x640/smart/klikdokter-media-buckets/medias/2322183/original/060186900_1608309815-Bertemu-Orang-yang-Tidak-Pakai-Masker-saat-Liburan.jpg" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
