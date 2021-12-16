import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
} from "react-native";

import { Image, Button, ListItem, Input } from "react-native-elements";

import {
  useFonts,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { Poppins_700Bold, Poppins_300Light } from "@expo-google-fonts/poppins";


import socketIOClient from "socket.io-client";

var socket = socketIOClient("https://tripbook-lacapsule.herokuapp.com:3000");

function ChatScreen() {
  

  const [currentMessage, setCurrentMessage] = useState();
  const [listMessage, setListMessage] = useState([]);

  useFonts({
    PlayfairDisplay_900Black,
    Poppins_700Bold,
    Poppins_300Light,
  });
  useEffect(() => {
    socket.on("sendMessageToAll", (newMessageData) => {
      setListMessage([...listMessage, newMessageData]);
    });
  }, [listMessage]);

  var listMessageItem = listMessage.map((messageData, i) => {
    return (
      <ListItem key={i}>
        <ListItem.Content>
          <ListItem.Title>{messageData.message}</ListItem.Title>
          <ListItem.Subtitle>auteur</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  });

  return (
    <View style={{ flex: 1 }}>
     
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        {listMessageItem}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Input
          containerStyle={{ marginBottom: 5 }}
          placeholder="Your message"
          onChangeText={(msg) => setCurrentMessage(msg)}
          value={currentMessage}
        />
        <Button
          title="Send Message"
          onPress={() => {
            socket.emit("sendMessage", { message: currentMessage });
            setCurrentMessage("");
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
  
  textbutton: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  
});

export default ChatScreen;
