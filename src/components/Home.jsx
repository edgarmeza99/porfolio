import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MIS_PROYECTOS } from "../utils/constants";

const Home = () => {
  const navigate = useNavigate();
  return (
    <article
      id="Inicio"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 "
      >
        Bienvenidos, soy Edgar
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-xl  sm:max-w-2xl mx-auto px-4 sm:px-0"
      >
        Soy desarrollador de software full stack con experiencia en Java, React
        y manejo de base de datos. Me enfoco en entregar soluciones eficientes y
        me adapto rápidamente a los retos del desarrollo.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button
          className="bg-blue-600 hover:bg-blue-700  text-white transition-colors rounded-full px-6 py-3 "
          onClick={() => navigate(MIS_PROYECTOS)}
        >
          Ver mis proyectos
        </button>
      </motion.div>
    </article>
  );
};

export default Home;
