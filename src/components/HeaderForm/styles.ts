import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    margin: ${theme.font_size.md}px 0;
  `}
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: theme.font_size.xl,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    margin-left: -12px;
    font-size: ${theme.font_size.lg}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_100};
  `}
`;