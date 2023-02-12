import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, ImagePath } from '../assest/Index'

const CustomDrawer = () => {
  return (
    <View style={{backgroundColor:"#f0f8ff",flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image style={{width:210,height:210,borderRadius:100,}} source={ImagePath.doctors}/>
      <Text style={{fontSize:40 , fontWeight:"600",color:colors.primary}}>HEALTH</Text>
    
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})