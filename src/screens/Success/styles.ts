import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  status: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  padding: 32px;
  justify-content: center;
`;
export const Title = styled.Text<Props>`
  ${({theme, status}) => css`
    font-size: ${theme.font_size.xl}px;
    color: ${status ? theme.colors.green_dark : theme.colors.red_dark};
  `}
  text-align: center;
  margin-bottom: 10px
`;
export const Subtitle = styled.Text`
  text-align: center;
`;
export const TextBold = styled.Text`
  font-family: ${({theme}) => theme.font_family.bold};
`;

export const Img = styled.Image`
  margin: 30px 0;
`;