import styled, { css } from "styled-components/native";

type Props = {
  outline: boolean
}

export const Container = styled.TouchableOpacity<Props>`
  ${({theme, outline}) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${!outline ? theme.colors.gray_200 : 'transparent'};
    border-color: ${outline ? theme.colors.gray_200 : 'transparent'};
    border-width: 1px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  `}
`;

export const ButtonText = styled.Text<Props>`
  ${({theme, outline}) => css`
    color: ${!outline ? theme.colors.white : theme.colors.gray_200};
    font-family: ${theme.font_family.bold};
  `}
`;