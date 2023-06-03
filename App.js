import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Splash from "./Pages/Splash";
import Intro from "./Pages/intro";
// import Monitoramento from "./Pages"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Intro" component={Intro} />
        {/* <Stack.Screen name="Monitoramento" component={Monitoramento} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//https://www.youtube.com/watch?v=ncA3eHZHXRc
