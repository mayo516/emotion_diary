import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Edit() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  console.log(id);
  return (
    <div>
      Edit
      <button
        onClick={() => {
          setSearchParams({ who: "마요" });
        }}
      >
        QS바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        홈으로가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}
