import Layout from "../components/Layout";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <Layout>
      <section id="proyectos" className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Todos mis proyectos
          </h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Hormiga",
                images: "/images/control-gastos.jpg",
                description:
                  "Sistema de gestión de gastos y elaboración de presupuestos desarrollado con Java y Spring Boot en el backend, y React en el frontend. Utiliza PostgreSQL para el almacenamiento de datos.",
                business: "Edgar Meza",
              },
              {
                title: "FacturaFácil",
                images: "/images/facturafacil.png",
                description:
                  "Aplicación de facturación que simplifica el proceso de emisión y gestión de facturas. Desarrollada con React y una API REST en Java.",
                business: "Starsoft SRL",
              },
              {
                title: "StarMarket",
                images: "/images/starmarket.jfif",
                description:
                  "Plataforma de e-commerce. Utiliza React para el frontend, Java con Spring Boot para el backend, y PostgreSQL para la base de datos.",
                business: "Starsoft SRL",
              },
              {
                title: "App Nueva Americana",
                images: "/images/nuevamericana.jfif",
                description:
                  "Ayudé en el proyecto de la aplicación de la tarjeta de crédito de Nueva Americana, con React Native",
                business: "AZETA & Mandatos",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 "
              >
                <div className="w-full h-36 mb-10  ">
                  <img
                    src={project.images || "https://picsum.photos/600/250"}
                    className="rounded-lg  w-full max-h-full object-fill"
                    alt={project.title}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <p className="font-bold text-sm ">
                  Dueño del codigo: {project.business}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
