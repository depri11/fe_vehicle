import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './detail.module.css'
import axios from 'axios'
import withAuth from '../../helpers/withAuth'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Button from '../../components/button/button'

function Details() {
    const [data, setData] = useState({})
    const [num, setNum] = useState(0)
    const params = useParams()

    function incrementCount() {
        setNum(num + 1)
    }

    function decrementCount() {
        if (num == 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }

    useEffect(() => {
        axios
            .get(`https://rentalvehicle.herokuapp.com/vehicle/${params.id}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log('🚀 ~ file: detail.jsx ~ line 16 ~ axios.get ~ err', err)
            })
    }, [])

    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.heading}>
                    <h2>Detail</h2>

                    <div className={style.content} id={style.detail}>
                        <div className={style.leftside}>
                            {data.images ? (
                                data.images.map((e) => {
                                    return <img src={e.url} key={e.id} alt="" className={style.image} />
                                })
                            ) : (
                                <p>Loading...</p>
                            )}
                            <div className={style.containersub}>
                                <div className={style.images}>
                                    {/* <img src={data.imgaes.path} alt={data.name} className={style.imagebelow} />
                                <img src={data.imgaes.path} alt={data.name} className={style.imagebelow} /> */}
                                </div>
                            </div>
                        </div>

                        <div className={style.rightside}>
                            <div className={style.pst}>
                                <h4>{data.name}</h4>
                                <h5>{data.city}</h5>
                                <p>
                                    <br />
                                    Available <br /> No repayment
                                </p>

                                <p>
                                    Capacity: 1 person <br /> Type: {data.type} <br /> Reservation befor: {data.type} <br /> <br />
                                </p>
                            </div>

                            <p className={style.price}>{data.price}/day</p>

                            <div className={style.counters}>
                                <div className={style.counter}>
                                    <Button onClick={incrementCount} val="+" clrbg="#FFCD61" clrfnt="#393939" wdth="100px" size="40px" />
                                    <p>{num}</p>
                                    <Button onClick={decrementCount} val="-" clrbg="#CBCBD433" clrfnt="#393939" wdth="100px" size="40px" />
                                </div>
                            </div>
                        </div>

                        <div className={style.newdiv}>
                            <Button val="Chat admin" clrbg="#393939" clrfnt="#FFCD61" wdth="421px" />
                            <Button val="Reservation" clrbg="#FFCD61" clrfnt="#393939 " wdth="410px" />
                            <Button val="Like" clrbg="#393939" clrfnt="#FFCD61" wdth="225px" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default withAuth(Details)
