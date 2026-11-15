import Hero from "../section/Sechome/Hero";
import Template from "../section/Sechome/Template";
import How from "../section/Sechome/How";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scroll";

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Hero />
      <Template />
      <How />
    </div>
  );
}
