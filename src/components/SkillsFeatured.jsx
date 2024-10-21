const SkillsFeatured = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Habilidades Técnicas
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { skill: "Backend con Java y Spring Boot", icon: "☕" },
            { skill: "Frontend con React", icon: "⚛️" },
            { skill: "Bases de datos con PostgreSQL", icon: "🐘" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center"
            >
              <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">
                {item.icon}
              </span>
              <span className="text-sm sm:text-base md:text-lg">
                {item.skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsFeatured;
