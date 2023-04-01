import { Avatar, Container } from "./styles";
import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";
import { Image } from "react-native";

export function HeaderHome() {
  return (
    <Container>
      <Image source={logoImg} />
      <Avatar source={avatarImg} />
    </Container>
  )
}