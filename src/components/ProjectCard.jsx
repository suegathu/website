import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
      <div 
        className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
      >
        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.demo}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
            <a 
              href={project.code}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  };
export default ProjectCard  