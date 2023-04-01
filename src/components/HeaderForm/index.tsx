import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Container, BackButton, BackIcon, Title } from "./styles";

type Props = {
  title: string
}

export function HeaderForm({title}: Props) {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.navigate('home')}><BackIcon color={theme.colors.gray_200} /></BackButton>
      <Title>{title}</Title>
    </Container>
  )
}