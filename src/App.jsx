export const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

const getImageUrl = (url) => {
  return `https://i.imgur.com/${url}s.jpg`;
};

const generateList = (people) => {
  return people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <p>
        <b>{person.name}</b> {person.profession} known for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));
};

const App = () => {
  const chemists = people.filter((person) => person.profession === "chemist");
  const checmistsList = generateList(chemists);

  const otherScientists = people.filter(
    (person) => person.profession !== "chemist"
  );
  const otherScientistsList = generateList(otherScientists);

  return (
    <div>
      <h1>Chemists</h1>
      <ul>{checmistsList}</ul>
      <h1>Other Scientists</h1>
      <ul>{otherScientistsList}</ul>
    </div>
  );
};

export default App;
