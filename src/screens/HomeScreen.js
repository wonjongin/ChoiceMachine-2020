import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import CustomButton from '../common/CustomButton';

// class HomeScreen extends Component {
//   // goToFoodToday = () => {
//   //   // navigation.navigate('Details');
//   //   const navigationRef = React.useRef(null);
//   //   navigationRef.current?.navigate('Details');
//   // };
//   render() {
//     const {navigation} = this.props;

//     return (
//       <View style={styles.container}>
//         {/* <Text style={styles.title}>Home Screen</Text> */}
//         <Button title="Go to Details!!" onPress={() => alert('hi')} />
//         {/* <CustomButton
//           buttonColor={'#000000'}
//           title={'오늘 뭐먹지??'}
//           // onPress={() => alert('회원가입 버튼')}
//           onPress={this.props.navigation.navigate('Details')}
//           style={styles.button}
//         /> */}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     width: '95%',
//     height: '10%',
//     // backgroundColor: '#DDDDDD',
//     //padding: 10,
//     //marginBottom: 10,
//   },
// });

// // export default function (props) {
// //   const navigation = useNavigation();

// //   return <HomeScreen navigation={navigation} />;
// // }

// export default HomeScreen({navigation}){
//   return(
//     <HomeScreen/>
//     <CustomButton
//           buttonColor={'#000000'}
//           title={'오늘 뭐먹지??'}
//           onPress={() => navigation.navigate('Details')}
//           style={styles.button}
//         />
//   );
// }

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.desciption}>
        여러분의 결정을 도와줄 친구들을 만나 볼까요??
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('오늘 뭐먹지??')}>
        <Text style={styles.buttonTitle}>오늘 뭐먹지??</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('변수 이름 뭐하지??')}>
        <Text style={styles.buttonTitle}>변수 이름 뭐하지??</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('숫자 뽑기')}>
        <Text style={styles.buttonTitle}>숫자 뽑기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('앱 정보')}>
        <Text style={styles.buttonTitle}>앱 정보</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 20,
  },
  desciption: {fontSize: 16},
  button: {
    width: '95%',
    height: '10%',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 5,
        },
      },
      android: {
        elevation: 10,
      },
    }),
  },
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
