import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import Home from '../screens/Home'
import Posts from '../screens/Posts'
import feed from '../screens/Feed'


const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
     <Stack.Navigator>
         
         <StackRoutes.Screen name='Home' component={Home} />
         <StackRoutes.Screen name='Feed' component={feed} />
         <StackRoutes.Screen name='Posts' component={Posts} />

     </Stack.Navigator>
  )
}
