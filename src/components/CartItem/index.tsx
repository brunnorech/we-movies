
import Trash from '../../assets/Trash.svg'
import useCart from '../../hooks/cart.context';
import { useWindowSize } from '../../hooks/useWindowSize';
import { formatPrice } from '../../utils';
import { ChangeQtd } from '../ChangeQtd';
import { ContainerData, ContainerMobile, ContainerMobileImage, ContainerMobileItemData, ContainerMobileTitle, ContainerPrices, Image, MobileImage, Price, SubTotal, SubTotalLabel, Title } from './styles'

type IProps = {
    id: number,
    title: string,
    price: number,
    image: string,
    count?: number;
};

export const CartItem = ({ data }: { data: IProps }) => {

    const { handleRemove } = useCart();
    const windowSize = useWindowSize();

    if ((windowSize.width || window.innerWidth) <= 600) {
        return (
            <ContainerMobile>
                <ContainerMobileImage>
                    <MobileImage src={data.image} alt="capa do filme" />
                </ContainerMobileImage>
                <ContainerMobileItemData>
                    <ContainerMobileTitle>
                        <Title>{data.title}</Title>
                        <ChangeQtd item={data} />
                    </ContainerMobileTitle>
                    <ContainerPrices>
                        <div>
                            <Price>{formatPrice(data.price)}</Price>
                            <img src={Trash} alt="Apagar" onClick={() => handleRemove(data.id)} />
                        </div>
                        <div>
                            <SubTotalLabel>SUB TOTAL</SubTotalLabel>
                            <Price>{formatPrice(data.price * (data.count || 1))}</Price>
                        </div>
                    </ContainerPrices>
                </ContainerMobileItemData>

            </ContainerMobile>
        )
    }

    return (
        <>
            <ContainerData>
                <Image src={data.image} alt="capa do filme" />
                <div>
                    <Title>{data.title}</Title>
                    <Price>{formatPrice(data.price)}</Price>
                </div>
            </ContainerData>
            <ContainerData style={{ justifyContent: 'flex-start' }}>
                <ChangeQtd item={data} />
            </ContainerData>
            <ContainerData>
                <Price>{formatPrice(data.price * (data.count || 1))}</Price>
            </ContainerData>
            <ContainerData style={{ justifyContent: 'flex-end', cursor: 'pointer' }} onClick={() => handleRemove(data.id)}>
                <img src={Trash} />
            </ContainerData>
        </>
    )
}