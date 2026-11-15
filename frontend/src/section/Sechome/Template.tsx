import { Link } from "react-router-dom";
import kolase1jadi from "../../assets/kolase1jadi.png";
import kolase2jadi from "../../assets/kolase2jadi.png";
import "./Template.css";

export default function Template() {
  return (
    <section className="template-section is-visible mt-5">
      <div className="template-bg-shapes">
        <span className="red-square square-1"></span>
      </div>
      <div className="template-container">
        {/* Left Column: Images */}
        <div className="template-images-col">
          <div className="template-images-wrapper">
            <div className="template-image-card">
              <img
                src={kolase1jadi}
                alt="Kolase Foto 1"
                className="template-img"
              />
            </div>
            <div className="template-image-card">
              <img
                src={kolase2jadi}
                alt="Kolase Foto 2"
                className="template-img"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="template-content-col">
          <div className="template-title-wrapper">
            <h2 className="template-title">
              <span className="title-blue"> Temukan Berbagai</span>
              <br />
              <span className="title-green">Bingkai Foto Kesukaan mu</span>
              <br />
            </h2>
          </div>

          <div className="template-body">
            <p className="template-desc-primary">
              Justfoto.id menyediakan lebih dari 100 pilihan bingkai foto dengan
              beragam desain dan gaya yang dapat disesuaikan untuk mengabadikan
              setiap momen berharga dirimu (GRATIS).
            </p>

            <div className="template-stats">
              <div className="template-stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label fw-medium">Pilihan Bingkai</span>
              </div>

              <div className="template-stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label fw-medium">Akses Layanan</span>
              </div>

              <div className="template-stat-item">
                <span className="stat-number">HD</span>
                <span className="stat-label fw-medium">Kualitas Foto</span>
              </div>
            </div>

            <div className="template-action">
              <Link to="/tentang" className="template-btn">
                Cek Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
