import React from "react";
import { Link } from "react-router-dom";
import "./How.css";
import { LayoutGrid, Camera, SlidersHorizontal, Download } from "lucide-react";
import howover from "../../assets/howover.png";

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    id: 1,
    stepNumber: "STEP 1",
    title: "Choose a layout",
    description:
      "Pick from strips, filters, and special collabs. There's a lot to choose from.",
    icon: <LayoutGrid size={22} strokeWidth={2} />,
  },
  {
    id: 2,
    stepNumber: "STEP 2",
    title: "Strike a pose",
    description:
      "Allow camera access and pose for each shot with a 3-second countdown.",
    icon: <Camera size={22} strokeWidth={2} />,
  },
  {
    id: 3,
    stepNumber: "STEP 3",
    title: "Customize",
    description:
      "Adjust frame colors, add stickers, doodle, or overlay the date. Make it yours.",
    icon: <SlidersHorizontal size={22} strokeWidth={2} />,
  },
  {
    id: 4,
    stepNumber: "STEP 4",
    title: "Download",
    description:
      "Save your high-resolution strip instantly. Nothing is ever uploaded or stored.",
    icon: <Download size={22} strokeWidth={2} />,
  },
];

export default function How() {
  return (
    <section className="how-section">
      {/* Curved top divider (cekung ke atas) */}
      <div className="how-curve-top" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="how-curve-svg"
        >
          <path d="M0,0 C480,50 960,50 1440,0 L1440,0 L0,0 Z" fill="#fafbfb" />
        </svg>
      </div>

      {/* Pixel Pattern Background */}
      <div className="how-pixel-pattern" aria-hidden="true" />

      {/* Decorative Photostrip Overlay */}
      <div className="how-overlay" aria-hidden="true">
        <img src={howover} alt="Overlay" className="how-overlay-img" />
      </div>

      <div className="how-wrapper-card">
        {/* Header */}
        <div className="how-header">
          <span className="how-overline">Bingung?</span>
          <h2 className="how-main-title">Begini Cara Kerjanya</h2>
          <p className="how-subtitle fw-medium">
            Tanpa perlu mengunduh aplikasi atau membuat akun. Cukup ikuti empat
            langkah mudah untuk mendapatkan hasil photostrip-mu
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="how-cards-grid">
          {steps.map((step) => (
            <div key={step.id} className="how-step-card">
              <div className="how-icon-circle">{step.icon}</div>
              <span className="how-step-label">{step.stepNumber}</span>
              <h3 className="how-card-title">{step.title}</h3>
              <p className="how-card-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="how-cta-container">
          <Link to="/Photobooth" className="how-cta-btn">
            Kuy Foto!
          </Link>
        </div>
      </div>
    </section>
  );
}
