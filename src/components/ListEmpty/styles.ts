import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: bold;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;