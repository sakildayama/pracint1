import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, IconPath, ImagePath} from '../assest/Index';

const Profile = ({navigation}) => {
  const data = [
    {
      id: 1,
      Image: IconPath.bell,
      name: 'Notification',
      Text: 'Check your medicine notification',
    },
    {id: 2, Image: IconPath.volume, name: 'Sound', Text: 'Ring Slient Vibrate'},
    {
      id: 3,
      Image: IconPath.user,
      name: 'Manage Your Acount',
      Text: 'Password , Email Id , Phone Number',
    },
    {
      id: 4,
      Image: IconPath.bell,
      name: 'Notification',
      Text: 'Check your medicine notification ',
    },
    {
      id: 5,
      Image: IconPath.bell,
      name: 'Notification',
      Text: 'Check your medicine notification ',
    },
  ];
  const Settingitem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => console.warn(item.name)}
        style={[styles.Profile_View, {marginBottom: 5, paddingVertical: 5}]}>
        <View style={styles.box}>
          <Image style={styles.Imagebell} source={item.Image} />
        </View>
        <View style={styles.box2}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {item.name}
          </Text>
          <Text style={{color: 'black'}}>{item.Text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, borderColor: colors.WHITE}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Image style={styles.Imagelessthan} source={IconPath.lessthan} />
      </TouchableOpacity>

      <View style={[styles.Profile_View, {marginTop: 10}]}>
        <View style={styles.box}>
          <Image style={styles.Imagewoman} source={IconPath.girlsprofile} />
        </View>
        <View style={styles.box2}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Take Care!</Text>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25}}>
            Richa Bose
          </Text>
        </View>
      </View>
      <View style={styles.BottomWidthView}></View>
      <ScrollView>
        <Text style={styles.SettingText}>Setting</Text>
        <FlatList data={data} renderItem={Settingitem} />
        <Text style={styles.SettingText}>Device</Text>
        <View style={styles.Device_Container}>
          <View style={styles.Device_Container_box1}>
            <Image style={styles.Imagelessthan} source={IconPath.volume} />
            <View style={{marginTop: 6}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
                Connect
              </Text>
              <Text style={{color: 'black', fontSize: 14}}>
                Bluetooth Wi Fi
              </Text>
            </View>
          </View>
          <View style={styles.Device_Container_box2}>
            <Image style={styles.Imagelessthan} source={IconPath.volume} />
            <View style={{marginTop: 6}}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
                Sound option
              </Text>
              <Text style={{color: 'black', fontSize: 14}}>
                Ring Slient Vibrate
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.SettingText}>Caretakers:03</Text>
        <View style={styles.Device_Container}>
          <View style={styles.Caretakers_Container}>
            <Image style={styles.ProfileImage} source={IconPath.prifleimage} />
            <Image style={styles.ProfileImage} source={ImagePath.doctors} />
            <Image style={styles.ProfileImage} source={ImagePath.woman} />
            <Image style={styles.ProfileImage} source={IconPath.plus1} />
          </View>
        </View>
        <Text style={styles.SettingText}>Doctor</Text>
        <View style={styles.Device_Container}>
          <View style={styles.Doctor_Container}>
            <TouchableOpacity>
            <Image style={styles.PlusImage} source={IconPath.plusBlue} />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', color: 'black', marginTop: 10}}>
              Add Your Doctor
            </Text>
            <Text style={{color: 'black'}}>
              Or Use{' '}
              <Text style={{color: 'orange', fontWeight: '600'}}>
                Invite Link
              </Text>
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30, marginTop: 30}}>
          <Text style={styles.Privacy_Text}>Privecy Policy</Text>
          <Text style={styles.Privacy_Text}>Term of Use</Text>
          <Text style={styles.Privacy_Text}>Rate Use</Text>
          <Text style={styles.Privacy_Text}>Share</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.Continue_Google_View}>
          <Text style={styles.Google_TEXT}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Imagelessthan: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginHorizontal: 10,
  },
  Profile_View: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  box: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: '70%',
    height: 60,
    justifyContent: 'center',
  },
  Imagewoman: {
    width: 60,
    height: 60,
  },
  SettingText: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
    marginTop: 10,
  },
  Setting_View: {
    borderWidth: 1,
    height: 50,
  },
  Imagebell: {
    width: 30,
    height: 30,
  },
  Device_View: {
    width: '90%',
    height: 100,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: colors.aliceblue,
  },
  BottomWidthView: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderColor: 'gray',
    marginBottom: 20,
    marginTop: 10,
  },
  Device_Container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 5,
    marginTop: 10,
    backgroundColor: colors.lightsteelblue,
  },
  Device_Container_box1: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
  },
  Device_Container_box2: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: 10,
  },
  Caretakers_Container: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 5,
    marginTop: 10,
    backgroundColor: colors.lightsteelblue,
  },
  Doctor_Container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 5,
    marginTop: 10,
    backgroundColor: colors.lightsteelblue,
  },
  ProfileImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 30,
  },
  PlusImage: {
    width: 50,
    height: 50,
  },
  Privacy_Text: {color: 'black', fontWeight: '600', marginTop: 20},
  Continue_Google_View: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '85%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Google_TEXT: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
});
