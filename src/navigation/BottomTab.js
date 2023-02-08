import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import ReportScreen from '../Screen/ReportScreen';
import {colors, IconPath} from '../assest/Index';
import AddMedicines from '../Screen/AddMedicines';

const Tab = createBottomTabNavigator();
const CustomTabBarBotton = ({children, style, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        ...style.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 100,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
        // tabBarInactiveTintColor:'red',
        // tabBarActiveBackgroundColor:'gray',

        tabBarLabelStyle: 'green',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.CARTIMAGE,
                {tintColor: focused ? 'green' : colors.primary},
              ]}
              source={IconPath.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddMedicines"
        component={AddMedicines}
        options={{
          // tabBarShowLabel:false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={{marginTop: 10}}>
              <Image style={styles.PluaImage} source={IconPath.plus} />
            </View>
          ),
          tabBarButton: props => <CustomTabBarBotton {...props} />,
        }}
      />
      <Tab.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.CARTIMAGE,
                {tintColor: focused ? 'green' : colors.primary},
              ]}
              source={IconPath.signal}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  CARTIMAGE: {
    width: 30,
    height: 30,
    tintColor: 'blue',
  },
  PluaImage: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
});
