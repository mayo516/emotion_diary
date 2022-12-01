import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김은하",
    content: "아 할거많다",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김마요",
    content: "아 할거 짱많다",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "아 할거 없다",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
