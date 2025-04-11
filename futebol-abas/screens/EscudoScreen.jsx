 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 import {Card, Title } from 'react-native-paper'


 const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };
 
  export default function EscudoScreen() {
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: time.escudo }} style={styles.escudo} />
        <Card.Content>
          <Title style={styles.titulo}>{time.nome}</Title>
        </Card.Content>
      </Card>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginTop: 200,
        borderRadius: 16,
        elevation: 6,
      },
      title: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    
      },
      escudo: {  
        width: '100%',  
        height: 290,  
        borderRadius: 20,  
        backgroundColor: '#fff',  
        borderWidth: 2,   
        borderColor: '#000'
    }
    });
    
  