import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import MessageRecord from "../Model/MessageRecord.json";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagedata: MessageRecord,
      data: MessageRecord[this.props.luckyvalue].status,
    };
  }

  componentDidMount() {
    this.props.valuefromchild(this.state.data);
  }

  render() {
    // console.log(this.state.data);
    return (
      <View>
        <Text style={{ color: "white" }}>
          {this.state.messagedata[this.props.luckyvalue].message}
        </Text>
        {/* <Button
          title="helloo"
          onPress={() => this.props.valuefromchild(this.state.data)}
        /> */}
      </View>
    );
  }
}

export default Message;
