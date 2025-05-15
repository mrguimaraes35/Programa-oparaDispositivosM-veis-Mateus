
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Mega Sena') {
              iconName = 'check-circle';
            } else if (route.name === 'Jogo do Bicho') {
              iconName = 'pets';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
        <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}