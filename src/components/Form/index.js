import Button from '../Button'
import DropList from '../DropList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {
    
    const teams = [
        'Programação',
        'Front-End',
        'Back-end',
        'Data-Science',
        'Mobile',
        'Design',
        'Inovação e gestão'
    ]
    const onSave = (event) => {
        event.preventDefault()
        console.log('Form foi submetido')
    }
    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados do colaborador:</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"></TextField>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"></TextField>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"></TextField>
                <DropList label= "Time"itens={teams}></DropList>
                <Button>Criar Card</Button>
            </form>
            
        </section>
    )
}
export default Form