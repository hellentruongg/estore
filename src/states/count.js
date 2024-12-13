import { atom } from "recoil";

export const countState = atom({
  key: "counter",
  default: 0,
});
