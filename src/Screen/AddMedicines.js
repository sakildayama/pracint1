import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {IconPath, colors} from '../assest/Index';
import {Slider} from '@miblanchard/react-native-slider';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
const AddMedicines = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [open1, setOpen1] = useState(false);

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);

  const data = [
    {label: 'Every Day', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const renderLabel1 = () => {
    if (value1 || isFocus1) {
      // return (
      //   <Text style={[styles.label, isFocus && { color: 'blue' }]}>
      //     Dropdown label
      //   </Text>
      // );
    }
    return null;
  };

  const renderLabel2 = () => {
    if (value2 || isFocus2) {
      // return (
      //   <Text style={[styles.label, isFocus && { color: 'blue' }]}>
      //     Dropdown label
      //   </Text>
      // );
    }
    return null;
  };

  const dataForCompartment = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dataForColour = [
    'pink',
    'purple',
    'red',
    'green',
    'orange',
    'aqua',
    'yellow',
  ];
  const dataForTypes = [
    {name: 'Tablet', image: IconPath.tablets},
    {name: 'Capsule', image: IconPath.capsule},
    {name: 'medicalreport', image: IconPath.medicalreport},
    {name: 'doctor', image: IconPath.doctor},
    {name: 'Medicalkit', image: IconPath.medicalkit},
  ];

  const Compartment = ({item}) => {
    return (
      <TouchableOpacity style={styles.Comparment_item_view}>
        <Text style={styles.Compartment}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const Colour = ({item}) => {
    return (
      <View
        style={[
          styles.colour_item_view,
          {
            backgroundColor: item,
            borderColor: item,
          },
        ]}></View>
    );
  };
  const Types = ({item}) => {
    return (
      <View style={styles.type_item_view}>
        <Image style={styles.ImageTpye} source={item.image} />
        <Text style={{fontWeight: '600'}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.AddMedicines_View}>
        <Image style={{width: 25, height: 25}} source={IconPath.lessthen} />
        <Text style={styles.AddMedicinesText}>Add Medicines</Text>
      </View>
      <View style={styles.quantity_intput}>
        <Image style={styles.ImageSearch_mic} source={IconPath.search} />
        <TextInput placeholder="Search Medicines Name" />
        <Image style={styles.ImageSearch_mic} source={IconPath.mic} />
      </View>
      <ScrollView>
        <Text style={styles.Compartment_Color_Type}>Compartment</Text>

        <View style={{marginLeft: 15, marginTop: 10}}>
          <FlatList
            data={dataForCompartment}
            horizontal
            renderItem={Compartment}
            ho
          />
        </View>
        <Text style={styles.Compartment_Color_Type}>Colour</Text>
        <View>
          <FlatList horizontal data={dataForColour} renderItem={Colour} />
        </View>

        <View>
          <Text style={styles.Compartment_Color_Type}>Type</Text>
          {/* <View style={{marginLeft: 15, marginTop: 10}}> */}
          <FlatList data={dataForTypes} horizontal renderItem={Types} />
          {/* </View> */}
        </View>
        <View>
          <Text style={styles.Compartment_Color_Type}> Quantity </Text>
        </View>
        <View style={styles.mainQuantityView}>
          <View style={styles.quantity_intput_view1}>
            <Text>Take 1/2 Pill</Text>
          </View>
          <View style={styles.quantity_intput_view2}>
            <Text style={{fontSize: 30}}>-</Text>
          </View>
          <View style={styles.quantity_intput_view3}>
            <Text style={{fontSize: 30, color: 'white'}}>+</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: 'black',
            }}>
            Total Count
          </Text>
          <Text style={{padding: 5, paddingHorizontal: 20, elevation: 1}}>
            {Math.floor(count) < 10
              ? Math.floor(count) == 0
                ? Math.floor(count)
                : '0' + Math.floor(count)
              : Math.floor(count)}
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Slider
            value={count}
            minimumValue={0}
            maximumValue={100}
            onValueChange={value => setCount(value)}
            thumbStyle={{
              backgroundColor: colors.primary,
              width: 15,
              height: 15,
            }}
            trackStyle={{backgroundColor: colors.grey, height: 3}}
            trackClickable={true}
            minimumTrackTintColor={colors.primary}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignSelf:'center',
            paddingHorizontal: 20,
          }}>
          <Text>01</Text>
          <Text>100</Text>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            // marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Set Date</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              padding: 7,
              borderRadius: 20,
            }}
            onPress={() => setOpen(true)}>
            <Text style={{color: 'black', marginHorizontal: 15}}>
              {date
                ? date.getDate() +
                  '/' +
                  date.getMonth() +
                  '/' +
                  date.getFullYear()
                : 'Start Date'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '48%',
              alignItems: 'center',
              borderWidth: 1,
              padding: 7,
              borderRadius: 20,
            }}
            onPress={() => setOpen1(true)}>
            <Text style={{color: 'black', marginHorizontal: 15}}>
              {date1
                ? date1.getDate() +
                  '/' +
                  date1.getMonth() +
                  '/' +
                  date1.getFullYear()
                : 'Start Date'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View>
          <DatePicker
            modal
            open={open1}
            date={date1}
            onConfirm={date1 => {
              setOpen1(false);
              setDate1(date1);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
          />
        </View>
        <Text style={styles.Compartment_Color_Type}>Frequency of Days</Text>
        {/* <View style={styles.Frequency_Input}> */}
        {/* <TextInput placeholder='EveryDay' />
        <Image style={styles.ImageSearch_mic} source={IconPath.greaterthan} /> */}
        <View style={styles.container}>
          {renderLabel1()}
          <Dropdown
            style={[styles.dropdown, isFocus1 && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus1 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value1}
            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChange={item => {
              setValue1(item.value);
              setIsFocus1(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? 'blue' : 'black'}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />
        </View>

        {/* </View> */}
        <Text style={styles.Compartment_Color_Type}>How many times a Day</Text>
        <View style={styles.container}>
          {renderLabel2()}
          <Dropdown
            style={[styles.dropdown, isFocus2 && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus2(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? 'blue' : 'black'}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />
        </View>
        <View style={styles.Frequency_Input}>
          <Image style={styles.ImageSearch_mic} source={IconPath.history} />
          <TextInput style={{width:'70%'}} placeholder="Dose 1" />
          <Image style={styles.ImageSearch_mic} source={IconPath.greaterthan} />
        </View>
        <View style={styles.Frequency_Input}>
          <Image style={styles.ImageSearch_mic} source={IconPath.history} />
          <TextInput style={{width:'70%'}}  placeholder="Dose 2" />
          <Image style={styles.ImageSearch_mic} source={IconPath.greaterthan} />
        </View>
        <View style={styles.Frequency_Input}>
          <Image  style={styles.ImageSearch_mic} source={IconPath.history} />
          <TextInput style={{width:'70%'}} placeholder="Dose 3" />
          <Image style={styles.ImageSearch_mic} source={IconPath.greaterthan} />
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 10, alignSelf: 'center'}}>
          <View style={styles.Three_Input_View}>
            <Text>Before Food</Text>
          </View>
          <View style={styles.Three_Input_View}>
            <Text>After Food</Text>
          </View>
          <View style={styles.Three_Input_View}>
            <Text>Before Sleep</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.Button_TEXT}>Sign In</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMedicines;

const styles = StyleSheet.create({
  AddMedicines_View: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  AddMedicinesText: {fontSize: 20, fontWeight: '600', color: 'black'},
  quantity_intput: {
    borderWidth: 1,
    marginTop: 20,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  ImageSearch_mic: {
    width: 20,
    height: 20,
    tintColor:'gray'
  },

  Compartment_Color_Type: {
    paddingHorizontal: 20,
    fontSize: 15,
    marginTop: 10,
    color: 'black',
    fontWeight: '600',
  },

  mainQuantityView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity_intput_view1: {
    borderWidth: 1,
    width: '70%',
    height: 48,
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity_intput_view2: {
    borderWidth: 1,
    width: '11%',
    height: 45,
    marginTop: 10,
    marginHorizontal: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity_intput_view3: {
    borderWidth: 1,
    width: '8%',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  colour_item_view: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 100,
    height: 50,
    marginLeft: 10,
    marginHorizontal: 5,
    marginTop: 10,
  },
  Comparment_item_view: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  Compartment: {
    fontSize: 25,
  },
  type_item_view: {
    // width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 30,
  },
  ImageTpye: {
    width: 60,
    height: 60,
    tintColor: 'pink',
  },
  Frequency_Input: {
    borderWidth: 1,
    // padding:15,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  Three_Input_View: {
    width: '29%',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    padding: 7,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
  },
  button: {
    borderWidth: 1,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  Button_TEXT: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },

  container: {
    // backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    // zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
