import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import {
  Container,
  ProductContainer,
  Image,
  Title,
  Price,
  ButtonAdd,
  Amount,
  AmountText,
  ButtonAddText,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispacth = useDispatch();

  async function loadProducts() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: product.price,
    }));

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispacth(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductContainer>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{`R$ ${item.priceFormatted}`}</Price>
            <ButtonAdd onPress={() => handleAddProduct(item.id)}>
              <Amount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <AmountText>{amount[item.id] || 0}</AmountText>
              </Amount>
              <ButtonAddText>ADICIONAR</ButtonAddText>
            </ButtonAdd>
          </ProductContainer>
        )}
      />
    </Container>
  );
}
