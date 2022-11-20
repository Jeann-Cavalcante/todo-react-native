import styled from 'styled-components/native';

interface Props {
  size: number;
}

export const Container = styled.View`
align-items: center;
margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;