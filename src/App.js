import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useRef, useState } from "react";
// const dummyList = [
//   {
//     id: 1,
//     author: "김은하",
//     content: "아 할거많다",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "김마요",
//     content: "아 할거 짱많다",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "아무개",
//     content: "아 할거 없다",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  //함수로 이벤트를 끌어올리는게 헷갈림.
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
