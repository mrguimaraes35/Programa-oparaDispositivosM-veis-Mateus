import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Avatar } from 'react-native-paper';

export default function Jogadore(props) {
    const{nome, imagem, numeros}=props
  return (
    <Card.Title
    style={{ margin:10 }}
    title={nome}
    subtitle={`Numero: ${numeros}`} 
    left={(props) => < Avatar.Image {...props} source={{ uri: imagem}} />}
    />
  )
}

const styles = StyleSheet.create({})