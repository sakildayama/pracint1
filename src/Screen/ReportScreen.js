import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {IconPath, colors, ImagePath} from '../assest/Index';
import React from 'react';

const ReportScreen = () => {
  const data = [
    {text: 5, name: 'Total'},
    {text: 3, name: 'Taken'},
    {text: 1, name: 'Missed'},
    {text: 1, name: 'Snoozed'},
  ];

  const DigitData = ({item}) => {
    return (
      <>
        <View
          style={{
            alignItems: 'center',
            borderWidth:1,
            borderColor:"white",
            elevation:1,
            width: 50,
            height: 50,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 30, color: 'blue'}}>{item.text}</Text>
          <Text style={{fontWeight: '600', marginTop: 10}}>{item.name}</Text>
        </View>
      </>
    );
  };

  const CheckHistory = [
    {Number: 1, day: 'SUN'},
    {Number: 2, day: 'MON'},
    {Number: 3, day: 'TUE'},
    {Number: 4, day: 'WED'},
    {Number: 5, day: 'THU'},
    {Number: 6, day: 'FRI'},
  ];
  const CheckHistoryItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, marginBottom: 3}}>{item.day}</Text>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 40,
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F7F5',
            elevation: 1,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.Number}</Text>
        </View>
      </View>
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
      Image: IconPath.water2,
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
          <Text style={{color:colors.black, marginRight: 25}}>
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
      <Text style={styles.report_Text}>Report</Text>
      <ScrollView>
        <View style={styles.TodayReport_View}>
          <Text style={styles.report_Text}>Today'Report</Text>

          <FlatList renderItem={DigitData} horizontal data={data} />
        </View>
        <View
          style={{
            elevation: 1,
            // borderWidth: 1,
            width: '95%',
            height: 100,
            marginTop: 10,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '70%',
              height: 100,
              paddingHorizontal: 10,
              padding: 10,
            }}>
            <Text style={styles.CheckDeshBoard}>Check Dashboard</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>
              Here you will find evrythink related to your active and past
              medicines
            </Text>
          </View>
          <View
            style={{
              width: '30%',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={styles.Imagegoogle} source={IconPath.google} />
          </View>
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: '600', color: 'black', fontSize: 18}}>
            Check History
          </Text>
          <Image style={styles.ImageSearch_mic} source={IconPath.greaterthan} />
        </View>

        <View style={{paddingVertical: 15}}>
          <FlatList
            data={CheckHistory}
            renderItem={CheckHistoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.Morning_Text}>Morning 08:00 am </Text>

        <FlatList data={data2} renderItem={MorningSchedule} />
      </ScrollView>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  report_Text: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 10,
  },
  TodayReport_View: {
    borderWidth: 1,
    borderColor:"white",
    height: 150,
    elevation: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  Imagegoogle: {
    width: 60,
    height: 60,
  },
  ImageSearch_mic: {
    width: 45,
    height: 45,
  },
  CheckDeshBoard: {
    fontWeight: '600',
    color: 'black',
    fontSize: 25,
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
  InputIcons: {
    width: 35,
    height: 35,
    tintColor: 'green',
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
});
