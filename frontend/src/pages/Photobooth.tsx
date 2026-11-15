import Booth from "../section/Galeri/booth";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scroll";

export default function Photobooth() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Booth />
    </div>
  );
}
