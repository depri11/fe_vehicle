import React, { useState, useEffect } from 'react'
import style from './vehicles.module.css'
import Button from '../../components/button/button'
import Header from '../../components/header/header'
import Cards from '../../components/card/card'
import Footer from '../../components/footer/footer'
import useApi from '../../helpers/useApi'

function Home() {
    const [prodPopular, setProdPopular] = useState([])
    const [prodBike, setProdBike] = useState([])
    const [prodCar, setProdCar] = useState([])
    const [search, setSearch] = useState('')

    const api = useApi()

    const getPopular = async () => {
        api.requests({
            method: 'GET',
            url: '/vehicle/popular',
        })
            .then((res) => {
                const { data } = res.data
                setProdPopular(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getBike = async () => {
        api.requests({
            method: 'GET',
            url: '/vehicle/type/bike',
        })
            .then((res) => {
                const { data } = res.data
                setProdBike(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getCar = async () => {
        api.requests({
            method: 'GET',
            url: '/vehicle/type/car',
        })
            .then((res) => {
                const { data } = res.data
                setProdCar(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getSearch = async () => {
        api.requests({
            method: 'GET',
            url: `/vehicle/all?search=${search}`,
        })
            .then((res) => {
                const { data } = res.data
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = { ...search }
        data[event.target.name] = event.target.value
        setSearch(data)
    }

    useEffect(() => {
        getPopular()
        getBike()
        getCar()
    }, [])

    return (
        <>
            <script>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </script>
            <Header vehicle="bold" />
            <div className={style.container}>
                <div className={style.search}>
                    <input onChange={onChangeInput} name="search" className={style.input} placeholder="Search vehicle (ex: cars, cars name)" />
                    <span onClick={getSearch} className={style.ico}>
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <div className={style.popular}>
                    <div className="sub">
                        <h2>popular in towns</h2>
                        <a href="/vehicles">view all {'>'} </a>
                    </div>
                    <div className="content">
                        {prodPopular.map((v) => {
                            return <Cards key={v.id} id={v.id} title={v.name} img={v.images[0].url} city={v.city} />
                        })}
                    </div>
                </div>
                <div className={style.cars}>
                    <div className="sub">
                        <h2>Cars</h2>
                        <a href="/vehicles">view all {'>'} </a>
                    </div>
                    <div className="content">
                        {prodCar.map((v) => {
                            return <Cards key={v.id} id={v.id} title={v.name} img={v.images[0].url} city={v.city} />
                        })}
                    </div>
                </div>
                <div className={style.bike}>
                    <div className="sub">
                        <h2>Bikes</h2>
                        <a href="/vehicles">view all {'>'} </a>
                    </div>
                    <div className="content">
                        {prodBike.map((v) => {
                            return <Cards key={v.id} id={v.id} title={v.name} img={v.images[0].url} city={v.city} />
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
