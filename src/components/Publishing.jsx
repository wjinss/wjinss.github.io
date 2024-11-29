import "../styles/Publishing.css";
import { useState } from "react";
import PublContent from "./PublContent";

const Publishing = () => {
  const [publs] = useState([
    {
      id: 99,
      title: "서울시립미술관 메인페이지",
      explain: "소개: 서울시립미술관 반응형 메인페이지 리디자인",
      period: "기간: 디자인 2일, 코딩 4일",
      part: "기여도: 1인 작업",
      tools: [],
      href: "",
      logo: "",
    },
  ]);
  return (
    <section className="Publishing" id="PUBLISHING">
      {publs.map((publ) => (
        <PublContent
          key={publ.id}
          title={publ.title}
          explain={publ.explain}
          period={publ.period}
          part={publ.part}
          tools={publ.tools}
          href={publ.href}
          logo={publ.logo}
        />
      ))}
    </section>
  );
};
export default Publishing;
