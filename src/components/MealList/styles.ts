import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 6px;
  min-height: 50px;
  max-height: 50px;
  align-items: center;
  margin-top:8px;
  ${({theme}) => css`
    border: 1px solid ${theme.colors.gray_500};
    padding: ${theme.font_size.xs}px;
  `}
`;
export const HourItem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xs}px;
    padding-right: ${theme.font_size.xs}px;
    border-right-color: ${theme.colors.gray_400};
  `}
  font-weight: 700;
  border-right-width: 1px;
`;
export const NameItem = styled.Text`
  flex: 1;
  ${({theme}) => css`
    padding-left: ${theme.font_size.xs}px;
  `}
`;
export const IconItem = styled(MaterialIcons)`
  ${({theme}) => css`
    font-size: ${theme.font_size.sm}px;
  `}
`;