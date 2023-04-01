import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  isChecked: boolean;
  action: string;
}

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({theme, isChecked, action}) => !isChecked ? theme.colors.gray_600 : action === 'on' ? theme.colors.green_light : theme.colors.red_light};
  border-color: ${({theme, isChecked, action}) => !isChecked ? 'transparent' : action === 'on' ? theme.colors.green_dark : theme.colors.red_dark};
  border-width: 1px;
  min-height: 50px;
  max-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  min-width: 50%;
  margin-top: ${({theme}) => theme.font_size.xs}px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, action }) => ({
  size: 8,
  color: action === 'on' ? theme.colors.green_dark : theme.colors.red_dark,
}))`
  margin-right: 8px;
`;