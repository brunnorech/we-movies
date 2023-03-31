import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import useCart from '../../hooks/cart.context';
import { IMovie } from '../../types';

import { Container, Count, CountView } from "./styles"


export const UpdateQuantity = ({ item }: { item: IMovie }) => {

    const { updateCart } = useCart()

    return (
        <Container>
            <div onClick={() => updateCart(item, 'minus')} style={{ cursor: 'pointer' }}>
                <img src={Minus} alt='diminuir' />
            </div>
            <CountView>
                <Count>{item.count || 0}</Count>
            </CountView>
            <div onClick={() => updateCart(item, 'plus')} style={{ cursor: 'pointer' }}>
                <img src={Plus} alt='aumentar' />
            </div>
        </Container>
    )
}