import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { Pressable, Box, Center } from "native-base";

const TripItem = ({ navigation, trip }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Center>
          <Box bg="info.900" shadow={1} rounded="md" maxWidth="90%">
            <Image
              source={{ uri: trip.image }}
              style={{ height: 250, width: 250, margin: 50 }}
            />
          </Box>
          <Text>{trip.title}</Text>
        </Center>
      </Pressable>
    </SafeAreaView>
  );
};

export default TripItem;

const styles = StyleSheet.create({});
