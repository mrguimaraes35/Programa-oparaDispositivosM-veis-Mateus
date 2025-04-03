import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import { PaperProvider , Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper'; 
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />


      {
        ListaFrutas.map(
          item => <Text variant='displaySmall'>{item}</Text>
        )
      }

      {
        ListaFrutas.map(
          item=> (
            <View>
              <Text variant='displaySmall'>{}item</Text>
              <Divider style={{height:1}} />
            </View>
          )
        )
      }
     
     <FlatList
     data={ListaFrutas}
     renderItem={({item})} => <Text variant='headLineMediun'>{}item</Text>
    />
      
    </View>
    </PaperProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
