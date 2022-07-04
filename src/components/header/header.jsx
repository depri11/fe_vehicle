import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from '../styled/Link'
import { Dropdown } from 'react-bootstrap'
import style from './header.module.css'
import logo from './logo.png'

function Header(props) {
    const { isAuth, data } = useSelector((state) => state.users)

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
                            {isAuth ? (
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {data.fullname}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <>
                                    <Button href="/login" variant="" className={style.login}>
                                        Login
                                    </Button>
                                    <Button href="/register" variant="warning" className={style.register}>
                                        Register
                                    </Button>
                                </>
                            )}
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
