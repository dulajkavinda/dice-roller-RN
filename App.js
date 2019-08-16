import React from "react";
import { View } from "react-native";

import Dice from "./src/Dice";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Dice />
        </View>
        <View style={{ flex: 1 }}>
          <Dice />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#E74292",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
};
