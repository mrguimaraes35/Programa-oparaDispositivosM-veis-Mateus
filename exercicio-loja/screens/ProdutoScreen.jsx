// screens/ProdutoScreen.jsx
import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { Text, Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => {
        setProduto(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [idProduto]);

 if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
 }

  return (
    <ScrollView style={{ padding: 16 }}>
      <Card>
        <Card.Cover source={{ uri: produto.images[0] }} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Text style={{ fontSize: 24, marginVertical: 8 }}>Preço: R$ {produto.price}</Text>
          <Button mode="contained" onPress={() => alert('Comprar')}>
            Comprar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}