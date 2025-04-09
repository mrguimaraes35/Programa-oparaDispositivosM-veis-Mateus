import React from "react";
import { PaperProvider } from "react-native-paper";
import  {NavigationContainer} from '@react-navigation/native' 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator()



export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
       <Tab.Navigator>
        
        
         <Tab.Screen name='HomeScreen' component= {HomeScreen} />        
         <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
         <Tab.Screen name='SettingsScreen' component={SettingsScreen}/>

       </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

