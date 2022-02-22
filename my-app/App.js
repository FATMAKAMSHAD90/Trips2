import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import StackNavigator from "./Components/Navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
