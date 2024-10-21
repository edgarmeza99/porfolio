const ProjectFeatured = () => {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Hormiga",
              description:
                "Sistema de gestión de gastos y elaboración de presupuestos desarrollado con Java y Spring Boot en el backend, y React en el frontend. Utiliza PostgreSQL para el almacenamiento de datos.",
              business: "Edgar Meza",
            },
            {
              title: "FacturaFácil",
              description:
                "Aplicación de facturación que simplifica el proceso de emisión y gestión de facturas. Desarrollada con React y una API REST en Java.",
              business: "Starsoft SRL",
            },
            {
              title: "StarMarket",
              description:
                "Plataforma de e-commerce. Utiliza React para el frontend, Java con Spring Boot para el backend, y PostgreSQL para la base de datos.",
              business: "Starsoft SRL",
            },
          ].map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <p className="font-bold text-sm ">
                Dueño del codigo: {project.business}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatured;
