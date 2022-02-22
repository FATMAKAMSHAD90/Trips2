import { Button, Spinner, Center, Box } from "native-base";
import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import { baseURL } from "../../stores/api";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner />;
  const trip = route.params.trip;
  return (
    <SafeAreaView>
      <View>
        <Center>
          <Text>{trip.title}</Text>
          <Box bg="info.900" shadow={1} rounded="md" maxWidth="90%">
            <Image
              source={{ uri: trip.image }}
              style={{ height: 250, width: 250, margin: 50 }}
            />
          </Box>
          <Text>{trip.description}</Text>

          <Button onPress={() => navigation.navigate("Home")}>Home</Button>
          {/* <Button onPress={() => navigation.push("Home")}>Push</Button>
        
        <Button onPress={() => navigation.push("Home")}>Push</Button>
        <Button onPress={() => navigation.replace("Home")}>Replace</Button>
        <Button onPress={() => navigation.goback("Home")}>Goback</Button> */}
        </Center>
      </View>
    </SafeAreaView>
  );
};

export default TripDetail;
