import { HeaderForm } from "@components/HeaderForm";
import { View } from "react-native";
import { Container, Content, Label, Subtitle, Title } from "./styles";
import { useState } from "react";
import { ButtonDefault } from "@components/ButtonDefault";
import { Tag } from "@components/Tag";
import { ModalRemove } from "@components/ModalRemove";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { remove } from "@storage/meals/remove";

type RouteParams = {
  meal: MealStorageDTO
}

export function OpenMeal() {
  const [isShowModal, setIsShowModal] = useState(false);

  const navigation = useNavigation()
  const route = useRoute()

  const { meal } = route.params as RouteParams

  async function handleRemove() {
    await remove(meal)
    handleHideModal()
    navigation.navigate('home')
  }

  function handleHideModal(){
    setIsShowModal(false)
  }

  function handleShowModal(){
    setIsShowModal(true)
  }
  
  return (
    <Container inside={meal.isInside}>
      <HeaderForm title="Refeição" />
      <Content>
        <View>
          <Title>{meal.name}</Title>
          <Subtitle>{meal.description}</Subtitle>
          <Label>Data e Hora</Label>
          <Subtitle>{meal.date} às {meal.hour}</Subtitle>
          <Tag inside={meal.isInside} />
        </View>
        <View style={{ justifyContent: 'flex-end', gap: 5 }}>
          <ButtonDefault hasIcon nameIcon="drive-file-rename-outline" label="Editar refeição" onPress={() => navigation.navigate('update', {meal})} />
          <ButtonDefault hasIcon nameIcon="delete-outline" outline label="Excluir refeição" onPress={handleShowModal} />
        </View>
      </Content>
      <ModalRemove isShowModal={isShowModal} hideModal={handleHideModal} onRemove={()=> handleRemove()}/>
    </Container>
  )
}