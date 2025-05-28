// screens/ListaProdutosScreen.jsx
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Card } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => {
        setProdutos(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [categoria]);

 if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
 }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
          <Card style={{ padding: 16, margin: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>Preço: R$ {item.price}</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}