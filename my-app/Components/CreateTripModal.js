import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import tripStore from "../Components/stores/tripStore";
import Home from "../";
import {
  Box,
  Heading,
  Center,
  FormControl,
  VStack,
  Button,
  Input,
} from "native-base";

export default function CreateTripaModal({ navigation }) {
  const [trip, setTrip] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    await tripStore.createTrips(trip, navigation);
    setTrip({
      title: "",
      image: "",
      description: "",
    });
  };

  // props.closeModal(); // this is to close the modal that is shown
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        ></Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Create your Trip
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>title</FormControl.Label>
            <Input
              onChangeText={(value) => setTrip({ ...trip, title: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>description</FormControl.Label>
            <Input
              onChangeText={(value) => setTrip({ ...trip, description: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Image</FormControl.Label>
            <Input
              type="image"
              onChangeText={(value) => setTrip({ ...trip, image: value })}
            />
          </FormControl>

          <Button mt="2" colorScheme="blue" onPress={handleSubmit}>
            Create Trip
          </Button>
          <Button onPress={() => navigation.navigate("Home")}>Home</Button>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({});
