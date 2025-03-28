import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './Componentes/Filmes';
import Series from './Componentes/Series';

export default function App() {
 
/*     const listaFilmes = [
{
 nome: "Demolidor O Homem sem Medo",
 ano: 2003,
 diretor: "	Mark Steven Johnson",
 tipo: "Açao",
 capa: "https://i.pinimg.com/736x/ef/25/f3/ef25f302b5747740390bf275b0f502cd.jpg"
},


 {
  nome: "A Rocha",
  ano: 1996,
  diretor: "Michael Bay",
  tipo: "aventura",
  capa: "https://i.pinimg.com/736x/aa/c3/04/aac304518bf9976c246e2fdc3970c572.jpg"
 },


 {
  nome: "Star Trek",
  ano: 2009,
  diretor: "J. J. Abrams",
  tipo: "ação-aventura",
  capa: "https://i.pinimg.com/736x/fc/de/bf/fcdebfd9c4b0c50fac0ab8994c004306.jpg"

 },
 {
  nome: "Gladiador",
  ano: 2000,
  diretor: "Ridley Scott",
  tipo: "	drama",
  capa: "https://i.pinimg.com/736x/4e/7a/8d/4e7a8d3b0bf11e6dad46ac648af5e6ce.jpg"

 }
];

  {
          listaFilmes.map(
            filmes => {
              return (
                <Filmes
                nome={filmes.nome}
                ano={filmes.ano}
                tipo={filmes.tipo}
                capa={filmes.capa}
                />
              )
            }
          )
        }

*/ 

const listaSeries = [
  {
  nome: "Buffy, a Caça-Vampiros",
  ano: 1997,
  diretor: "Joss Whedon",
  temporadas: 7,
  capa:'https://i.pinimg.com/736x/2e/52/87/2e5287f1e49bcc080166493575950d30.jpg'
  },
  {
  nome: "Desperate Housewives",
  ano: 2004,
  diretor: "Marc Cherry",
  temporadas: 8,
  capa: 'https://i.pinimg.com/736x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg'
  },

  {
  nome: "Sons of Anarchy",
  ano: 2008,
  diretor: "Kurt Sutter",
  temporadas: 7,
  capa: 'https://i.pinimg.com/736x/0b/d0/21/0bd0217b70f03276beff9132833e8305.jpg'
  },
  ];


return (
  <ScrollView>
  <View style={styles.container}>
    <StatusBar style="auto" />


      

{
          listaSeries.map(
            series => {
              return (
                <Series
                nome={series.nome}
                ano={series.ano}
                diretor={series.diretor}
                temporadas={series.temporadas}
                capa={series.capa}
                />
              )
            }
          )
        }



      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
