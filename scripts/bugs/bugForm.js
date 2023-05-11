import { bugFormHandler } from "./bugEventHandler.js";

const contentElement = document.querySelector(".bug-form");

const bugFormComponent = () => {
  bugFormHandler();

  const renderBugForm = () => {
    contentElement.innerHTML = `
        <h2>Bug Form<h2>
        <div>
          <label for="project-input">Project: </label>
          <input Type="text" name="project-input" id="bug-form-project" placeholder="Project name..."></input>
        </div>
        <div>
          <label for="description-input">Bug description: </label>
          <textarea rows="10" cols="50" name="description-input" id="bug-form-description" placeholder="Describe the bug..."></textarea>
        </div>
        <div>
          <label for="user-input">Submitted by: </label>
          <input Type="text" name="user-input" id="bug-form-user" placeholder="Your name here"></input>
        </div>
        <div>
          <button id="save-bug-button">Save and Submit</button>
        </div>
        `;
  };

  renderBugForm();
};

export default bugFormComponent;
