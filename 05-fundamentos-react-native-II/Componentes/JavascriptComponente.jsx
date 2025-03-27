import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
 const nome = "Mateus"
 const idade = 20

 function checarMaioridade() {
    console.log("Chamou a fução checarMaioridade ")
  if(idade >= 18) {
    return "Maior de Idade"
  } else{
    return "Menor de Idade"
  }
 }

 function alerta() {
    alert('Clicou no botão!!!!')
 }


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>JavascriptComponente</Text>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>IDADE: {idade}</Text>
      <Text style={styles.texto}>IDADE+40: {idade + 40}</Text>
      <Text style={styles.texto}>18+: {checarMaioridade()}</Text>


      <Button title='enviar' onPress={alerta}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})