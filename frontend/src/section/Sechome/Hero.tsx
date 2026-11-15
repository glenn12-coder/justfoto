import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroBg1 from "../../assets/hero-bg.png";
import heroBg2 from "../../assets/hero-bg2.png";
import heroBg3 from "../../assets/hero-bg3.png";
import "./Hero.css";
import "../../animation/Animation.css";

const bgImages = [heroBg1, heroBg2, heroBg3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section is-visible">
      {/* Background slides */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-scroll">
        <span>Scroll kebawah</span>
        <div className="scroll-line"></div>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title anim-up delay-1">
          Abadikan Kenanganmu
          <br />
          di Justfoto.id
        </h1>
        <Link to="/Photobooth" className="hero-btn anim-up delay-2">
          Yuk coba sekarang! <span className="hero-btn-arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
