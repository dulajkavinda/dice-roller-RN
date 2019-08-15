import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "native-base";

let dice_1 = require("./images/dice1.png");
let dice_2 = require("./images/dice2.png");
let dice_3 = require("./images/dice3.png");
let dice_4 = require("./images/dice4.png");
let dice_5 = require("./images/dice5.png");
let dice_6 = require("./images/dice6.png");

export default class Dice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      side: this.rollDice()
    };
  }

  rollDice = () => {
    let random = this.randomNumber();

    switch (random) {
      case 1:
        return dice_1;
        break;
      case 2:
        return dice_2;
        break;
      case 3:
        return dice_3;
        break;
      case 4:
        return dice_4;
        break;
      case 5:
        return dice_5;
        break;
      case 6:
        return dice_6;
        break;
      default:
        return dice_1;
        break;
    }
  };

  getSide = () => {
    this.setState({ side: this.rollDice() });
  };

  randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.side} />
        <TouchableOpacity>
          <Button style={styles.buttonStyles} onPress={this.getSide}>
            <Text style={styles.buttonText}>Roll It!</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyles: {
    paddingHorizontal: 40,
    marginTop: 30
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
};
