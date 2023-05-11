import navBar from "./navigation/navBar.js";
import bugForm from "./bugs/bugForm.js";
import bugList from "./bugs/bugList.js";
import { getBugs } from "./bugs/bugDataProvider.js";

getBugs().then(navBar).then(bugForm).then(bugList);
