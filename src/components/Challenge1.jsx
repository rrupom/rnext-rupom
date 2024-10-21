export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    console.log(bodyStyle);
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>;
}
