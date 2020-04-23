import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { formatPrice } from '../../util/format';
import api from '../../services/api';
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonAdd,
  ProductAmount,
  ProductAmountText,
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
      priceFormatted: product.price,
    }));

    this.setState({ products: data });
  };

  handleAddProduct = (product) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{`R$ ${item.priceFormatted}`}</ProductPrice>
              <ButtonAdd onPress={() => this.handleAddProduct(item)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>3</ProductAmountText>
                </ProductAmount>
                <ButtonAddText>ADICIONAR</ButtonAddText>
              </ButtonAdd>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}

export default connect()(Main);
