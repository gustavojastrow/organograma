import './DropList.css'

const DropList = (props) => {
    return(
        <div className='drop-list'>
            <label>{props.label}</label>
            <select onChange={evento => props.whenDigit(evento.target.value)}required={props.required} value={props.value}>
                {props.itens.map(item=> {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropList