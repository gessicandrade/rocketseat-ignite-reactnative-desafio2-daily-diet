import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  inside: boolean;
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.gray_600};
  min-height: 34px;
  max-height: 34px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 144px;
  border-radius: 999px;
  width: auto;
  margin-top: ${({theme}) => theme.font_size.xs}px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, inside }) => ({
  size: 8,
  color: inside ? theme.colors.green_dark : theme.colors.red_dark,
}))`
  margin-right: 8px;
`;