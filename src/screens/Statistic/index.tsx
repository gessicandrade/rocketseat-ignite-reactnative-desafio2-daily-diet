import { HeaderStatistic } from "@components/HeaderStatistic";
import { StatisticCard } from "@components/StatisticCard";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Content, ScreenTitle } from "./styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  bestSeq: number;
  countMeals: number;
  countInside: number;
  countOutside: number;
  percent: number;
}

export function Statistic() {
  const theme = useTheme()
  const route = useRoute()
  const { bestSeq, countMeals, countInside, countOutside, percent } = route.params as RouteParams;

  return (
    <Container style={{ backgroundColor: countInside >= countOutside ? theme.colors.green_light : theme.colors.red_light }}>
      <HeaderStatistic percent={percent} status={countInside >= countOutside} />
      <Content>
        <ScreenTitle>Estatísticas gerais</ScreenTitle>
        <StatisticCard title={bestSeq} subtitle="melhor sequência de pratos dentro da dieta" />
        <StatisticCard title={countMeals} subtitle="refeições registradas" />
        <View style={{ flexDirection: 'row', maxWidth: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <StatisticCard title={countInside} subtitle="refeições dentro da dieta" type="success" size="sm" />
          <StatisticCard title={countOutside} subtitle="refeições fora da dieta" type="danger" size="sm" />
        </View>
      </Content>
    </Container>
  )
}