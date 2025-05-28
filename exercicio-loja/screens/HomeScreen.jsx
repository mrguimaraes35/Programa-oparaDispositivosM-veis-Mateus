// screens/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ListaProdutos', { categoria: item })}>
          <Card style={{ padding: 16, margin: 8 }}>
            <Text>{item}</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}