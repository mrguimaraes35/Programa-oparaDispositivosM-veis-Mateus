import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

    

 const nome ="Mateus"


  function alerta() {
  alert('Clicou no Botão!!!')
}











  return (

    <ScrollView>


    
    


    <View style={styles.container}>
      <StatusBar style="auto" />


      <Text  style={{ fontSize: 40}}>MATEUS</Text>

      <Text style={styles.textoGrande}>Mateus Gostoso</Text>
      <Text style={styles.textoGrande}>Mateus Gostoso</Text>
      <Text style={styles.textoGrande}>Mateus Gostoso</Text>

      <Button title='ENVIAR' onPress={alerta}></Button>

      <Image 
      source={{
        uri: 'https://i.pinimg.com/736x/ab/91/fb/ab91fba3c95504300f962f1da3f1b6a0.jpg'
      }}
      style ={{
        height: 400,
        width: 400
      }}
      
      
      />



<Image 
      source={ require('./Imagens/image.png')}
      style ={{
        height: 300,
        width: 300
      }}
      />

    </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50

  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});



