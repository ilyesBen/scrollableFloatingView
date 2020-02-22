import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";

const headerHeight = 100;
const headerPadding = 20;
const yContentOffset = 35;

export default class App extends React.Component {
  animation = new Animated.Value(1);

  disableButton = () => {
    this.animation.setValue(0);
  };

  showButton = () => {
    this.animation.setValue(1);
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.headerButtonContainer, { zIndex: this.animation }]}
        >
          <TouchableOpacity style={styles.headerButton}>
            <Text> Press me </Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>Header</Text>
            </View>
            <View style={styles.justifyView} />
          </View>
        </View>

        <ScrollView
          onScrollBeginDrag={() => {
            this.disableButton();
          }}
          onScroll={e => {
            if (e.nativeEvent.contentOffset.y <= yContentOffset) {
              this.showButton();
            } else {
              this.disableButton();
            }
          }}
          scrollEventThrottle={10}
        >
          <View style={styles.transparentHeader} />
          <View style={styles.floatingView}>
            <Text>Floating view</Text>
            <TouchableOpacity style={styles.floatingViewButton}>
              <Text> Press me </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transparentHeader} />
        </ScrollView>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
  headerContainer: {
    position: "absolute",
    backgroundColor: "red",
    right: 0,
    left: 0,
    height: 400,
    zIndex: -1
  },
  header: {
    padding: headerPadding,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 18
  },
  headerButtonContainer: {
    flex: 1,
    position: "absolute",
    left: headerPadding,
    top: headerPadding
  },
  headerButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "grey"
  },
  justifyView: {
    flex: 1
  },
  floatingView: {
    justifyContent: "center",
    alignItems: "center",
    height: 700,
    backgroundColor: "white",
    borderRadius: 20
  },
  floatingViewButton: {
    marginTop: 20,
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10
  },
  transparentHeader: {
    height: headerHeight
  },
  footer: {
    height: headerHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  }
});
