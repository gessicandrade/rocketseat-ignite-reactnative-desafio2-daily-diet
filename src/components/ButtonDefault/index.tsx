import { ButtonIcon } from "@components/ButtonIcon";
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";

type Props = TouchableOpacityProps & {
  hasIcon?: boolean
  nameIcon?: keyof typeof MaterialIcons.glyphMap
  outline?: boolean
  label: string
}

export function ButtonDefault({label, hasIcon = false, outline = false, nameIcon = 'add', ...rest}: Props) {
  return (
    <Container outline={outline} {...rest}>
      {hasIcon && <ButtonIcon icon={nameIcon} type={!outline ? 'light' : 'dark' } />}
      <ButtonText outline={outline}>{label}</ButtonText>
    </Container>
  )
}