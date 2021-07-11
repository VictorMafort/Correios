import React, { useState} from 'react';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ImageBackground, StyleSheet } from 'react-native';

import { Grayscale } from 'react-native-color-matrix-image-filters';

import {
    Container,
    GroupAction,
    ActionName,
    All,
} from './styles';

const image = { uri: "http://realinstitutodeoncologia.com.br/wp-content/uploads/2017/07/white-background-image-3.jpg" };

const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 1,
  },
});

const Main = () => {
    const [iconConfigure] = useState({
        color: "#000",
        size: 60,
    })

    return (
        
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
        
        </ImageBackground>
    )
}

export default Main;