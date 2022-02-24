import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Container, Image, VStack } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%", flex: 1 }}
      source={{
        uri: "https://i.pinimg.com/originals/10/47/c8/1047c89a5815fa4b3b6e6b8464ae078b.jpg",
      }}
    >
      <Container
        style={{
          height: 160,
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "100%",
          marginLeft: 30,
          margin: 2,
          display: "flex",
          gap: 10,
          flexDirection: "column",
        }}
      >
        <Button
          style={{
            fontSize: 30,
            height: 60,

            fontWeight: "bold",

            fontColor: "blue",
          }}
          onPress={() => navigation.navigate("Trips")}
        >
          View Trips
        </Button>

        <Button
          style={{
            fontSize: 30,
            height: 60,

            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Create")}
        >
          create trip
        </Button>
      </Container>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
