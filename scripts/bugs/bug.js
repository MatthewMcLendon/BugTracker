const bugComponent = (bugs) => {
  return `
    <div>
        <div class="bug-project">${bugs.project}</div>
        <div class="bug-description">${bugs.description}</div>
        <div class="bug-user">${bugs.user}</div>
        <div class="bug-date">${new Date(notes.date).toLocaleDateString(
          "en-US"
        )}</div>
    </div>
    `;
};

export default bugComponent;
