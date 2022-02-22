import { makeAutoObservable } from "mobx";
import api from "./api";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
