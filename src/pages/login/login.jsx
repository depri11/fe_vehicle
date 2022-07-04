import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/styled/Login'
import { Logins } from '../../components/styled/Login'
import { login } from '../../store/reducer/users'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/footer'
import useApi from '../../helpers/useApi'
import style from './login.module.css'

function Login() {
    const [Users, setUsers] = useState({ email: 'email', password: 'password' })

    const { isAuth } = useSelector((state) => state.users)

    const api = useApi()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const goLogin = () => {
        api.requests({
            method: 'post',
            url: '/auth/',
            data: Users,
        })
            .then((res) => {
                const { data } = res.data
                dispatch(login(data.token))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Logins>
                <div className={style.container}>
                    <div className={style.display}>
                        <h1>Let's Explore The World</h1>
                        <p>Don't have account?</p>
                        <Button
                            onClick={() => {
                                navigate('/register')
                            }}
                            clrbg="#393939"
                            clrfnt="#FFCD61"
                            wdth="400px"
                            size="20px"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className={style.form}>
                        <input onChange={onChangeInput} name="email" type="email" className="mb-4" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input onChange={onChangeInput} name="password" type="password" placeholder="Password" />
                        <a href="#reset">Forgot Password?</a>
                        <Button
                            onClick={goLogin}
                            className="mt-4 mb-4"
                            clrbg="#FFCD61;"
                            clrfnt="
#393939"
                            wdth="100%"
                            size="20px"
                        >
                            Login
                        </Button>
                        <Button clrbg="white" clrfnt="#393939" wdth="100%" size="20px">
                            <img className="mr-2" src="https://www.ekrut.com/static/media/google.e69220d9.svg" width="18" alt="login google" />
                            Login With Google
                        </Button>
                    </div>
                </div>
                <Footer />
            </Logins>
        </>
    )
}

export default Login
