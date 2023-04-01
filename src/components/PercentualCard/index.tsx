import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { OpenButton, Container, Subtitle, Title, OpenIcon } from "./styles";

type Props = TouchableOpacityProps & {
  percent: number
  status: boolean
}

export function PercentualCard({percent, status, ...rest}: Props) {
  const theme = useTheme()

  return (
    <Container status={status} {...rest}>
      <OpenButton><OpenIcon color={status ? theme.colors.green_dark : theme.colors.red_dark} /></OpenButton>
      <Title>{percent.toFixed(2)}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}