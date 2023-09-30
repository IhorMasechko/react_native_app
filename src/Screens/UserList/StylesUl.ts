import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TextHead = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  font-weight: normal;
`;

export const Button = styled.TouchableOpacity`
  background-color: lightgray;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  width: 280px;
  align-items: center;
  border: 2px solid black;
`;

export const List = styled.View`
  padding: 3px;
`;

export const Image = styled.ImageBackground`
  flex: 1;
  background-size: cover;
  justify-content: flex-end;
`;
