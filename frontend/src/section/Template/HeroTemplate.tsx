import React from "react";
import "./HeroTemplate.css";
import heroAboutImg from "../../assets/heroabout.png";

const Heroabout: React.FC = () => {
  return (
    <section
      className="heroabout-section"
      style={{ backgroundImage: `url(${heroAboutImg})` }}
    >
      <div className="heroabout-overlay"></div>
      <div className="container position-relative h-100">
        <h1 className="heroabout-title">TEMPLATE</h1>
        <div className="heroabout-line"></div>
      </div>
    </section>
  );
};

export default Heroabout;
