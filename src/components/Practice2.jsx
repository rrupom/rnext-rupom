const Practice2 = () => {
  const handleParent = (e) => {
    console.log("Called on the parent ");
  };
  const handleParentCapture = (e) => {
    console.log("Called on the parent in capture");
  };
  const handleFirstChild = (e) => {
    console.log("Called on the first child");
  };
  const handleSecondChild = (e) => {
    console.log("Called on the second child");
  };
  return (
    <div onClickCapture={handleParentCapture} onClick={handleParent}>
      <button onClick={handleFirstChild}>First Button</button>
      <button onClick={handleSecondChild}>Second Button</button>
    </div>
  );
};

export default Practice2;
