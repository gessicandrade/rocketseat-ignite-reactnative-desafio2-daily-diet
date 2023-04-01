import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native';

type ModalContainerProps = {
  isVisible: boolean
}

type Props = {
  type: string
}

export const ModalContainer = styled.View<ModalContainerProps>`
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
    flex: 1;
    padding: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1D1B1E99;
`
export const Window = styled.View`
    padding: 24px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
export const Content = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 192px;
    padding: 23px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.gray_700};
`
export const ContentButton = styled.View`
    gap: 12px;
    flex-direction: row;
`
export const Message = styled.Text`
   ${({ theme }) => css`
  font-size: ${theme.font_size.lg}px;
  color: ${theme.colors.gray_100};
  font-family: ${theme.font_family.bold};
`}
width: 210px;
text-align: center;
`
export const Button = styled(TouchableOpacity)<Props>`
    min-width: 50%;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }) => type === 'primary'? theme.colors.white : theme.colors.gray_200};
    border: 1px solid ${({ theme, type }) => type === 'primary'? theme.colors.gray_200 : theme.colors.gray_200};
    margin-top: 30px;
    border-radius: 6px;
`
export const TextButton = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${type === 'primary' ? theme.colors.gray_200 : theme.colors.white}
  `}
 `;