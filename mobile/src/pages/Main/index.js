import React from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
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

class Main extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = (product) => {
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <ButtonAdd onPress={() => this.handleAddProduct(item)}>
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
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
