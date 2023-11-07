import { useState } from 'react'
import Button from '../Button'
import DropList from '../DropList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const teams = [
        'Programação',
        'Front-End',
        'Back-end',
        'Data-Science',
        'Mobile',
        'Design',
        'Inovação e gestão'
    ]
    const onSave = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados do colaborador:</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    whenDigit={valor => setNome(valor)}>
                    </TextField>
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    whenDigit={valor => setCargo(valor)}>
                    </TextField>
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    whenDigit={valor => setImagem(valor)}></TextField>
                <DropList 
                    obrigatorio={true}
                    label= "Time"
                    itens={teams}
                    valor={time}
                    whenDigit={valor => setTime(valor)}></DropList>
                <Button>Criar Card</Button>
            </form>
            
        </section>
    )
}
export default Form