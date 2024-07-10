import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="signature">
        <p className="mono">
          designed and developed by{" "}
          <a href="https://github.com/ibraouh">@ibraouh</a> | May 2024, V5 |{" "}
          <a href="mailto:abe@raouh.com">abe@raouh.com</a>
        </p>
      </div>
      <div id="socials">
        <ul>
          <li>
            <a
              href="https://github.com/ibraouh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="svg/github.svg"
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
                src="svg/instagram.svg"
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
                src="svg/linkedin.svg"
                alt="linkedin logo"
                width="25"
                height="25"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
