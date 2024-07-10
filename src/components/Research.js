import React, { useEffect, useState } from "react";
import researchData from "../data/researchData.json";

const Research = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(researchData);
  }, []);

  return (
    <section id="research">
      <div>
        <h1 className="mono">Research Experience</h1>
        <div>
          {data.map((research, index) => (
            <div key={index}>
              <h4>{research.professor}</h4>
              <h5>
                <b>{research.title}</b>
              </h5>
              <p>
                <ul>
                  {research.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
