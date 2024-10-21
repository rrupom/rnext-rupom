const Button = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }) => {
  const handleClick = () => {
    alert(`Playing ${movieName}`);
  };

  return <Button onClick={handleClick}>Play {movieName}</Button>;
};

const UploadButton = () => {
  const handleClick = () => {
    alert("Uploading...");
  };
  return <Button onClick={handleClick}>Upload Image</Button>;
};

const Toolbar = () => {
  return (
    <div>
      <PlayButton movieName={"Kiki's Delivery Service"} />
      <UploadButton />
    </div>
  );
};

export default Toolbar;
