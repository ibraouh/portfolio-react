import React, { useEffect, useState } from "react";
import workData from "../data/workData.json";

const Work = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(workData);
  }, []);

  return (
    <section id="work">
      <h1 className="mono">Work Experience</h1>
      <div>
        {data.map((job, index) => (
          <div key={index}>
            <div>
              <img src={job.logo} height="60px" alt={`${job.company} logo`} />
            </div>
            <div>
              <p>{job.date}</p>
              <h2>
                {job.position} <b>@ {job.company}</b>
              </h2>
              <ul>
                {job.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
