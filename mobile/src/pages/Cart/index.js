import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import {
  Container,
  BoxDelivery,
  Product,
  Body,
  Image,
  Info,
  IconTrash,
  Title,
  Price,
  Footer,
  Amount,
  Input,
  IconAmount,
  Total,
  TextTotal,
  Value,
  FinallyButton,
  FinallyButtonText,
  ViewEmpty,
  IconEmpty,
  TextEmpty,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      {cart.length !== 0 ? (
        <BoxDelivery>
          <FlatList
            data={cart}
            keyExtractor={(product) => String(product.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: product }) => (
              <Product>
                <Body>
                  <Image source={{ uri: product.image }} />
                  <Info>
                    <Title>{product.title}</Title>
                    <Price>{product.priceFormatted}</Price>
                  </Info>
                  <IconTrash />
                </Body>
                <Footer>
                  <Amount>
                    <IconAmount name="remove-circle-outline" />
                    <Input value="1" />
                    <IconAmount name="add-circle-outline" />
                  </Amount>
                  <Total>R$ 100,00</Total>
                </Footer>
              </Product>
            )}
          />
          <TextTotal>TOTAL</TextTotal>
          <Value>R$ 1000,00</Value>
          <FinallyButton>
            <FinallyButtonText>FINALIZAR PEDIDO</FinallyButtonText>
          </FinallyButton>
        </BoxDelivery>
      ) : (
        <ViewEmpty>
          <IconEmpty />
          <TextEmpty>Seu carrinho esta vazio.</TextEmpty>
        </ViewEmpty>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
