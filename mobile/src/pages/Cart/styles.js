import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const BoxDelivery = styled.View`
  height: 500px;
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
`;

export const Product = styled.View`
  align-items: center;
`;

export const Body = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Info = styled.View`
  width: 140px;
  margin: 0 20px;
`;

export const IconTrash = styled(Icon).attrs({
  name: 'delete',
  size: 20,
  color: '#7159c1',
})``;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.View`
  height: 40px;
  background: #ddd;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 296px;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconAmount = styled(Icon).attrs({
  color: '#7159c1',
  size: 20,
})``;

export const Input = styled.TextInput.attrs({
  editable: false,
})`
  width: 40px;
  background: #fff;
  margin: 0 5px;
  border-radius: 4px;
`;

export const Total = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextTotal = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Value = styled.Text`
  margin-bottom: 50px;
  font-weight: bold;
  font-size: 30px;
`;

export const FinallyButton = styled.TouchableOpacity`
  background: #7159c1;
  height: 40px;
  width: 300px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const FinallyButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ViewEmpty = styled.View`
  margin: 20px 20px;
  background: #fff;
  align-items: center;
  border-radius: 4px;
`;

export const IconEmpty = styled(Icon).attrs({
  name: 'remove-shopping-cart',
  color: '#ddd',
  size: 80,
})`
  margin-bottom: 10px;
`;

export const TextEmpty = styled.Text`
  font-size: 25px;
`;
