import HeroTemplate from "../section/Template/HeroTemplate";
import TemplateList from "../section/Template/temp";
import { useEffect } from "react";
import { scrollToTop } from "../utils/scroll";

export default function Template() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <HeroTemplate />
      <TemplateList />
    </div>
  );
}
