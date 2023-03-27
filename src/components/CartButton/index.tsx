
import AddMovie from '../../assets/AddMovie.svg'
import { Container } from './styles'

export const CartButton = ({ counter }: { counter: number }) => {

    return (
        <Container>
            <img src={AddMovie} alt="adicionar filme" />
            <span>{counter}</span>
        </Container>
    )
}