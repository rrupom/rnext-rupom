const AlertButton = ({ children, message }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

const Toolbar = () => {
  return (
    <div>
      <AlertButton message={"Playing"}>Play Movie</AlertButton>
      <AlertButton message={"Uploading"}>Upload Image</AlertButton>
    </div>
  );
};

export default Toolbar;
