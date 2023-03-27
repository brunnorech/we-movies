import Plus from '../../assets/Plus.svg';
import Minus from '../../assets/Minus.svg';
import useCart from '../../hooks/cart.context';

import { Container, Count, CountView } from "./styles"

type IProps = {
    id: number,
    title: string,
    price: number,
    image: string,
    count?: number;
};


export const ChangeQtd = ({ item }: { item: IProps }) => {

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