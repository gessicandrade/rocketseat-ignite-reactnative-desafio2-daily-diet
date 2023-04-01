import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Routes } from './src/routes';
import { Loading } from '@components/Loading';
import { StoreMeal } from '@screens/StoreMeal';
import { Success } from '@screens/Success';
import { OpenMeal } from '@screens/OpenMeal';
import { EditMeal } from '@screens/EditMeal';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <Loading />}
      {/* { fontsLoaded ? <OpenMeal /> : <Loading />} */}
    </ThemeProvider>
  );
}
