import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8 ">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm sm:text-base mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Edgar Meza. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-8 mr-10">
          <a
            href="https://github.com/edgarmeza99"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/edgar-daniel-meza-benitez-9480171a0/"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mezaedgar1999@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
