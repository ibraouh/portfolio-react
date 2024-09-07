import React from "react";

const About = () => {
  return (
    <section id="about_me">
      <div className="about-text">
        <h1 className="mono">Hi, I'm Abe Raouh</h1>
        <p className="tagline">
          Empowering the future of AI through thoughtful design and code.
        </p>
        <p>Software Engineer based in New York, NY</p>
        <p>ML/AI Enthusiast</p>

        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          dapibus ante. Curabitur aliquet pharetra purus sed semper. Vestibulum
          tincidunt, lacus vitae suscipit gravida, ligula magna lobortis elit,
          in dapibus magna nulla vitae tellus. Phasellus vitae semper magna.
          Integer fringilla ante massa, quis bibendum lorem ultricies at.
          Pellentesque suscipit metus vitae ipsum aliquam vulputate. Vestibulum
          eget sodales risus. Phasellus accumsan placerat mi, sit amet sagittis
          sapien congue eu. Suspendisse pharetra sollicitudin enim, pretium
          condimentum velit pellentesque at. Aliquam quis consequat turpis, et
          vestibulum enim. Quisque sed diam orci. Integer sodales libero eget
          nulla eleifend, a accumsan purus hendrerit. Praesent at volutpat orci.
          Etiam ullamcorper libero fringilla ligula consequat vulputate. Sed
          vitae rhoncus lorem. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="about-image">
        <img
          src={process.env.PUBLIC_URL + "/img/portrait2.jpeg"}
          alt="Abe Raouh"
        />
      </div>
    </section>
  );
};

export default About;
