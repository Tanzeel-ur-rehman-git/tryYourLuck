import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import TopScreen from "../Component/TopScreen";
import Message from "../Component/Message";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spincheck: 0,
      statusfrommessage: 0,
    };
  }
  SpinCheckfunction = () => {
    this.setState({ spincheck: 1 });
    let value = 1;
    this.AfterSpinCheck(value);
  };
  AfterSpinCheck = (value) => {
    if (value == "1") {
      setTimeout(() => {
        this.setState({ spincheck: 3 });
      }, 7000);
    }
  };

  getResponse = (valuex) => {
    this.setState({ statusfrommessage: valuex });
  };

  //0=happy
  //1=sad
  //2=faluir
  //3=success
  render() {
    console.log(this.state.statusfrommessage);
    const messagevalue = Math.floor(Math.random() * 3 + 0);

    return (
      <SafeAreaView
        style={{
          paddingTop: StatusBar.currentHeight,
          backgroundColor: "#13152B",
          flex: 1,
        }}
      >
        <TopScreen />
        <Header />

        <View
          style={{
            flex: 1,
            backgroundColor: "#13152B",
            padding: 25,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 35, fontWeight: "600", color: "white" }}>
              Try Your Luck
            </Text>
          </View>
          {this.state.spincheck == 0 ? (
            <View
              style={{
                backgroundColor: "grey",
                width: 300,
                height: 300,
              }}
            >
              <Text style={{ color: "white" }}>{messagevalue}</Text>
            </View>
          ) : this.state.spincheck == 1 ? (
            <View>
              <Image
                style={{ height: undefined, width: 300, aspectRatio: 1 }}
                source={require("../assets/images/giphy.gif")}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View>
              <Message
                luckyvalue={messagevalue}
                valuefromchild={this.getResponse.bind(this)}
              />
              <Text style={{ color: "white" }}>
                {this.state.statusfrommessage}
              </Text>
            </View>
          )}

          <View
            style={{
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              style={{
                height: 43,
                backgroundColor: "grey",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                width: 100,
              }}
              onPress={() => this.SpinCheckfunction()}
              disabled={this.state.spincheck == 0 ? false : true}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  fontSize: 12,
                }}
              >
                Spin
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
