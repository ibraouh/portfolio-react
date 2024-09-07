import React from "react";

const Socials = () => {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://github.com/ibraouh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/svg/github.svg"}
              alt="github logo"
              width="25"
              height="25"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ibraouh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/svg/instagram.svg"}
              alt="instagram logo"
              width="25"
              height="25"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/iraouh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/svg/linkedin.svg"}
              alt="linkedin logo"
              width="25"
              height="25"
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
