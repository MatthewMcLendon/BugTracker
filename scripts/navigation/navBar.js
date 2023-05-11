const navBar = () => {
  const contentElement = document.querySelector(".nav-bar");

  contentElement.innerHTML = `
  <h1 class="app-title">Bug Tracker</h1>
  <a href="/index.html" class="page-link">Current Bugs</a>
  <a href="/bugForm.html" class="page-link">Submit Bug</a>
  `;
};

export default navBar;
