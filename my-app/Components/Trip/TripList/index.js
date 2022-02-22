import { StyleSheet, Text, View, Container } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

const TripList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));

  return (
    <ScrollView style={{ flex: 1, flexDirection: "column", gap: 10 }}>
      {tripList}
    </ScrollView>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({});
