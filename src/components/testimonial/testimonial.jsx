import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../styled/Card'

export function Cardtesti(props) {
    // const navigasi = useNavigate()

    // const goto = () => {
    //     navigasi('/detail')
    // }
    return (
        <>
            {' '}
            <Card key={props.id} bg={props.image} backdrop={props.backdrop}>
                <div onclick="location.href='#'">
                    <Link to={`detail/${props.id}`} className="LinkStyle">
                        <h4>{props.title}</h4>
                    </Link>
                    <p>{props.city}</p>
                </div>
            </Card>
        </>
    )
}

export default Cardtesti
