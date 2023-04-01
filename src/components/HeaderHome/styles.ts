import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  border-radius: 999px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray_100};
`;