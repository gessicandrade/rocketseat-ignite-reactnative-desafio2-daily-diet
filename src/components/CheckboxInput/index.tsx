import { Text, TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
  action: string;
  isChecked?: boolean;
}

export function CheckboxInput({label, action, isChecked = false, ...rest}: Props) {
  return (
    <Container isChecked={isChecked} action={action} {...rest}>
      <Icon name="circle" action={action} />
      <Text>{label}</Text>
    </Container>
  )
}