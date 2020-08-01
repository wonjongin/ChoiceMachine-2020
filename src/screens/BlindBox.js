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

class BlindBoxClass extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false, startNumber: 0, endNumber: 1, res: 0};
  }

  _showResult = () => {
    this.setState({
      res: Math.floor(
        Math.random() * (this.state.endNumber - this.state.startNumber) +
          this.state.startNumber,
      ),
    });
    this.setState({clicked: true});
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          value={this.state.startNumber}
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="시작 숫자를 입력하세요!"></TextInput>
        <TextInput
          style={styles.input}
          value={this.state.endNumber}
          returnKeyType="done"
          keyboardType="numeric"
          placeholder="마지막 숫자를 입력하세요!"></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._showResult}>
          <Text style={styles.buttonTitle}>뽑기!!</Text>
        </TouchableOpacity>

        {this.state.clicked ? (
          <Text style={styles.result}>{this.state.res}</Text>
        ) : (
          <Text style={styles.result}>nan</Text>
        )}

        <Text style={styles.result}>
          {this.state.res == NaN ? 'nan' : this.state.res}
        </Text>
      </View>
    );
  }
}

function BlindBox({navigation}) {
  return <BlindBoxClass />;
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
    borderRadius: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BlindBox;
