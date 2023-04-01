import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
  status: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, status }) => css`
    background-color: ${status ? theme.colors.green_light : theme.colors.red_light};
    margin: ${theme.font_size.xl}px 0;
    align-items: center;
    justify-content: center;
    padding: 20px 16px;
    border-radius: 8px;
  `}
`;

export const OpenButton = styled.View`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const OpenIcon = styled(ArrowUpRight).attrs(({theme}) => ({
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