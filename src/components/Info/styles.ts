import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
  padding: 0 24px;
`;

export const Score = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const InfoCreate = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-weight: bold;
  font-size: 18px;
  padding-right: 8px;
`;

export const InfoScore = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: bold;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  width: 40px;
  padding: 10px;
  text-align: center;
`;
