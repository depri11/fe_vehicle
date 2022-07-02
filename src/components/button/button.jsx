import React from 'react'
import { Btn } from '../styled/Button'

const Button = (props) => {
    return (
        <>
            <Btn clrbg={props.clrbg} clrfnt={props.clrfnt} wdth={props.wdth} size={props.size} onClick={props.onClick}>
                {props.val}
            </Btn>
        </>
    )
}

export default Button
