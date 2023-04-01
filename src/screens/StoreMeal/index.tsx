import { FormGroup } from "@components/FormGroup";
import { HeaderForm } from "@components/HeaderForm";
import { Alert, Text, TextInput, View } from "react-native";
import { Container, Content } from "./styles";
import { CheckboxInput } from "@components/CheckboxInput";
import { useRef, useState } from "react";
import { ButtonDefault } from "@components/ButtonDefault";
import { useNavigation } from "@react-navigation/native";
import { store } from "@storage/meals/store";
import { AppError } from "@utils/AppError";

export function StoreMeal() {
  const [isChecked, setIsChecked] = useState(true)

  const [inputName, setInputName] = useState<string>('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputHour, setInputHour] = useState('');
  
  const navigation = useNavigation()
  
  const inputNameRef = useRef<TextInput>(null)
  const inputDescriptionRef = useRef<TextInput>(null)
  const inputDateRef = useRef<TextInput>(null)
  const inputHourRef = useRef<TextInput>(null)

  function clearForm() {
    setInputName('')
    setInputDescription('')
    setInputDate('')
    setInputHour('')
  }

  function handleChecked(option:boolean) {
      setIsChecked(option)
  }

  async function handleStoreMeal() {
    const newMeal = {
      name: inputName,
      description: inputDescription,
      date: inputDate,
      hour: inputHour,
      isInside: isChecked,
    }

    try {
      await store(newMeal);
      clearForm()
      
      navigation.navigate('success', { status: isChecked })
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
      <HeaderForm title="Nova refeição" />
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
        <ButtonDefault label="Cadastrar refeição" onPress={() => handleStoreMeal()} />
      </Content>
    </Container>
  )
}