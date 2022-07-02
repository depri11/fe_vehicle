import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Card } from '../styled/Card'

function Cards(props) {
    // const navigasi = useNavigate()

    // const goto = () => {
    //     navigasi('/detail')
    // }
    return (
        <Card key={props.id} bg={props.img} backdrop={props.backdrop}>
            <div onclick="location.href='#'">
                <Link to={`vehicle/${props.id}`} className="LinkStyle">
                    <h4>{props.title}</h4>
                </Link>

                <p>{props.city}</p>
            </div>
        </Card>
    )
}

export default Cards
