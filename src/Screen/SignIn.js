import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, IconPath} from '../assest/Index';

const SignIn = ({navigation}) => {
  const [eye, setEye] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={styles.ImageView}>
        <Image style={styles.ImageLogo} source={IconPath.healthlogo} />
        <View>
          <Text style={styles.Adhi_Text}>Adhicine</Text>
        </View>
      </View>
      <Text style={styles.SignInText}>Sign In</Text>
      <View style={styles.Iput_Main_View}>
        <View style={styles.IconsInputView}>
          <Image style={styles.InputIconsAt} source={IconPath.at} />
          <TextInput
            style={{paddingHorizontal: 30}}
            placeholder="Enter Your Email"
          />
        </View>
        <View style={styles.IconsInputview2}>
          <Image style={styles.InputIconsLockEye} source={IconPath.lock} />
          <TextInput
            style={{paddingRight: 80}}
            placeholder="Enter Your Password"
          />
          <TouchableOpacity onPress={()=>setEye(!eye)}>
            <Image
              style={styles.InputIconsLockEye}
              source={eye ?IconPath.eye: IconPath.offEye }
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 10, alignSelf: 'flex-end'}}>
          <Text style={{color: colors.primary, fontWeight: '600'}}>
            Forget Password?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTab')}
          style={styles.button}>
          <Text style={styles.Button_TEXT}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.OR_Text_View}>
        <View style={{borderBottomWidth: 1, width: '40%'}}></View>
        <Text> OR </Text>
        <View style={{borderBottomWidth: 1, width: '40%'}}></View>
      </View>
      <View style={styles.Continue_Google_View}>
        <Image style={styles.InputIcons} source={IconPath.google} />
        <Text style={styles.Google_TEXT}>Continue With Google</Text>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <Text style={{fontWeight: '600', color: colors.black}}>
          New to Adhicine?{' '}
          <Text style={{color: colors.primary, fontWeight: '600'}}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  ImageView: {
    // borderWidth:1,
    width: '100%',
    // height: 200,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageLogo: {
    width: 100,
    height: 100,
    //  marginTop:10,
  },
  Adhi_Text: {
    fontWeight: '600',
    color: colors.primary,
    fontSize: 25,
  },

  SignInText: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.black,
    // marginHorizontal: 10,
    paddingHorizontal: 35,
  },
  InputIcons: {
    width: 20,
    height: 20,
    // tintColor:"lime"
  },
  InputIconsAt: {
    width: 20,
    height: 20,
    tintColor: 'lime',
  },
  Iput_Main_View: {
    paddingHorizontal: 10,
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button_TEXT: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  Google_TEXT: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
  OR_Text_View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
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
  },
  IconsInputView: {
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconsInputview2: {
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  InputIconsLockEye: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
});
