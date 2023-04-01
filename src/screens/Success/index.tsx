import { Container, Img, Subtitle, TextBold, Title } from "./styles";
import imgGoog from '@assets/success-good.png'
import imgBad from '@assets/success-bad.png'
import { ButtonDefault } from "@components/ButtonDefault";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  status: boolean
}

export function Success() {
  const navigation = useNavigation()
  const route = useRoute()
  const { status } = route.params as RouteParams;
  
  return (
    <Container>
      <Title status={status}>{status ? 'Continue assim!' : 'Que pena!'}</Title>
      {
        status ?
        <Subtitle>Você continua <TextBold>dentro da dieta.</TextBold> Muito bem!</Subtitle>
        :
        <Subtitle>Você <TextBold>saiu da dieta</TextBold> dessa vez, continue se esforçando e não desista!</Subtitle>
      }
      <View style={{ alignItems: 'center' }}>
        <Img source={status ? imgGoog : imgBad} />
      </View>
      <ButtonDefault label="Ir para a página inicial" onPress={() => navigation.navigate('home')} />
    </Container>
  )
}