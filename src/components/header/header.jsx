import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import style from './header.module.css'
import logo from './logo.png'

function Header(props) {
    const { isAuth, data } = useSelector((state) => state.users)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <Navbar className={style.nav}>
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Nav>
                        <div className={style.navmain}>
                            <Link bold={props.home} to="/">
                                Home
                            </Link>
                            <Link bold={props.vehicle} to="/vehicles">
                                Vehicle Type
                            </Link>
                            <Link to="#">History</Link>
                            <Link to="#">About</Link>
                        </div>

                        <div className={style.content}>
                            {isAuth ? (
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {data.fullname}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
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
