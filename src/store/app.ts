// Utilities
import { defineStore } from "pinia";

type Order = {
  restaurantId: number;
  restaurantName: string;
  extraOptions: [{}];
};

export const productDetailsStore = defineStore("productDetails", {
  state: () => {
    return {
      restaurantId: 1,
      restaurantName: "Matsuri Concept",
      extraValues: ["5,99", "20,99"],
    };
  },
  actions: {
  },
});
