import './TextField.css'

const TextField = (props) => {
    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input required= {props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField