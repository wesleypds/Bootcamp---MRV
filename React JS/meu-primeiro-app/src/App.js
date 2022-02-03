import Item from "./components/item";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
      <Card/>
    </>
  );
}

export default App;
