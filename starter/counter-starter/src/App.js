import { useState } from "react";
// import className from "classname";
import Navbar from "./component/navbar";
import Container from "./component/container";
import SearchInput from "./component/searchInput";
import Info from "./component/info";
import Todos from "./component/todos";
import Empty from "./component/empty";

function App() {
  const [value, setValue] = useState(" ");
  const [todos, setTodos] = useState([
    { title: "Mangga", count: 1 },
    { title: "Apel", count: 1 },
    { title: "Jeruk", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please Fill The Blank");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const handleAddition = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstraction = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 1) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCount = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCount;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCount()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstraction(index)}
            onAddition={(index) => handleAddition(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
