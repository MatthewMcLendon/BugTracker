import { saveBug } from "./bugDataProvider.js";
import { useBug } from "./bugDataProvider.js";

const eventHub = document.querySelector(".container");

export const bugFormHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "save-bug-button") {
      let oldBugs = useBug();

      const newBug = {
        project: document.querySelector("#bug-form-project").value,
        description: document.querySelector("#bug-form-description").value,
        user: document.querySelector("#bug-form-user").value,
        date: Date.now(),
        id: oldBugs.length + 1,
      };

      saveBug(newBug);
    }
  });
};
