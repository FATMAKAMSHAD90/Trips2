import { makeObservable, observable, action, configure } from "mobx";
import api from "./api";

class TripStore {
  trips = [];

  constructor() {
    makeObservable(this, {
      fetchTrips: action,
      createTrips: action,
      // deleteTrips: action,
    });
  }

  fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  createTrips = async (newTrip, navigation) => {
    try {
      const response = await api.post("/trips", newTrip);
      this.trips.push(response.data);

      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
