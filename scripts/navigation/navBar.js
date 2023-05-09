const navBar = () => {
  const contentElement = document.querySelector(".nav-bar");

  contentElement.innerHTML = `
  <h1 class="app-title">Bug Tracker</h1>
  <a href="/index.html" class="page-link">Home</a>
  `;
};

export default navBar;
