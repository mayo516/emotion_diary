import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  //이렇게 돔 이벤트에 접근하면 어떤 돔 객체인지 어떻게 알 수 있는거지?
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  //const [author, setAuthor] = useState("");
  //const [content , setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //alert("작성자는 최소 1글자 이상 입력해주세요");
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      //alert("일기 본문은 최소 5글자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }
    //onCreate 함수 호출
    onCreate(state.author, state.content, state.emotion);
    alert("저장성공");
    setState({ author: "", content: "", emotion: 1 });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={
            handleChangeState
            //setState(
            // {author:e.target.value,
            // content:state.content,
            // ...state 로 스프레드 하면 10개씩 객체가 늘어나는 경우에 쓸 수 있다.
            //대신 뒤에 스프레드를 뒤에 써야함
            //}

            //)
          }
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={
            handleChangeState
            /* setState({
                    ...state,
                    content:e.target.value,
                }
            
               )  */
          }
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
