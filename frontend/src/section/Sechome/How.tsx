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
    stepNumber: "LANGKAH 1",
    title: "Pilih Layout",
    description:
      "Pilih berbagai pilihan bingkai foto, filter, dan kolaborasi spesial sesuai gaya favoritmu.",
    icon: <LayoutGrid size={22} strokeWidth={2} />,
  },
  {
    id: 2,
    stepNumber: "LANGKAH 2",
    title: "Tunjukkan Gayamu",
    description:
      "Izinkan akses kamera dan berpose untuk setiap pengambilan foto dengan hitung mundur 3 detik.",
    icon: <Camera size={22} strokeWidth={2} />,
  },
  {
    id: 3,
    stepNumber: "LANGKAH 3",
    title: "Kustomisasi Foto",
    description:
      "Atur warna bingkai, tambahkan stiker, gambar bebas, atau tanggal untuk membuat fotomu lebih personal.",
    icon: <SlidersHorizontal size={22} strokeWidth={2} />,
  },
  {
    id: 4,
    stepNumber: "LANGKAH 4",
    title: "Unduh Foto",
    description:
      "Simpan hasil foto berkualitas tinggi secara instan. Foto tidak pernah diunggah atau disimpan di server kami.",
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
