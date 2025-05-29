const SkillCategory = ({ category }) => {
    const Icon = category.icon;
    
    return (
      <div 
        className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:transform hover:scale-105"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold">{category.name}</h3>
        </div>
        
        <div className="space-y-3">
          {category.items.map((skill, skillIndex) => (
            <div 
              key={skillIndex}
              className="flex items-center gap-3 text-slate-300"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default SkillCategory