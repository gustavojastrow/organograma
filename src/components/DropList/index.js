import './DropList.css'

const DropList = (props) => {
    return(
        <div className='drop-list'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item=> {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropList