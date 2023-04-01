import { TextInput, TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>
}

export function FormGroup({label, inputRef, ...rest}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input cursorColor="black" ref={inputRef} {...rest} />
    </Container>
  )
}