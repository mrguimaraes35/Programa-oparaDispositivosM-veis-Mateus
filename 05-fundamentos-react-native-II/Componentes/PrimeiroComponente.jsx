import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.texto}>Primeiro Componente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'red',
        padding: 20,
        borderWidth: 10
    }, 
    texto: {
        fontSize:20,
        fontWeight:600
    }
})