// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const GetApi = () => {
//   const [data, setdata] = useState([]);

//   const get_Image = async () => {
//     let data = await fetch('https://jsonplaceholder.typicode.com/photos');
//     let xyz = await data.json();
//     setdata(xyz);
//   };
//   useEffect(() => {
//     get_Image();
//   }, []);

//   return (
//     <View>
//       <TouchableOpacity>
//         <Text>getApi_Image</Text>
//       </TouchableOpacity>

//       <View>
//         <FlatList
//           data={data}
//           renderItem={({item, index}) => {
//             if (index % 2 == 0) {
//               return;
//             }

//             return (
//               <View>
//                 <Text>{item?.id}</Text>
//                 <Text>{item?.title}</Text>
//                 <Image
//                   source={{uri: item?.url}}
//                   style={{height: 300, width: 370, borderWidth: 1}}
//                 />
//               </View>
//             );
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default GetApi;

