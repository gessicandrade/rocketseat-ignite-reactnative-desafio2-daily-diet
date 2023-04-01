import { useTheme } from "styled-components/native";
import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: number;
  subtitle: string;
  size?: string;
  type?: string;
}

export function StatisticCard({title, subtitle, size = 'lg', type = 'gray'}: Props) {
  const theme = useTheme()

  return (
    <Container 
      style={
        { 
          backgroundColor: type === 'success' ? theme.colors.green_light : type === 'danger' ? theme.colors.red_light : theme.colors.gray_600,
          maxWidth: size === 'lg' ? '100%' : '50%'
        }
      }
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}