import Counter from "./components/Task1/task1";
import Post from "./components/Task2and3/task2";
import PostFour from "./components/Task4/task2";
function App() {
  return (
    <div className="App">
      {/* Первое задание */}
      <Counter />
      {/* Второе задание и третье вместе */}
      {/* <Post /> */}
      {/* Четвертое задание */}
      <PostFour />
    </div>
  );
}

export default App;
