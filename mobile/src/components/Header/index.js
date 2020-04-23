import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import logo from '../../assets/logo.png';
import {
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  ButtonRocket,
} from './styles';

function Header({ navigation, cartSize }) {
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

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
