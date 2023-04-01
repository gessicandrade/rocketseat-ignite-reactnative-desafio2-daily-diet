import { Text } from "react-native";
import { Container, Icon } from "./styles";

type Props = {
  inside: boolean;
}

export function Tag({inside}: Props) {
  return (
    <Container>
      <Icon name="circle" inside={inside} />
      <Text>{inside ? 'dentro da dieta' : 'fora da dieta'}</Text>
    </Container>
  )
}