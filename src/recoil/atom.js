import dayjs from "dayjs";
import { atom } from "recoil";
const selectedMonthState = atom({
  key: "selected-month",
  default: dayjs().month() + 1,
});

export { selectedMonthState };
