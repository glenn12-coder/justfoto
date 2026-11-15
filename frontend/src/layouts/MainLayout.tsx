import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ margin: 0, padding: 0, position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
