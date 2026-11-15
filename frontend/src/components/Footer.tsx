import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer text-white-50 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <Link
              to="/"
              className="footer-brand text-decoration-none mb-4 d-inline-block"
            >
              <h4 className="text-white fw-bold mb-0 footer-title">
                Justfoto.id
              </h4>
            </Link>

            <p className="mb-4">
              JustFoto.id menghadirkan pengalaman photobooth digital yang mudah,
              kreatif, dan menyenangkan untuk mengabadikan setiap momen
              spesialmu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-4 position-relative pb-2 section-title-footer">
              Quick Links
            </h4>

            <div className="row">
              <div className="col-6">
                <Link className="btn btn-link" to="/">
                  Beranda
                </Link>

                <Link className="btn btn-link" to="/Tentang">
                  Tentang
                </Link>

                <Link className="btn btn-link" to="/Photobooth">
                  Photobooth
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-12">
            <h4 className="text-white mb-4 position-relative pb-2 section-title-footer">
              Kontak Kami
            </h4>

            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3 text-white"></i>
              Jakarta, Indonesia
            </p>

            <p className="mb-4">
              <i className="fa fa-envelope me-3 text-white"></i>
              Justfoto@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright py-4 bg-dark-deep">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                to="/"
                className="text-secondary fw-bold text-decoration-none"
              >
                Justfoto.id
              </Link>{" "}
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
