import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet,Text,View,ScrollView,} from "react-native";

export default function App() {


  function alerta() {
    alert('Cesta dois pontos Allen inverson do Philadelphia 76ers  ')
  }
   









  return (

    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Text  style={{ fontSize: 40}}>Allen Iverson</Text>
      <Text style={styles.textoGrande}>Philadelphia 76ers</Text>
      <Text  style={styles.letrasGrande}> Allen Iverson, um dos jogadores de basquete mais icônicos, é conhecido por sua habilidade excepcional e personalidade marcante.</Text>
      <Text style={styles.palavrasGrandes}>Jogadores contemporâneos, como Kyrie Irving e Stephen Curry, cite Iverson como uma influência, mostrando o alcance duradouro de seu estilo de jogo.
Seu impacto na NBA é inegável, tanto dentro quanto fora das quadras.</Text>
      <Button title='Cesta' onPress={alerta}></Button>

      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/97/bb/dd/97bbdd688ae3bc1120af3036ee8fc6e2.jpg'
      }}
      style ={{
        height: 600,
        width: 400
      }}
      />
<Image
      source={{
        uri: 'https://i.pinimg.com/736x/77/e7/b2/77e7b283050385ccc6e719bd58c7db42.jpg'
      }}
      style ={{
        height: 600,
        width: 400
      }}
      />

<Image
      source={{
        uri: 'https://i.pinimg.com/736x/24/c2/46/24c2460acf2b9486958bb30c6535f9de.jpg'
      }}
      style ={{
        height: 600,
        width: 400
      }}
      />


<Image
      source={{
        uri: 'https://i.pinimg.com/736x/6d/68/ad/6d68ada17cbe184ae4ae671cd823d9e6.jpg'
      }}
      style ={{
        height: 600,
        width: 400
      }}
      />
    

    <Image
      source={{
        uri: 'https://i.pinimg.com/736x/1c/60/29/1c6029e0f29c8be7258620adf0385e8e.jpg'
      }}
      style ={{
        height: 600,
        width: 400
      }}
      />




    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  },

  letrasGrande: {
    fontSize: 40,
    fontWeight: 600,
    fontStyle: 'italic'
  },
  palavrasGrandes: {
    fontSize: 30,
    fontWeight: 400,
    fontStyle: 'italic'
  },
});

