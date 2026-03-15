import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/authScreens/Login';
const AuthStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  )
}

export default AuthStack

