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
import GetApi from '../Screen/GetApi';
import Drawer from './Drawer';
import GoogleMap from '../Screen/GoogleMap';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    
       <NavigationContainer>
        <Stack.Navigator  >
        <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="AddMedicines" component={AddMedicines} options={{headerShown:false}} />
          <Stack.Screen name="ReportScreen" component={ReportScreen} options={{headerShown:false}} />
          <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
          <Stack.Screen name="GoogleMap" component={GoogleMap} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})



