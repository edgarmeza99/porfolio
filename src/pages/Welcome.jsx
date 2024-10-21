import { ChevronDown } from "lucide-react";
import ProjectFeatured from "../components/ProjectFeatured";
import SkillsFeatured from "../components/SkillsFeatured";
import MyFocus from "../components/MyFocus";
import Layout from "../components/Layout";
import Home from "../components/Home";
import { scrollTo } from "../utils/otherFuntions";

const Welcome = () => {
  return (
    <Layout>
      <Home />
      <ProjectFeatured />
      <SkillsFeatured />
      <MyFocus />
      <button
        onClick={() => scrollTo("Inicio")}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ChevronDown className="transform rotate-180 w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </Layout>
  );
};

export default Welcome;
