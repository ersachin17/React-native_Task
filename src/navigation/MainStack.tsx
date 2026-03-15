import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductList from '../screens/mainScreen/ProductList';


const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
 <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="MainNavigation" component={ProductList} />     
 </Stack.Navigator>
  )
}

export default RootNavigation

