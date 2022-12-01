import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="">
      <h2>일기 리스트</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
