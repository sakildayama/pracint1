import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';
import CustomDrawer from '../component/CustomDrawer';
import Home from '../Screen/Home';
const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
          <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=> <CustomDrawer {...props}/>}>
            <Drawer.Screen  name="BottomTab" component={BottomTab} />
          </Drawer.Navigator>
      );
}

export default Drawer

const styles = StyleSheet.create({})



    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>

