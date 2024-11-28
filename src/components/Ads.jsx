import { useState } from "react";

function App() {
  let [title, chTitle] = useState([
    "강남 맛집 추천",
    "강북 맛집 추천",
    "송파 맛집 추천",
    "구로 맛집 추천",
  ]);
  let [like, chLike] = useState([0, 0, 0, 0]);

  // 인덱스를 받는 onClick 함수
  let onClick = (index) => {
    // 기존의 like 배열을 복사한 후, 특정 인덱스의 값을 증가
    let newLike = [...like];
    newLike[index] = newLike[index] + 1;
    chLike(newLike); // 업데이트된 배열을 setLike로 설정
  };

  console.log(title);
  console.log(like);

  return (
    <div className="App">
      <header id="header">
        <h1 className="main-logo">Blog</h1>
      </header>
      <main id="content">
        <h2 className="post-title">Post</h2>
        <ul className="post-wrap">
          {title.map((item, index) => (
            <li key={index}>
              <a href="#">
                <p>
                  {item}
                  <span onClick={() => onClick(index)}> 👍 {like[index]}</span>
                </p>
                <p className="small-txt">2024.10.10</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
