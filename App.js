import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
// import Splash from "./Pages/Splash";
import Intro from './Pages/intro'
import Monitoramento from "./Pages/Monitoramento"
import TruckStatus from "./Pages/TruckStatus";
import Otimizacao from "./Pages/otimizacao";
import Result from "./Pages/Result";
import Simulacoes from "./Pages/Simulacoes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Monitoramento" component={Monitoramento} />
        <Stack.Screen name="TruckStatus" component={TruckStatus} />
        <Stack.Screen name="Otimizacao" component={Otimizacao} />
        <Stack.Screen name="Simulacoes" component={Simulacoes}/>
        <Stack.Screen name="Result" component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}