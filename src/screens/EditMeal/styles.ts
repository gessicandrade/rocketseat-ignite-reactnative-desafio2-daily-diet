import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.gray_500};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 30px 24px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-between;
`;

export const FormGroup = styled.View``;