import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../login/login.module.css'
import { Button } from '../../components/styled/Login'
import { Logins } from '../../components/styled/Login'
import Footer from '../../components/footer/footer'
import useApi from '../../helpers/useApi'

function Register() {
    const [Users, setUsers] = useState({ fullname: 'fullname', email: 'email', password: 'password' })

    const api = useApi()
    const navigate = useNavigate()

    const onChangeInput = (event) => {
        event.preventDefault()
        const data = { ...Users }
        data[event.target.name] = event.target.value
        setUsers(data)
    }

    const daftar = () => {
        api.requests({
            method: 'POST',
            url: '/users/',
            data: Users,
        })
            .then((res) => {
                console.log(res)
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
                        <Button onClick={() => navigate('/login')} clrbg="#393939" clrfnt="#FFCD61" wdth="400px" size="20px">
                            Login
                        </Button>
                    </div>
                    <style type="text/css">
                        {`
                        .form-login {
                        margin-left: 15%;
                        }
                    `}
                    </style>
                    <div className="form-login">
                        <input onChange={onChangeInput} name="fullname" type="fullname" className="mb-4" placeholder="Fullname" />
                        <input onChange={onChangeInput} name="email" type="email" className="mb-4" placeholder="Enter email" />
                        <input onChange={onChangeInput} name="password" type="password" placeholder="Password" />
                        <Button
                            onClick={daftar}
                            className="mt-4 mb-4"
                            clrbg="#FFCD61;"
                            clrfnt="
#393939"
                            wdth="100%"
                            size="20px"
                        >
                            Sign Up
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

export default Register
