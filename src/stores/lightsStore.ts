import { defineStore } from "pinia";
import axios from "axios";
import { Room } from "@/models/hue.models";

export type RootState = {
  rooms: Room[];
};

export const useLightsStore = defineStore({
  id: "lights",
  state: (): RootState => ({
    rooms: [],
  }),
  actions: {
    load() {
      return new Promise((resolve, reject) => {
        axios
          .get("http://127.0.0.1:8000/lights")
          .then((response) => {
            this.rooms = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
