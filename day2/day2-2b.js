const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const newUser = {
  name: "Monty John",
  scores: 86,
  skills: ["HTM", "CSS", "JS", "ReactJs"],
  age: 25,
};

//Add user if user is not present
function addUsers(userData) {
  const userExists = userData.some((user) => user.name === newUser.name);
  if (!userExists) {
    userData.push(newUser);
  }
  console.log(userData);
}
addUsers(users);
