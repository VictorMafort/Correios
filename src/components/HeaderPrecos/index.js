import React from 'react';
import {
    Container,
    GroupAction,
    ActionName
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign'

const HeaderPrecos = () => {
    return (
        <Container>
        <GroupAction>
            <Icon name="left" color="blue" size={25}></Icon>
            <ActionName>Preços e Prazos</ActionName>
        </GroupAction>
        </Container>
        
    )
}

export default HeaderPrecos;

