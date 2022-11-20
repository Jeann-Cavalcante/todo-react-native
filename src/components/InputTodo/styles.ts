import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0 24px;
  margin-top: -25px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 50px;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  
`;

export const Text = styled.Text`
  font-size: 30px;
  color: #fff;
`;