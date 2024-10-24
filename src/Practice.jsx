const Practice = () => {
  console.log("Practice component");

  return (
    <div>
      <h1>Section</h1>
      <Image />
      <Test />
    </div>
  );
};

const Image = () => {
  console.log("Image Component");
  return (
    <div>
      <h1>Hello Image</h1>;
      <Demo />
      <Demo />
    </div>
  );
};

const Demo = () => {
  console.log("Demo Component");
  return (
    <div>
      <h1>Hello Demo component</h1>;
      <Test />
    </div>
  );
};

const Test = () => {
  console.log("Test Component");
  return (
    <div>
      <h1>Hello Test Component</h1>;
    </div>
  );
};

export default Practice;
