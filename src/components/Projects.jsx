import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "NexTalk – Language Exchange Chat App",
            description: "A real-time language exchange platform that connects native speakers and learners around the world. Users can add friends, send messages, and match based on native and learning languages. Built with the MERN stack, Stream for chat functionality, and styled with Tailwind CSS.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stream API", "Tailwind CSS"],
            image: "/images/nextalk.png",
            demo: "https://nextalk-7t6i.onrender.com/", 
            code: "https://github.com/suegathu/NexTalk", 
          }
          ,
      {
        title: "Travel Buddy App",
        description: "A full-stack travel companion application that helps users discover hotels, restaurants, attractions, and book flights with real-time data, payments, QrCode, emails and interactive maps.",
        tech: ["React.js", "Django Rest Framework", "Tailwind CSS", "PostgreSQL", "OpenStreetMap", "Pexels API", "Aviationstack API"],
        image: "/images/travel-buddy.png",
        demo: "https://travel-buddy-frontend-xi.vercel.app/", 
        code: "https://github.com/suegathu/travel-buddy-frontend/", 
        backend: "https://github.com/suegathu/travel-buddy-backend",
      },      
      {
        title: "Student Study Portal",
        description: "A full-featured web application to help students organize their academic activities. Features include notes management, homework deadlines, YouTube integration, to-do lists, dictionary, and Wikipedia search — all within a clean, responsive interface. Built with robust authentication using JWT.",
        tech: ["Python", "MySQL", "Bootstrap", "JWT", "Flask/Django"],
        image: "/images/student-portal.png", 
        demo: "https://student-portal-a9sw.onrender.com/", 
        code: "https://github.com/suegathu/student_portal", 
      }
      
    ];
  
    return (
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Projects;