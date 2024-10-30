import Layout from "../components/Layout";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 bg-gray-50 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mi</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <img
                  className="h-24 w-24 rounded-full mr-4 bg-slate-400"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGtzQLdQyHcQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676036224303?e=1735171200&v=beta&t=zZkobNOqm7w85r3URJx2sg00sUSi_BocZgt6JT6EnY8"
                  alt="Tu foto de perfil"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Edgar Meza
                  </h2>
                  <p className="text-gray-600">Desarrollador de Software</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Apasionado por la programación, cursando actualmente el tercer
                año de Ingeniería en Sistemas Informáticos. Me defino como una
                persona proactiva y autodidacta. Originario de Paraguay, me
                gustan mucho los diseños simples y minimalistas que mejoran la
                experiencia del usuario. Mi trayectoria en el desarrollo se basa
                en una constante esfuerzo y desdicación en implementar prácticas
                modernas para crear soluciones eficientes y elegantes.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Experiencia
              </h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-lg font-medium text-gray-800">
                    AZETA & MANDATOS
                  </h4>
                  <p className="text-gray-600">
                    Desarrollador Full Stack | 2024 - Presente
                  </p>
                  <p className="text-gray-700">
                    Desarrollo de aplicaciones web y moviles utilizando React,
                    JAVA, C# y bases de datos SQL.
                  </p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-gray-800">
                    DataSystem SAECA
                  </h4>
                  <p className="text-gray-600">
                    Desarrollador .Net | 2022 - 2023
                  </p>
                  <p className="font-semibold">
                    Mantenimiento de Software de Digitalización de Documentos:
                  </p>
                  Encargado del mantenimiento y optimización de software para la
                  digitalización de documentos, mejorando su rendimiento y
                  funcionalidad.
                  <p className="font-semibold">
                    Análisis de Requerimientos de Usuarios:
                  </p>
                  Habilidad para analizar y entender los requerimientos de los
                  usuarios, proponiendo mejoras continuas en el producto.
                  <p className="font-semibold">
                    Manejo de Metodologías Ágiles:
                  </p>{" "}
                  Experiencia en el uso de metodologías ágiles para la gestión
                  de proyectos y desarrollo de software, asegurando entregas
                  eficientes y de alta calidad.
                  <p className="font-semibold">
                    Análisis y Gestión de Migración Tecnológica:{" "}
                  </p>
                  Competencia en el análisis y gestión de la migración de
                  productos a nuevas tecnologías, garantizando una transición
                  exitosa y sin interrupciones.
                  <p className="text-gray-700">
                    Desarrollo de nuevas caracteristicas para un proyecto legacy
                  </p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-gray-800">
                    Starsoft SRL
                  </h4>
                  <p className="text-gray-600">
                    Desarrollador Full Stack | 2019 - 2023
                  </p>
                  <p className="text-gray-700">
                    Creación de interfaces de usuario responsivas y optimización
                    del rendimiento del frontend.
                  </p>
                  <span className="font-semibold">
                    Desarrollo y mantenimiento de interfaces{" "}
                  </span>{" "}
                  de usuario utilizando tecnologías de vanguardia en el Frontend
                  como React, Zustand, Sass.
                  <br />
                  <span className="font-semibold">
                    Diseño e implementación de API
                  </span>{" "}
                  Services robustos para optimizar la comunicación entre
                  sistemas, usando tecnologias como Java, postgres, Spring Boot.
                  <br />
                  <span className="font-semibold">
                    Análisis de las necesidades del usuario{" "}
                  </span>{" "}
                  para la elaboración de soluciones a medida.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutMe;
