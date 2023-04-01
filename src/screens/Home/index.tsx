import { useCallback, useState } from "react";
import { Alert, SectionList, Text } from "react-native";

import { Container } from "./styles";

import { ButtonDefault } from "@components/ButtonDefault";
import { HeaderHome } from "@components/HeaderHome";
import { Loading } from "@components/Loading";
import { MealList } from "@components/MealList";
import { PercentualCard } from "@components/PercentualCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { get } from "@storage/meals/get";
import { get as getSection } from "@storage/sections/get";
import { get as getSeqs } from "@storage/seqs/get";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

import { SectionStorageDTO } from "@storage/sections/SectionStorageDTO";
import { SeqStorageDTO } from "@storage/seqs/SeqStorageDTO";

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])
  const [sections, setSections] = useState<SectionStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const [bestSeq, setBestSeq] = useState(0)
  const [countMeals, setCountMeals] = useState<number>(0)
  const [countInside, setCountInside] = useState<number>(0)
  const [countOutside, setCountOutside] = useState<number>(0)
  const [percent, setPercent] = useState<number>(0)

  const navigation = useNavigation()

  async function fetchMeals() {
    try {
      setIsLoading(true)
      
      const getMeals:MealStorageDTO[] = await get()
      setMeals(getMeals)
      setCountMeals(getMeals.length)
      
      const countUpInside = getMeals.filter(meal => meal.isInside);
      setCountInside(countUpInside.length)
      
      const countUpOutside = getMeals.filter(meal => !meal.isInside);
      setCountOutside(countUpOutside.length)
      
      const updatedPercent = countUpInside.length > 0 && getMeals.length > 0 ? Number((countUpInside.length * 100)/getMeals.length) : 0
      
      setPercent(updatedPercent)

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      Alert.alert('Falha no Carregamento', 'Não foi possível carregar as refeições')
    }
  }

  async function fetchSections() {
    try {
      setIsLoading(true)
      const getSections:SectionStorageDTO[] = await getSection()
      setSections(getSections)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      Alert.alert('Falha no Carregamento', 'Não foi possível carregar as seções')
    }
  }

  async function fetchSeqs() {
    try {
      setIsLoading(true)
      const getUpSeqs:SeqStorageDTO[] = await getSeqs()
      // console.log(getUpSeqs);
      
      getUpSeqs.length > 0 && setBestSeq(getUpSeqs[0].best)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      Alert.alert('Falha no Carregamento', 'Não foi possível carregar as sequências')
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
    fetchSeqs()
    fetchSections()
  }, []))

  return (
    <Container>
      <HeaderHome />
      <PercentualCard percent={percent} status={countInside >= countOutside} onPress={() => navigation.navigate('statistic', {
        bestSeq: bestSeq,
        countMeals: countMeals,
        countInside: countInside,
        countOutside: countOutside,
        percent: percent
      })} />
      <Text style={{ fontSize: 16, marginBottom: 8 }}>Refeições</Text>
      <ButtonDefault hasIcon label="Nova refeição" onPress={() => navigation.navigate('store')} />
      
      {
        isLoading ? <Loading /> :
        <SectionList
        sections={sections} 
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <MealList meal={item} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 32 }}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }]}
      />
      }
    </Container>
  )
}