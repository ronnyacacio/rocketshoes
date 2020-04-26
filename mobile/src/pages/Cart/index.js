import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
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
  SubTotal,
  TextTotal,
  Total,
  FinallyButton,
  FinallyButtonText,
  ViewEmpty,
  IconEmpty,
  TextEmpty,
} from './styles';

export default function Cart() {
  const total = useSelector((state) =>
    state.cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
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
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <IconTrash />
                  </TouchableOpacity>
                </Body>
                <Footer>
                  <Amount>
                    <TouchableOpacity onPress={() => decrement(product)}>
                      <IconAmount name="remove-circle-outline" />
                    </TouchableOpacity>
                    <Input value={String(product.amount)} />
                    <TouchableOpacity onPress={() => increment(product)}>
                      <IconAmount name="add-circle-outline" />
                    </TouchableOpacity>
                  </Amount>
                  <SubTotal>{product.subtotal}</SubTotal>
                </Footer>
              </Product>
            )}
          />
          <TextTotal>TOTAL</TextTotal>
          <Total>{total}</Total>
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
