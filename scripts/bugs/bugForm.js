const bugForm = () => {
  const contentElement = document.querySelector(".bug-form");

  contentElement.innerHTML = `
    <h2>Bug Form<h2>
    <div>
      <label for="project-input">Project: </label>
      <input Type="text" name="project-input" class="bug-form-project" placeholder="Project name..."></input>
    </div>
    <div>
      <label for="description-input">Bug description: </label>
      <textarea rows="10" cols="50" name="description-input" class="bug-form-description" placeholder="Describe the bug..."></textarea>
    </div>
    <div>
      <label for="user-input">Submitted by: </label>
      <input Type="text" name="user-input" class="bug-form-user" placeholder="Your name here"></input>
    </div>`;
};

export default bugForm;
