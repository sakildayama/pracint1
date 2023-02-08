import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IconPath, colors} from '../assest/Index';
import {useNetInfo} from '@react-native-community/netinfo';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const internetState = useNetInfo();
  datesWhitelist = [new Date()];

  useEffect(() => {
    if (internetState.isConnected === false) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [internetState.isConnected]);

  const OpenModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(modalVisible);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '75%',
            elevation: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 220,
          }}>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  width: '100%',
                }}>
                Your Device is not connected
              </Text>
            </View>
            <View style={{alignSelf: 'center', paddingVertical: 10}}>
              <Image
                style={{width: 150, height: 150}}
                source={IconPath.popup}
              />
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Connect your device with
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: '50%',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primary,
                borderBottomLeftRadius: 20,
                marginRight: 1,
              }}>
              <Image
                source={IconPath.bluetooth}
                style={{width: 30, tintColor: '#fff', height: 30}}
              />
            </View>
            <View
              style={{
                width: '50%',
                padding: 10,
                justifyContent: 'center',
                borderBottomRightRadius: 20,
                alignItems: 'center',
                marginLeft: 1,
                backgroundColor: colors.primary,
              }}>
              <Image
                source={IconPath.wifi}
                style={{width: 30, tintColor: '#fff', height: 30}}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const data = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const WeekDay = ({item}) => {
    return (
      <TouchableOpacity style={{paddingHorizontal: 15}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const data2 = [
    {
      id: 1,
      Image: IconPath.water2,
      Text: 'calpol 500mg Tablet',
      day: 'Before Breackfast Day 01',
      ImageBell: IconPath.bell,
      TextTeken: 'Taken',
    },
    {
      id: 2,
      Image: IconPath.medicine,
      Text: 'calpol 500mg Tablet',
      day: 'Before Breackfast Day 01',
      ImageBell: IconPath.bell,
      TextTeken: 'Missed',
    },
  ];
  const MorningSchedule = ({item}) => {
    return (
      <View style={styles.MorningViewList}>
        <View style={styles.box1}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: colors.pink,
            }}>
            <Image style={styles.water} source={item.Image} />
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={{color: colors.black, marginRight: 25}}>
            {item.Text}
          </Text>
          <Text style={{color: colors.black}}>{item.day}</Text>
        </View>
        <View style={styles.box1}>
          <Image
            style={[
              styles.InputIcons,
              {tintColor: item.TextTeken == 'Missed' ? 'red' : 'lime'},
            ]}
            source={item.ImageBell}
          />
          <Text style={{color: colors.black}}>{item.TextTeken}</Text>
        </View>
      </View>
    );
  };
  const data3 = [
    {
      id: 1,
      Image: IconPath.water2,
      Text: 'calpol 500mg Tablet',
      day: 'Before Breackfast Day 01',
      ImageBell: IconPath.bell,
      TextTeken: 'Taken',
    },
  ];
  const Afternoon = ({item}) => {
    return (
      <View style={styles.MorningViewList}>
        <View style={styles.box1}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: colors.mediumpurple,
            }}>
            <Image style={styles.water} source={item.Image} />
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={{color: colors.black, marginRight: 25}}>
            {item.Text}
          </Text>
          <Text style={{color: colors.black}}>{item.day}</Text>
        </View>
        <View style={styles.box1}>
          <Image
            style={[
              styles.InputIcons,
              {tintColor: item.TextTeken == 'Missed' ? 'red' : 'lime'},
            ]}
            source={item.ImageBell}
          />
          <Text style={{color: colors.black}}>{item.TextTeken}</Text>
        </View>
      </View>
    );
  };
  const data4 = [
    {
      id: 1,
      Image: IconPath.water2,
      Text: 'calpol 500mg Tablet',
      day: 'Before Breackfast Day 01',
      ImageBell: IconPath.bell,
      TextTeken: 'Taken',
    },
  ];
  const NigthShift = ({item}) => {
    return (
      <View style={styles.MorningViewList}>
        <View style={styles.box1}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: colors.pink,
            }}>
            <Image style={styles.water} source={item.Image} />
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={{color: colors.black, marginRight: 25}}>
            {item.Text}
          </Text>
          <Text style={{color: colors.black}}>{item.day}</Text>
        </View>
        <View style={styles.box1}>
          <Image
            style={[
              styles.InputIcons,
              {tintColor: item.TextTeken == 'Missed' ? 'red' : 'lime'},
            ]}
            source={item.ImageBell}
          />
          <Text style={{color: colors.black}}>{item.TextTeken}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {OpenModal()}
      <View style={styles.Header_View}>
        <View style={styles.HerryText_View}>
          <Text style={{fontWeight: '600', fontSize: 25, color: colors.black}}>
            Hi Harry!
          </Text>
        </View>

        <View style={styles.HeaderIconView}>
          <Image style={styles.InputIcons} source={IconPath.BETTERY} />
          <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <Image style={styles.InputIcons2} source={IconPath.prifleimage} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 15,
          fontSize: 15,
          fontWeight: '600',
          color: colors.black,
        }}>
        5 Medicines Left
      </Text>
      <View>
        <View style={{paddingVertical: 20}}>
          <FlatList
            data={data}
            renderItem={WeekDay}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        {/* <CalendarStrip
          scrollable
          style={{padding: 30}}
          calendarColor={'#FFF'}
          calendarHeaderStyle={{color: '#000'}}
          dateNumberStyle={{color: '#000'}}
          dateNameStyle={{color: '#000'}}
          iconContainer={{flex: 0.1}}
        /> */}
        <Text style={styles.Morning_Text}>Morning 08:00 am </Text>

        <FlatList data={data2} renderItem={MorningSchedule} />

        <Text style={styles.Morning_Text}>Afternoon 02:00 pm </Text>

        <FlatList data={data3} renderItem={Afternoon} />

        <Text style={styles.Morning_Text}>Night 09:00 pm </Text>

        <FlatList data={data4} renderItem={NigthShift} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Header_View: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  InputIcons: {
    width: 35,
    height: 35,
    // tintColor: 'green',
  },
  water: {
    width: 35,
    height: 35,
    tintColor: 'white',
  },
  InputIcons2: {
    width: 35,
    height: 35,
  },
  HerryText_View: {
    // borderWidth:1,
    width: '70%',
    paddingHorizontal: 5,
    marginTop: 25,
  },
  HeaderIconView: {
    width: '30%',
    marginTop: 25,
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  Morning_Text: {
    color: colors.black,
    paddingHorizontal: 15,
    fontSize: 20,
    // marginTop:-29,
  },

  MorningViewList: {
    backgroundColor: '#f0f8ff',
    // borderWidth: 1,
    width: '92%',
    height: 100,
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    elevation: 3,
  },
  box1: {
    width: '25%',
    height: 100,
    //  borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    width: '50%',
    height: 100,
    //  borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // box1: {
  //   width: '25%',
  //   height: 100,
  //   //  borderWidth: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
