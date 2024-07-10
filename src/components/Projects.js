import React, { useRef, useEffect, useState } from "react";
import projectsData from "../data/projectsData.json";

const Projects = () => {
  const [data, setData] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setData(projectsData);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <div>
        <h1 className="mono">Some things I built</h1>

        <button className="arrow arrow-left" onClick={scrollLeft}>
          &#9664;
        </button>
        <button className="arrow arrow-right" onClick={scrollRight}>
          &#9654;
        </button>

        <div className="scroll-container" ref={scrollContainerRef}>
          {data.map((project, index) => (
            <div key={index}>
              <h4>{project.title}</h4>
              <img src={project.image} height="150px" alt={project.title} />
              <p>{project.description}</p>
              <p>
                {project.technologies.map((tech, i) => (
                  <em key={i}>{tech}</em>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
