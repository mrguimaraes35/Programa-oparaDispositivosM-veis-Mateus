import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function Perfil(props){

   console.log("Propriedades -> "  , props)


    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Perfil</Text>
        <Text style={styles.texto}>NOME: {props.nome}</Text> 
        <Text style={styles.texto}>IDADE: {props.idade} </Text> 
        <Text style={styles.texto}>TELEFONE: {props.telefone}</Text>
        <Text style={styles.texto}>EMAIL: {props.email}</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 15,
        fontWeight: 600
    }
})
