import React from 'react'
import { Container } from 'react-bootstrap'
import { Logins } from '../styled/Login'
import Button from '../../components/button/button'

function Login() {
    return (
        <>
            <Logins>
                <Container>
                    <h1>Let's Explore The World</h1>
                    <p>Don't have account?</p>
                    <Button val="Sign Up" clrbg="#393939" clrfnt="#FFCD61" wdth="400px" size="25px" />
                </Container>
            </Logins>
        </>
    )
}

export default Login
