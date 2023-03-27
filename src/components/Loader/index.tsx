import Loading from '../../assets/Loader.png'
import { Container } from './styles'

export const Loader = () => {
    return (
        <Container>
            <img src={Loading} alt="Carregando..."/>
        </Container>
    )
}