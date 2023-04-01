import { Container, HourItem, NameItem } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

type Props = {
  meal: MealStorageDTO
}

export function MealList({meal}: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate('open', {meal})}>
      <HourItem>{meal.hour}</HourItem>
      <NameItem>{meal.name}</NameItem>
      <MaterialIcons name="circle" color={meal.isInside ? colors.green_mid : colors.red_mid} size={14}></MaterialIcons>
    </Container>
  )
}