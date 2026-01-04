import { getCreationDate, getModificationDate } from "./dates";

export const documentConfig = {
  title: "Weekly Planner",
  author: "Aris Giotis",
  creationDate: getCreationDate(),
  modificationDate: getModificationDate(),
};
