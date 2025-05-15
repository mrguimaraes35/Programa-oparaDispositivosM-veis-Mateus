// screens/MegaSenaScreen.jsx
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, List } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerarJogo() {
    const numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const jogo = Array.from(numeros).sort((a, b) => a - b);
    setJogoGerado(jogo);
    setJogosMegaSena(prev => [...prev, jogo]);
  }

  return (
    <View style={styles.container}>
      <Button style={styles.botao} mode="contained" onPress={gerarJogo}>
        Gerar Jogo
      </Button>
      
      <Text style={styles.titulo}>Último jogo:</Text>
      <Text style={styles.jogo}>{jogoGerado.join(', ')}</Text>
      
      <Text style={styles.titulo}>Histórico de jogos:</Text>
      <FlatList
        style={styles.lista}
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <List.Item
            style={styles.itemLista}
            title={item.join(', ')}
            titleStyle={styles.tituloItem}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // fundo branco
  },
  botao: {
    marginBottom: 20,
    alignSelf: 'center', // centraliza o botão
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  jogo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4CAF50', // verde como destaque
    textAlign: 'center', // centralizar o texto
  },
  lista: {
    marginTop: 20,
  },
  itemLista: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  tituloItem: {
    fontSize: 16,
    fontWeight: '600',
  },
});