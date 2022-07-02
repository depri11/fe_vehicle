import React from 'react'
import { Container } from 'react-bootstrap'
import { Intros, Flex, Button } from '../styled/Intro'

function Intro() {
    return (
        <>
            <Intros>
                <Container>
                    <h1>Explore and Travel</h1>
                    <p>Vehicle Finder</p>
                    <div class="border-ut"></div>
                    <Flex>
                        <select name="cars" id="cars">
                            <option value="" selected disabled hidden>
                                Location
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" id="cars">
                            <option value="" selected disabled hidden>
                                Type
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </Flex>
                    <Flex>
                        <select name="cars" id="cars">
                            <option value="" selected disabled hidden>
                                Payment
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" id="cars">
                            <option value="" selected disabled hidden>
                                Date
                            </option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </Flex>
                    <Button>explore</Button>
                </Container>
            </Intros>
        </>
    )
}

export default Intro
