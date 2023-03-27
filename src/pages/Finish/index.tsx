import { useNavigate } from 'react-router-dom';
import FinishImage from '../../assets/Finish.svg';
import { Button } from '../../components/Button';

import { Container, Content } from "./styles";

const Finish = () => {

    const navigate = useNavigate();

    return (
        <Container>
        <Content>
          <h1>Compra realizada com sucesso!</h1>
          <div>
            <img src={FinishImage} alt="Carrinho Vazio" />
          </div>
          <Button width="180px" label='VOLTAR' onClick={() => navigate('/')} />
        </Content>
      </Container>
    )
}

export default Finish;