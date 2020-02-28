/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PanResponder,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const headerHeight = 100;
const THRESHOLD_HEADER = 0;
const THRESHOLD_FOOTER = -100;

const headerColor = 'deepskyblue';
const footerColor = 'lightsteelblue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset();
        // this.animation.setValue({x: 0, y: 0});
      },
      onPanResponderMove: (evt, gestureState) => {
        const {_value} = this.animation.y;
        const stop = _value > 400 || _value < -150;
        if (stop) {
          // this.animation.setValue({y: gestureState.dy, x: 0});
          return null;
        } else {
          return Animated.event([
            null,
            {
              // dx: this.state.pan.x,
              dy: this.animation.y,
            },
          ])(evt, gestureState);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.animation.flattenOffset();
        const {_value} = this.animation.y;

        if (_value > THRESHOLD_HEADER) {
          Animated.timing(this.animation, {
            toValue: {x: 0, y: 0},
            duration: 500,
          }).start();
        }

        if (_value < THRESHOLD_FOOTER) {
          Animated.timing(this.animation, {
            toValue: {x: 0, y: -100},
            duration: 500,
          }).start();
        }
      },
    });
  }

  render() {
    const panHandlers = this.panResponder.panHandlers;
    const animatedStyle = {
      transform: [...this.animation.getTranslateTransform()],
    };
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.headerBackground} />
        <View style={styles.footerBackground} />
        <View>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text>Back</Text>
            </TouchableOpacity>
            <Text>Header</Text>
            <View opacity={0}>
              <Text>Back</Text>
            </View>
          </View>
          <View alignItems="center">
            <Text>Some more text</Text>
            <TouchableOpacity>
              <Text>Some other button</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          {...panHandlers}
          style={[styles.floatingView, animatedStyle]}
          onLayout={e => console.log('e ', e)}>
          <View style={styles.center}>
            <Text>Floating View</Text>
            <TouchableOpacity>
              <Text>Button</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text>Footer terms and condition blablabla</Text>
          </View>
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    // backgroundColor: 'deepskyblue',
    height: headerHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  floatingView: {
    // backgroundColor: 'grey',
    flex: 1,
  },
  center: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
    borderRadius: 20,
  },
  footer: {
    backgroundColor: 'lightsteelblue',
    height: 400,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerBackground: {
    backgroundColor: headerColor,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: screenHeight / 4,
  },
  footerBackground: {
    backgroundColor: footerColor,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: (screenHeight * 2) / 3,
  },
});

export default App;
