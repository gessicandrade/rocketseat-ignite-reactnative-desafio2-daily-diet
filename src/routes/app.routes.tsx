import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "@screens/EditMeal";
import { Home } from "@screens/Home";
import { OpenMeal } from "@screens/OpenMeal";
import { Statistic } from "@screens/Statistic";
import { StoreMeal } from "@screens/StoreMeal";
import { Success } from "@screens/Success";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="store" component={StoreMeal} />
      <Screen name="update" component={EditMeal} />
      <Screen name="open" component={OpenMeal} />
      <Screen name="success" component={Success} />
    </Navigator>
  )
}