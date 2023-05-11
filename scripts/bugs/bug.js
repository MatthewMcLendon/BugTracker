const bugComponent = (bug) => {
  return `
    <div>
        <div class="bug-project">${bug.project}</div>
        <div class="bug-description">${bug.description}</div>
        <div class="bug-user">${bug.user}</div>
        <div class="bug-date">${new Date(bug.date).toLocaleDateString(
          "en-US"
        )}</div>
    </div>
    `;
};

export default bugComponent;
