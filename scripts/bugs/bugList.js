import bugComponent from "./bug.js";
import { getBugs, useBug } from "./bugDataProvider.js";

const bugList = () => {
  const contentElement = document.querySelector(".bugs-list");
  let bugs = useBug();

  contentElement.innerHTML = `
  <h2>Current Bugs:<h2>
  ${bugs
    .map((bug) => {
      return bugComponent(bug);
    })
    .join("")}`;
};

export default bugList;
