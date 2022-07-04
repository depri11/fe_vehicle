import * as React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '../styled/Card'

function Cards(props) {
    return (
        <Card key={props.id} bg={props.img} backdrop={props.backdrop}>
            <div>
                <Link to={`vehicle/${props.id}`} className="LinkStyle">
                    <h4>{props.title}</h4>
                </Link>

                <p>{props.city}</p>
            </div>
        </Card>
    )
}

export default Cards
