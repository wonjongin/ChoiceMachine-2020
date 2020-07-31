import * as React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const select = (min, max) => {
  var ran = Math.floor(Math.random() * (max - min) + min);
};

function FoodToday({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableOpacity style={styles.button} onPress={select(0, 10)}>
        <Text style={styles.buttonTitle}>오늘 뭐먹지??</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonTitle: {fontSize: 20},
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
export default FoodToday;
