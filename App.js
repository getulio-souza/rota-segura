import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
// import Splash from "./Pages/Splash";
import Intro from "./Pages/Intro";
import Monitoramento from "./Pages/Monitoramento"
import TruckStatus from "./Pages/TruckStatus";
import Simulacoes from "./Pages/simulacoes";
import Otimizacao from "./Pages/otimizacao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Simulacoes" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Monitoramento" component={Monitoramento} />
        <Stack.Screen name="TruckStatus" component={TruckStatus} />
        <Stack.Screen name="Otimizacao" component={Otimizacao} />
        <Stack.Screen name="Simulacoes" component={Simulacoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}