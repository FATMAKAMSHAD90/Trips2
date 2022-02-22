import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    this.user = decode(token);
  };

  signUp = async (user) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
    } catch (error) {}
  };

  signIn = async (user) => {
    try {
      const response = await api.post("/signin", user);
      console.log(
        "🚀 ~ file: authStore.js ~ line 26 ~ AuthStore ~ signIn= ~ response",
        response.data
      );
      this.setUser(response.data.token);
    } catch (error) {}
  };

  logout = async () => {
    this.user = null;
    delete api.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); //time right now
      let user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        await AsyncStorage.removeItem("myToken");
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
