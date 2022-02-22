import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import authStore from "../stores/authStore";
import {
  Box,
  Heading,
  Center,
  FormControl,
  VStack,
  Button,
  Input,
} from "native-base";

const SignUpModal = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signUp(user);
  };
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
          Sign up to view your Trips!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>UserName</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>

          <Button mt="2" colorScheme="blue" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpModal;

const styles = StyleSheet.create({});
