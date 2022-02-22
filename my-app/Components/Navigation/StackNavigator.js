import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import TripList from "../Trip/TripList/index";
import SignUpModal from "../Auth/SignUpModal";
import SignInModal from "../Auth/SignInModal";

import TripDetail from "../Trip/TripList/TripDetail";
// import CartIcon from "../Cart/CartIcon"

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      intialRouteName="Home"
      screenOption={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Trips"
        component={TripList}
        options={{ headerTitle: "All Trips" }}
      />
      {/* <Screen
        name="SignUp"
        component={SignUpModal}
        options={{ headerShown: "Sign Up" }}
      /> */}
      <Screen
        name="SignIn"
        component={SignInModal}
        options={{ headerShown: "Sign In" }}
      />

      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => ({
          title: route.params.trip.title,
          // headerRight: () => <CartIcon />,
        })}
      />
    </Navigator>
  );
};
export default StackNavigator;
