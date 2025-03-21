import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/Primeirocomponente';
import SegundoComponente from './Componentes/SegundoComponente';
import JavascriptComponente from './Componentes/JavascriptComponente';
import Perfil from './Componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>


    <PrimeiroComponente/>
    <SegundoComponente />
    <JavascriptComponente/>
    <Perfil
    nome= "Mateus"
    sobrenome="Rodrigues"
    idade={20}/>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
