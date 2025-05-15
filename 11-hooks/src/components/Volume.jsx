import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'

export default function Volume() {

const [volume, setVolume] = useState(0)


  function aumentar() {
     setVolume(volume + 1)
  }
   function diminuir() {
    setVolume(volume - 1)


   }



  return (
    <View>
        <Card style={{margin: 5}}>
            <Card.content>
                <Text>Componente Volume</Text>
                <Text variant='displayMedium'>Volume: </Text>
            </Card.content>
            <Card.Actions>

                <Button>Menos</Button>
                <Button>Mais</Button>
            </Card.Actions>

        </Card>
    </View>
  )
}

const styles = StyleSheet.create({})