let bugs = [];

export const useBug = () => {
  return bugs;
};

export const saveBug = (bug) => {
  return fetch("http://localhost:8088/bugs", {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bug),
  }).then(getBugs);
};

export const getBugs = () => {
  return fetch("http://localhost:8088/bugs", {
    method: `GET`,
  })
    .then((response) => response.json())
    .then((slicedBugs) => {
      bugs = slicedBugs.slice();
    })
    .then(console.log(bugs));
};
