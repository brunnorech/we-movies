import { useNavigate } from 'react-router-dom';

import { Container, MyCartContainer, MyCartLabel, MyItemsLabel, Title } from "./styles"

import MyCart from '../../assets/Cart.svg';
import useCart from '../../hooks/cart.context';

export const Header = () => {
    const navigate = useNavigate();

    const { getCountAllMoviesInCart } = useCart();


    return (
        <Container>
            <Title onClick={() => navigate('/')}>WeMovies</Title>

            <MyCartContainer onClick={() => navigate('cart')}>
                <div>
                    <MyCartLabel>Meu Carrinho</MyCartLabel>
                    <MyItemsLabel>
                        {getCountAllMoviesInCart() + `${getCountAllMoviesInCart() > 1 ? ' itens' : ' item'}`}
                    </MyItemsLabel>
                </div>
                <img src={MyCart} alt="my cart" />
            </MyCartContainer>
        </Container>
    )
}