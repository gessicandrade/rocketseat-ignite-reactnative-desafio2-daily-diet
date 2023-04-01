import { FormGroup } from "@components/FormGroup";
import { HeaderForm } from "@components/HeaderForm";
import { Alert, Text, TextInput, View } from "react-native";
import { Container, Content } from "./styles";
import { CheckboxInput } from "@components/CheckboxInput";
import { useRef, useState } from "react";
import { ButtonDefault } from "@components/ButtonDefault";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { AppError } from "@utils/AppError";
import { update } from "@storage/meals/update";

type RouteParams = {
  meal: MealStorageDTO
}

export function EditMeal() {
  const route = useRoute()
  const { meal } = route.params as RouteParams

  const [isChecked, setIsChecked] = useState(meal.isInside)
  const [inputName, setInputName] = useState<string>(meal.name);
  const [inputDescription, setInputDescription] = useState(meal.description);
  const [inputDate, setInputDate] = useState(meal.date);
  const [inputHour, setInputHour] = useState(meal.hour);

  const inputNameRef = useRef<TextInput>(null)
  const inputDescriptionRef = useRef<TextInput>(null)
  const inputDateRef = useRef<TextInput>(null)
  const inputHourRef = useRef<TextInput>(null)

  const navigation = useNavigation()

  function handleChecked(option:boolean) {
      setIsChecked(option)
  }

  async function handleUpdateMeal() {
    const upMeal:MealStorageDTO = {
      name: inputName,
      description: inputDescription,
      date: inputDate,
      hour: inputHour,
      isInside: isChecked,
    }

    try {
      await update(meal, upMeal);
      
      navigation.navigate('open', { meal:upMeal })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Refeição', error.message)
      } else {
        Alert.alert('Nova Refeição', 'Não foi possível cadastrar a refeição')
        console.log(error);
      }
    }
  }
  
  return (
    <Container>
      <HeaderForm title="Editar refeição" />
      <Content>
        <View>
          <FormGroup label="Nome" onChangeText={setInputName} value={inputName} inputRef={inputNameRef} />
          <FormGroup label="Descrição" onChangeText={setInputDescription} value={inputDescription} inputRef={inputDescriptionRef} multiline numberOfLines={5} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <FormGroup label="Data" onChangeText={setInputDate} value={inputDate} inputRef={inputDateRef} style={{ minWidth: '50%' }} />
            <FormGroup label="Hora" onChangeText={setInputHour} value={inputHour} inputRef={inputHourRef} style={{ minWidth: '50%' }} />
          </View>
          <Text>Está dentro da dieta?</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <CheckboxInput label="Sim" action="on" onPress={() => handleChecked(true)} isChecked={isChecked} />
            <CheckboxInput label="Não" action="off" onPress={() => handleChecked(false)} isChecked={!isChecked} />
          </View>
        </View>
        <ButtonDefault label="Salvar alterações" onPress={() => handleUpdateMeal()} />
      </Content>
    </Container>
  )
}