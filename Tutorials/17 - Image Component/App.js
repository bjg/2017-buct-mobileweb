/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

let images = [
  require('./img/castle.png'),
  require('./img/city.png'),
  require('./img/field.png'),
  require('./img/mountain.png'),
  require('./img/underwater.png'),
  require('./img/beach.png'),
]

const ImageElement = ({index}) => (
  <Image
    style={styles.image}
    source={images[index]}
  />
)

const App = () => (
  <View style={styles.container}>
    <ImageElement index={0} />
    <ImageElement index={1} />
    <ImageElement index={2} />
    <ImageElement index={3} />
    <ImageElement index={4} />
    <ImageElement index={5} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },
  image: {
    width: Dimensions.get('window').width / 2 - 4,
    height: Dimensions.get('window').height / 3 - 8,    
    margin: 2,
    padding: 2,
    backgroundColor: '#fff'
  }
})

export default App;