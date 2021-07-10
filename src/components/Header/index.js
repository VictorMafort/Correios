import React, { useState } from 'react';

import {
    Container,
    SubContainer,
    GroupAction,
    Logo
} from './styles';

import IconFeather from 'react-native-vector-icons/Feather';

import IconEvil from 'react-native-vector-icons/EvilIcons';

const Header = () => {
    const [iconConfigure] = useState({
        color: "#000",
        size: 35
    })

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <IconFeather name="menu" {...iconConfigure} />
                </GroupAction>
                <Logo source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/05/correios-logo-2-1.png' }} />
                <GroupAction>
                    <IconEvil name="user" {...iconConfigure} />
                </GroupAction>
            </SubContainer>
        </Container>
    );
};

export default Header;