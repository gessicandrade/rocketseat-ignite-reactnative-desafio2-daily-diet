import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: ${({theme}) => theme.font_size.lg}px;
`;
export const Label = styled.Text`
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray_500};
  min-height: 48px;
  border-radius: 6px;
  padding: 0 8px;
`;