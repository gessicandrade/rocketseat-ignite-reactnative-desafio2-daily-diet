import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'light' | 'dark';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled.View`
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: theme.font_size.lg,
  color: type === 'light' ? theme.colors.white : theme.colors.gray_100
}))``;