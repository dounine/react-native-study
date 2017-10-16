import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navs from './src/navigation/Navs'
// import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <Navs></Navs>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
