import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    const whenDigit = (evento) =>{
        props.whenDigit(evento.target.value)

    }
    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={whenDigit} required= {props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField