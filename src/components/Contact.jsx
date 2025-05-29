import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
      <section id="contact" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:susangathu10@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Send Email
            </a>
            
            <a 
              href="https://www.linkedin.com/in/susan-gathu-294400361/"
              className="flex items-center gap-3 px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/suegathu"
              className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 hover:transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/susan-gathu-294400361/"
              className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 hover:transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:susangathu10@gmail.com"
              className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 hover:transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a 
            href="tel:+254740080374"
            className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 hover:transform hover:scale-110 transition-all duration-300"
            >
            <Phone size={24} />
            </a>

          </div>
        </div>
      </section>
    );
  };
export default Contact  