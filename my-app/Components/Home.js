import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%", flex: 1 }}
      source={{
        uri: "https://i.pinimg.com/originals/10/47/c8/1047c89a5815fa4b3b6e6b8464ae078b.jpg",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.navigate("Trips")}>Trips</Button>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
