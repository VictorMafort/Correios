import React from 'react';
import {
    Container,
    ActionName,
    Description
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardPrecoNacional = () => {
    return (
        <Container>
            <ActionName>
                <Icon name="currency-usd-circle-outline" color="" size={25}></Icon>
                Calculador de Preços e Prazos Nacionais{"\n"}
            <Description>Clique para simular o preço de envio e o prazo de entrega das suas encomendas ou correspondências nacionais.
            </Description>
            </ActionName>
        </Container>
        
    )
}

export default CardPrecoNacional;

