import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";
//COMPONENTS
// import MyButton from "./components/MyButton";
// import MyHeader from "./components/MyHeader";
import React, { useReducer, useRef } from "react";
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(data).getTime(),
        content,
        emotion,
      },
    });
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIR",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            {/* <MyHeader
          headText={"App"}
          leftChild={
            <MyButton
              text={"왼쪽버튼"}
              onClick={() => {
                alert("왼쪽클릭");
              }}
            />
          }
          rightChild={
            <MyButton
              text={"오른쪽버튼"}
              onClick={() => {
                alert("오른쪽클릭");
              }}
            />
          }
        />
        
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼클릭");
          }}
          type={"positive"}
        /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
            <RouteTest />
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}
export default App;
