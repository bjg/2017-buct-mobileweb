/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const App = () => (
  <View>
    <Text style={styles.normal}>Normally-sized text</Text>
    <Text style={styles.bigger}>Bigger text</Text>
    <Text style={styles.biggest}>Biggest text</Text>
    <View style={styles.box}>
      <Text style={[styles.bigger, styles.biggest]}>Two styles...</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  normal: {
    color: 'red'
  },
  bigger: {
    color: 'blue',
    fontSize: 20
  },
  biggest: {
    //color: 'green',
    fontWeight: 'bold',
    fontSize: 50,
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    alignItems: 'center'
  }
});

export default App;
