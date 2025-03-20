import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
   const nome = "Mateus"

   function alerta(){
    alert("Você clicou no botão")
   }
  



  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
          <Text>{2+2}</Text>
          <Text>{nome}</Text>
          <
            Text>Mateus e um gostoso!</Text>
      
        <Button title='Alerta' onPress={alerta} ></Button>

        <Image
        
        source={{
          uri: 'https://i.pinimg.com/736x/99/cd/9e/99cd9e0a9a2378db8a9b841bea574bd8.jpg'
        }}
        style={{
          height: 300,
          width:300
        }}
        />
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
