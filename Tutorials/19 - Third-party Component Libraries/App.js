/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import {Icon} from 'react-native-elements'

const bottomGutter = 24, marginSize = 2
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height - bottomGutter

const ImageElement = (props) => (
  <Image
    style={styles.image}
    source={{uri: props.imageUrl}}
  >
    {props.children}
  </Image>
)

const Button = (props) => (
  <TouchableOpacity
    style={[styles.button, props.style]}
    onPress={props.onPress}
  >
    <Icon
      name={`chevron-${props.name}`}
      color='white'
      size={50}
    />
  </TouchableOpacity>
)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        'https://c1.staticflickr.com/5/4484/37935928706_c30a0d296f.jpg',
        'https://farm5.staticflickr.com/4474/37279919194_8a9853b587_z_d.jpg',
        'https://farm5.staticflickr.com/4506/37988842021_64dec3dbcd_z_d.jpg',
        'https://farm5.staticflickr.com/4481/37935938066_76d35e2ef5_z_d.jpg',
        'https://farm5.staticflickr.com/4485/37988849811_3ab182a319_z_d.jpg',
        'https://farm5.staticflickr.com/4486/37988852751_cf7fccea36_z_d.jpg',
        'https://farm5.staticflickr.com/4481/37088026713_9b6f763697_z_d.jpg',
      ],
      current: 1
    }
  }

  goLeft = () => {
    this.setState({
      current: this.state.current === 0 ? this.state.images.length - 1 : this.state.current - 1
    })
  }

  goRight = () => {
    this.setState({
      current: this.state.current === this.state.images.length - 1 ? 0 : this.state.current + 1
    })
  }

  render() {
    const image = this.state.images[this.state.current]
    return (
      <View style={styles.container}>
        <ImageElement imageUrl={image}>
          <Button
            name="left"
            style={{left:0}}
            onPress={this.goLeft}
          />
          <Button
            name="right"
            style={{right:0}}
            onPress={this.goRight}
          />
        </ImageElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width - (2 * marginSize),
    height: height - (2 * marginSize),
    margin: marginSize
  },
  button: {
    position: 'absolute',
    width: width / 10,
    height: height / 10,
    top: height / 2 - height / 10,
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
