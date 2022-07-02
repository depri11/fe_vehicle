import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from '../styled/Link'
import style from './header.module.css'
import logo from './logo.png'

function Header(props) {
    return (
        <>
            <Navbar className={style.nav}>
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav>
                        <div className={style.navmain}>
                            <Link bold={props.home} href="/">
                                Home
                            </Link>
                            <Link bold={props.vehicle} href="/vehicles">
                                Vehicle Type
                            </Link>
                            <Link href="#">History</Link>
                            <Link href="#">About</Link>
                        </div>

                        <div className={style.content}>
                            <Button href="/login" variant="" className={style.login}>
                                Login
                            </Button>
                            <Button href="/register" variant="warning" className={style.register}>
                                Register
                            </Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
