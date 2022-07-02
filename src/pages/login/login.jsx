import * as React from 'react'
import style from './login.module.css'
// import Button from '../../components/button/button'
import { Button } from '../../components/styled/Login'
import { Logins } from '../../components/styled/Login'
import Footer from '../../components/footer/footer'
// import Logins from '../../components/login/login'

function Login() {
    return (
        <>
            <Logins>
                <div className={style.container}>
                    <div className={style.display}>
                        <h1>Let's Explore The World</h1>
                        <p>Don't have account?</p>
                        <Button clrbg="#393939" clrfnt="#FFCD61" wdth="400px" size="20px">
                            Sign Up
                        </Button>
                    </div>
                    <div className={style.form}>
                        <input type="email" className="mb-4" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <input type="password" id="password" placeholder="Password" />
                        <a href="#reset">Forgot Password?</a>
                        <Button
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
