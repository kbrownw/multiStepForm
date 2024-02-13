import { AddOns, Plans } from "./types";

export const addOns: AddOns = {
  "online-service": {
    name: "Online service",
    cost: 1,
  },
  storage: {
    name: "Larger storage",
    cost: 2,
  },
  custom: {
    name: "Customizable profile",
    cost: 2,
  },
};

export const plans: Plans = {
  arcade: {
    name: "Arcade",
    cost: 9,
  },
  advanced: {
    name: "Advanced",
    cost: 12,
  },
  pro: {
    name: "Pro",
    cost: 15,
  },
};
