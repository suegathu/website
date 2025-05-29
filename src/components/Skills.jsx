import { Cloud, Code, Palette, Server, Zap } from "lucide-react";
import SkillCategory from "./SkillCategory";
const Skills = () => {
    const skills = [
      { name: "Frontend", 
        items: [
            "Html5 and CSS3",
            "Javascript",
            "React.js", 
            "Next.js", 
            "TypeScript", 
            "Tailwind CSS",
            "Bootstrap"
        ], 
        icon: Code 
    },
      { 
        name: "Backend", 
        items: [
            "Node.js",
            "Express.js", 
            "Python",
            "Django",
            "Django Rest Framework",
        ],
            icon: Zap 
        },
      { name: "Database", 
        items: [
            "PostgreSQL", 
            "MySQL", 
            "MongoDB", 
            
        ], 
        icon: Server 
    },
    { name: "DevOps/Tools", 
        items: [
            "Git & GitHub", 
            "Docker", 
            "Figma", 
            "Vercel/Render", 
            
        ], 
        icon: Palette 
    },
    { name: "Others", 
        items: [
            "Restful APIs", 
            "JWT/Auth", 
            "Responsive Design", 
            "Testing (Rest, Postman)",
            
        ], 
        icon:  Cloud
    },
    ];
  
    return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <SkillCategory key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Skills 