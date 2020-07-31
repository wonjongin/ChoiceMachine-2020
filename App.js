// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import Details from './src/screens/Details';
import FoodToday from './src/screens/FoodToday';
import Information from './src/screens/Information';
import VarNameSel from './src/screens/VarNameSel';
import BlindBox from './src/screens/BlindBox';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="선택장애" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="오늘 뭐먹지??" component={FoodToday} />
        <Stack.Screen name="앱 정보" component={Information} />
        <Stack.Screen name="변수 이름 뭐하지??" component={VarNameSel} />
        <Stack.Screen name="숫자 뽑기" component={BlindBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
