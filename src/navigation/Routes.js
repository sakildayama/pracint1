import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../Screen/SignIn';
import Home from '../Screen/Home';
import AddMedicines from '../Screen/AddMedicines';
import ReportScreen from '../Screen/ReportScreen';
import Profile from '../Screen/Profile';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    
       <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="AddMedicines" component={AddMedicines} options={{headerShown:false}} />
          <Stack.Screen name="ReportScreen" component={ReportScreen} options={{headerShown:false}} />
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})



