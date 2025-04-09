
import { StyleSheet, Text, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { Text, Card, Title, Paragraph } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <View>
      <Text variant= 'headlineSmall'  style={{ fontWeight: 'bold' }}>Inicio</Text>
       
      <Card>
        <Card.Content>
          <Title>Um titulo</Title>
          <Paragraph>mvvtunvuinvununuivnuinuinununuhuiihnruihntvruivht
            jvurtjhvurjhvujhtuirbijhuhguhuighbuhughbughbugubhughug
            jfgvbughbguinbuignbuignbung
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: ''}}/>
      </Card>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})