import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';
import { Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <BasketContainer>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <ItemCount>3</ItemCount>
      </BasketContainer>
    </Container>
  );
}
