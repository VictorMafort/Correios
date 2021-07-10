import React from 'react';
import {
    Container,
    ActionName,
    Description
} from './styles';
import Icon from 'react-native-vector-icons/Entypo';

const CardPrecoInternacional = () => {
    return (
        <Container>
            <ActionName>
                <Icon name="globe" color="" size={25}></Icon>
                Calculador de Preços e Prazos Internacionais{"\n"}
            <Description>Clique para simular o preço de envio e o prazo de entrega das suas encomendas ou correspondências internacionais.
            </Description>
            </ActionName>
        </Container>
        
    )
}

export default CardPrecoInternacional;

