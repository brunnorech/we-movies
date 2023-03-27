import { useNavigate } from 'react-router-dom';
import Empty from '../../assets/Empty.svg';
import { CartItem } from '../../components';
import { Button } from '../../components/Button';
import useCart from '../../hooks/cart.context';
import { useWindowSize } from '../../hooks/useWindowSize';
import { formatPrice } from '../../utils';

import { Border, CartFooter, ColumnTitle, Container, ContainerItems, ContainerRows, Content, TotalLabel, TotalPrice } from "./styles";

type ItemProps = {
  id: number,
  title: string,
  price: number,
  image: string,
  count?: number;
};

const EmptyCart = ({ handleBackToHome }: { handleBackToHome: () => void }) => {

  return (
    <Container>
      <Content>
        <h1>Parece que não há nada por aqui :(</h1>
        <div>
          <img src={Empty} alt="Carrinho Vazio" />
        </div>
        <Border />
        <Button width="180px" label='VOLTAR' onClick={handleBackToHome} />
      </Content>
    </Container>
  )
};

const Cart = () => {
  const navigate = useNavigate();
  const { cart, getTotalCartValue, handleFinish } = useCart();
  const { width } = useWindowSize();

  const windowWidth = width || window.innerWidth;

  const cartItems = cart.items || [];

  const handleCheckout = () => {
    handleFinish()
    navigate('/finish')
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <ContainerRows>
        <ContainerItems>
          <ColumnTitle>PRODUTO</ColumnTitle>
          <ColumnTitle>QTD</ColumnTitle>
          <ColumnTitle>SUBTOTAL</ColumnTitle>
          <ColumnTitle></ColumnTitle>
          {cartItems.map((item: ItemProps) => (
            <CartItem data={item} key={item.id} />
          ))}

        
        </ContainerItems>
        <CartFooter>
            <Button width={windowWidth <= 600 ? "100%" : "235px"} label="FINALIZAR PEDIDO" onClick={handleCheckout}/>
            <div>
              <TotalLabel>TOTAL</TotalLabel>
              <TotalPrice>{formatPrice(getTotalCartValue())}</TotalPrice>
            </div>
          </CartFooter>
        </ContainerRows>
      ) : <EmptyCart handleBackToHome={() => navigate('/')} />}
    </>
  )
};

export default Cart;