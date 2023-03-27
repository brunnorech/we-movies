import { Container, Price, Title } from "./styles";

import { formatPrice } from "../../utils";
import { Button } from "../Button";
import { CartButton } from "../CartButton";
import useCart from "../../hooks/cart.context";

interface IProps {
    id: number;
    title: string;
    price: number;
    image: string;
};

export const Card = (item: IProps) => {

    const { updateCart, addedItemVerify, getCountMovieInCart } = useCart();

    const wasAdded = addedItemVerify(item.id);
    const countItems = getCountMovieInCart (item.id);

    return (
        <Container>
            <img src={item.image} />
            <Title>{item.title}</Title>
            <Price>{formatPrice(item.price)}</Price>
            <Button label={wasAdded ? `${countItems > 1 ? 'ITENS ADICIONADOS' : 'ITEM ADICIONADO'}` : "ADICIONAR AO CARRINHO"} onClick={() => updateCart(item)} added={wasAdded} component={() => <CartButton counter={countItems} />}/>
        </Container>
    )
};