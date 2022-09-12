type button = {
  title: String;
};

function Button({ title }: button) {
  return <button>{title}</button>;
}

function App() {
  return (
    <>
      <Button title={"send 1"} />
      <Button title={"send 2"} />
      <Button title={"send 3"} />
      <Button title={"send 4"} />
    </>
  );
}

export default App;
