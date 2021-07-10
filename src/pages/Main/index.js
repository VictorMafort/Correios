import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Container,
    GroupAction,
    ActionName,
    All,
} from './styles';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

const Main = () => {
    const [iconConfigure] = useState({
        color: "#000",
        size: 60,
    })

    return (
     
        <All>
            
            <Container>
                <GroupAction>
                    <IconMaterial name="package-variant" {...iconConfigure} />
                    <ActionName>Rastreamento</ActionName>
                </GroupAction>
                <GroupAction>
                    <IconMaterial name="currency-usd-circle-outline" {...iconConfigure} />
                    <ActionName>Preços e Prazos</ActionName>
                </GroupAction>
                <GroupAction>
                    <IconFeather name="home" {...iconConfigure} />
                    <ActionName>Busca Agências</ActionName>
                </GroupAction>
            </Container>
            <Container>
                <GroupAction>
                    <IconFeather name="package" {...iconConfigure} />
                    <ActionName>Postagem de Encomendas</ActionName>
                </GroupAction>
                <GroupAction>
                    <IconMaterial name="cellphone" {...iconConfigure} />
                    <ActionName>App Correios Celular</ActionName>
                </GroupAction>
                <GroupAction>
                    <IconFeather name="mail" {...iconConfigure} />
                    <ActionName>Minhas Mensagens</ActionName>
                </GroupAction>
            </Container>
            <Container>
                <GroupAction>
                    <IconFeather name="package" {...iconConfigure} />
                    <ActionName>Pré Atendimento</ActionName>
                </GroupAction>
                <GroupAction>
                    <IconEntypo name="paper-plane" {...iconConfigure} />
                    <ActionName>Vale Postal</ActionName>
                </GroupAction>
                <GroupAction></GroupAction>
            </Container>
        </All>
    )
}

export default Main;