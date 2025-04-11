import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { PaperProvider } from 'react-native-paper'
import JogadoresScreen from './screens/JogadoresScreen';
import EscudoScreen from './screens/EscudoScreen';
import TitulosScreen from './screens/TitulosScreen';
import { FlatList } from 'react-native';


const Tab = createBottomTabNavigator()



const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };




export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Tab.Navigator>
      
      
      <Tab.Screen
            name='Escudo'
            component={EscudoScreen}
            options={{
              title: 'Escudo',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='shield' color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name='Jogadores'
            component={JogadoresScreen}
            options={{
              title: 'Jogadores',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='people' color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name='Titulos'
            component={TitulosScreen}
            options={{
              title: 'Títulos',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='trophy' color={color} size={size} />
              ),
            }}
          />
      </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

