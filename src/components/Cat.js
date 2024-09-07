import React, { useState } from "react";

const FloatingCat = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover event
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false); // Stop the animation after 5 seconds
    }, 5000); // Time in ms
  };

  return (
    <section id="floating-cat">
      <div
        className={`cat-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        <img
          src={process.env.PUBLIC_URL + "/img/cat.png"}
          alt="Jumping Cat"
          className="jumping-cat"
        />
      </div>
    </section>
  );
};

export default FloatingCat;
