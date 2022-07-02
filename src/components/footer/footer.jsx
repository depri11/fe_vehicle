import React from 'react'
import { Foot, Content, Logo } from '../styled/Footer'
import logo from '../header/logo.png'

const Footer = () => {
    return (
        <>
            <Foot>
                <Content>
                    {' '}
                    <div>
                        <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
                        <p>
                            <br />
                            Plan and book your perfect trip with expert advice, travel tips for vehicle information from us
                        </p>
                        <br />
                        <p>2022 Vicky Vehicle Rental Center. All rights reserved</p>
                    </div>
                    <ul>
                        Destinations
                        <li>Bali</li>
                        <li>Jogjakarta</li>
                        <li>Jakarta</li>
                        <li>Kalimantan</li>
                        <li>Malang</li>
                    </ul>
                    <ul>
                        Vehicle
                        <li>Bike</li>
                        <li>Cars</li>
                        <li>Motorbike</li>
                        <li>MReturn Times</li>
                        <li>FAQs</li>
                    </ul>
                    <ul>
                        Interest
                        <li>Adventure</li>
                        <li>Art and Culture</li>
                        <li>Wildlife and Nature</li>
                        <li>Family Holidays</li>
                        <li>Culinary Trip</li>
                    </ul>
                </Content>
                <hr />
                <Logo>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" />
                    </a>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                    </a>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
                    </a>
                    <a href="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                    </a>
                </Logo>
            </Foot>
        </>
    )
}

export default Footer
