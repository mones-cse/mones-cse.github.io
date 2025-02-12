import GlassCard from "./glassCard";

const projects = [
  {
    title: "Document Management System",
    description:
      "Developed for a bank, this system allows secure role based access to digital records and converts physical documents to digital using Tesseract OCR, streamlining document management and improving efficiency",
    technologies: ["React", "TypeScript", "Base Web", "Tesseract OCR"],
    link: "#",
    image: "/dms-bg.png", // Using placeholder for demo
  },
  {
    title: "Dolpin",
    description:
      "A decentralized and encrypted storage layer built with IPFS/Filecoin, enabling secure file sharing. Designed to back up valuable NFTs and digital assets with enhanced privacy and security.",
    technologies: ["React", "IPFS", "Node", "AWS", "TypeScript"],
    link: "https://example.com/project2",
    image: "/dolpin-bg.png", // Using placeholder for demo
  },
  {
    title: "NLQ",
    description:
      "Developed an analytics platform with a natural language-driven search interface, enabling users to analyze and visualize data with virtually no learning curve. Designed to simplify data insights through intuitive querying and visualization tools.",
    technologies: [
      "React",
      "D3.js",
      "Node.js",
      "Python",
      "Ant Design",
      "Django",
    ],
    link: "https://example.com/project3",
    image: "/cramstack-bg.png", // Using placeholder for demo
  },
];

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  image,
}: {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}) => (
  // <div className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors duration-200 group">
  <GlassCard
    
  >
    <div className="w-full h-48 relative overflow-hidden bg-white/10">
      <img
        src={image}
        alt={`${title} demo`}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
      />
    </div>

    <div className="pt-6 pb-2">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            {/* <ExternalLink size={20} /> */}
          </a>
        )}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-xl text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </GlassCard>
);

const Projects = () => {
  return (
    <section className="pt-4 mb-10 px-2.5 max-w-2xl  mx-auto" id="project">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </section>
  );
};

export default Projects;
