import Layout from "../components/Layout";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-20 bg-gray-50 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Habilidades Técnicas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 ">
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">☕</span>
                <span className="text-sm sm:text-base md:text-lg">
                  Desarrollador Backend
                </span>
              </div>
              <h3 className="text-lg font-semibold py-5">Idiomas que hablo</h3>
              <p>SQL, Java, Node Js, Bash</p>
              <h3 className="text-lg font-semibold py-5">
                Herramientas de Desarrollo
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spring Boot</li>
                <li>Postgres SQL</li>
                <li>Jaspert Report</li>
                <li>Docker</li>
                <li>Linux</li>
                <li>Git</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 ">
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">⚛️</span>
                <span className="text-sm sm:text-base md:text-lg">
                  Desarrollador Frontend
                </span>
              </div>
              <h3 className="text-lg font-semibold py-5">Idiomas que hablo</h3>
              <p className="">HTML, CSS, Sass, JavaScript</p>
              <h3 className="text-lg font-semibold py-5">
                Herramientas de Desarrollo
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>React Js</li>
                <li>React Native</li>
                <li>Vite</li>
                <li>Bootstrap</li>
                <li>Tailwinds</li>
                <li>PrimeFlex</li>
                <li>Zustand</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 ">
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">🦾</span>
                <span className="text-sm sm:text-base md:text-lg">
                  Otras Habilidades
                </span>
              </div>
              <h3 className="text-lg font-semibold py-5">Idiomas que hablo</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Español (Nativo)</li>
                <li>Guarani (Nativo)</li>
                <li>Ingles (intermedio)</li>
              </ul>
              <h3 className="text-lg font-semibold py-5">
                Herramientas de Desarrollo
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Trabajo en Equipo</li>
                <li>Proactivo</li>
                <li>Resolutivo</li>
                <li>Creativo</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Skills;
