import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Component1/>
        <Component2/>
      </View>
    );
  }
}
