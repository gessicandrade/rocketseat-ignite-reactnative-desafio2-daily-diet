import { View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: ${({theme}) => theme.font_size.sm}px 0 0;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xl}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
    text-align: center;
  `}
`;
  
