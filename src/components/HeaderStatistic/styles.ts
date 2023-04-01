import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    margin: ${theme.font_size.xl}px 0;
  `}
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 8px;
  top: 8px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: theme.font_size.xl,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xxl}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}
`;