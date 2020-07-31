import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

function Information({navigation}) {
  const ver = '0.0.1';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>선택장애</Text>
        {/* <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
        <Image style={styles.logo} source={require('../../img/logo.png')} />
        <Text style={styles.description}>ver: {ver}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scroll: {marginHorizontal: 20},
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginVertical: 20,
    fontSize: 48,
    textAlign: 'center',
  },
  description: {fontSize: 20, color: '#666666'},
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default Information;
