import React from 'react';

const About = () => {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                I’m a full-stack developer with 1 year of experience, currently working as a frontend developer at Kilele and also taking on freelance projects. I specialize in building responsive, user-centric applications using modern technologies.
                </p>

                <p className="text-lg text-slate-300 leading-relaxed">
                My core tech stack includes the MERN stack (MongoDB, Express, React, Node.js), along with Tailwind CSS, Bootstrap, and Django with Django Rest Framework. I'm also proficient with PostgreSQL, MySQL, SQLite3, and tools like Docker, Postman, Git, and Jira. I thrive in agile environments and value writing clean, maintainable code while continuously learning and growing as a developer.
                </p>
            </div>
            </div>             
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl opacity-50">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default About;