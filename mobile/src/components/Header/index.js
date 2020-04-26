import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  ButtonRocket,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <ButtonRocket onPress={() => navigation.navigate('Main')}>
        <Logo source={logo} />
      </ButtonRocket>

      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}
