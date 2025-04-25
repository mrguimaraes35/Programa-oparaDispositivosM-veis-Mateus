import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Title, Paragraph, List } from 'react-native-paper';

export default function ReceitaScreen({ route }) {
  const { imagem, tempoPreparo, porcoes, ingredientes, modoPreparo } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image source={{ uri: imagem }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Title style={{ marginTop: 10 }}>Tempo de Preparo: {tempoPreparo}</Title>
      <Paragraph>Porções: {porcoes}</Paragraph>

      <Title style={{ marginTop: 10 }}>Ingredientes</Title>
      {ingredientes.map((item, index) => (
        <List.Item key={index} title={item} left={props => <List.Icon {...props} icon="circle" />} />
      ))}

      <Title style={{ marginTop: 10 }}>Modo de Preparo</Title>
      {modoPreparo.map((item, index) => (
        <List.Item key={index} title={item} left={props => <List.Icon {...props} icon="check" />} />
      ))}
    </ScrollView>
  );
}