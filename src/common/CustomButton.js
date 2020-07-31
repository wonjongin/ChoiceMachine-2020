import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CustomButton extends Component {
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#000',
    titleColor: '#fff',
    width: '95%',
    height: '10%',
    textSize: 15,
    onPress: () => null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: this.props.buttonColor,
            width: this.props.width,
            height: this.props.height,
          },
        ]}
        onPress={this.props.onPress}>
        <Text
          style={[
            styles.title,
            {
              color: this.props.titleColor,
              fontSize: Number(this.props.textSize),
            },
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 15,
  },
});
