import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.green_light};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px 24px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ScreenTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
  `}
  text-align: center;
  margin: 20px 0;
`;