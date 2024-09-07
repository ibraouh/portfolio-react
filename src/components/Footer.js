import React from "react";
import Socials from "./Socials";

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
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
