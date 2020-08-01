import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

const _select = (min, max) => {
  var ran = Math.floor(Math.random() * (max - min) + min);
  return ran;
};
function BlindBox({navigation}) {
  var startNumber;
  var endNumber;
  var res;
  res = _select(startNumber, endNumber);
  if (res == NaN) {
    resTitle = <Text style={styles.result}>no input value</Text>;
  } else {
    resTitle = <Text style={styles.result}>{res}</Text>;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={startNumber}
        keyboardType="numeric"
        placeholder="시작 숫자를 입력하세요!"></TextInput>
      <TextInput
        style={styles.input}
        value={endNumber}
        keyboardType="numeric"
        placeholder="시작 숫자를 입력하세요!"></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => null}>
        <Text style={styles.buttonTitle}>뽑기!!</Text>
      </TouchableOpacity>
      {resTitle}

      <Text style={styles.result}>{res == NaN ? 'nan' : res}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonTitle: {alignContent: 'center'},
  button: {
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: '6%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BlindBox;
