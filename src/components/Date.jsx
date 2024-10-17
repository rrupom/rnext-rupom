const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const Date = () => {
  return <h1>ToDo List for {formatDate(today)}</h1>;
};

export default Date;
