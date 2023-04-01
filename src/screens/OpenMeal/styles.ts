import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  inside: boolean
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
  ${({theme, inside}) => css`
    background-color: ${inside ? theme.colors.green_light : theme.colors.red_light};
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

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.gray_100};
  font-family: ${({theme}) => theme.font_family.bold};
  margin-bottom: ${({theme}) => theme.font_size.md}px;
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) => theme.font_size.md}px;
  color: ${({theme}) => theme.colors.gray_200};
  margin-bottom: ${({theme}) => theme.font_size.md}px;
`;

export const Label = styled.Text`
  font-size: ${({theme}) => theme.font_size.sm}px;
  color: ${({theme}) => theme.colors.gray_100};
  font-family: ${({theme}) => theme.font_family.bold};
`;