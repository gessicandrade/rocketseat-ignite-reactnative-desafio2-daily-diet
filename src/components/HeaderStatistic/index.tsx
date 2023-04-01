import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Container, BackButton, BackIcon, Subtitle, Title } from "./styles";

type Props = {
  percent: number;
  status: boolean;
}

export function HeaderStatistic({percent, status}: Props) {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Container style={{ backgroundColor: status ? theme.colors.green_light : theme.colors.red_light }}>
      <BackButton onPress={() => navigation.navigate('home')}><BackIcon color={status ? theme.colors.green_dark : theme.colors.red_dark} /></BackButton>
      <Title>{percent.toFixed(2)}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}