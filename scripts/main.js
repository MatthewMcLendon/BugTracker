import navBar from "./navigation/navBar.js";
import bugFormComponent from "./bugs/bugForm.js";
import bugList from "./bugs/bugList.js";
import { getBugs } from "./bugs/bugDataProvider.js";

if (document.URL === "http://localhost:3000/") {
  getBugs().then(navBar).then(bugList);
}

if (document.URL === "http://localhost:3000/bugForm") {
  bugFormComponent();
  navBar();
}
