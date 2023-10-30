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

    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados do colaborador:</h2>
                <TextField label="Nome" placeholder="Digite seu nome"></TextField>
                <TextField label="Cargo" placeholder="Digite o seu cargo"></TextField>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"></TextField>
                <DropList label= "Time"itens={teams}></DropList>
                <Button>Criar Card</Button>
            </form>
            
        </section>
    )
}
export default Form