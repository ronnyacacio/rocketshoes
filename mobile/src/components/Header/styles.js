import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: ${colors.dark};
  height: 70px;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
`;
