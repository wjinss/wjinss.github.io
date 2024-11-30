import "../styles/Publishing.css";
import { useState } from "react";
import PublContent from "./PublContent";
import getPublishungContents from "../util/getPublishungContents";

const Publishing = () => {
  const [publs] = useState(getPublishungContents);
  return (
    <section className="Publishing" id="PUBLISHING">
      <div className="web_wrap">
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
            className={`web_${publ.id}`}
            src={`url(../public/images/publishing_0${publ.id}.png)`}
          />
        ))}
      </div>
    </section>
  );
};
export default Publishing;
