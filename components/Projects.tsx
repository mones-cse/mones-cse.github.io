import GlowingCard from "./GlowingCard";
import portfolioData from "../utils/portfolioData.json";

import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

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
  <div className="hover:scale-[101%] transition-all duration-300">
    <GlowingCard>
      <div className="w-full h-48 relative overflow-hidden bg-white/10">
        <Image
          src={image}
          alt={`${title} demo`}
          width={0}
          height={0}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-2 ">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
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
        <p className=" mb-2 text-sm text-secondary_text font-light">
          {description}
        </p>
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
    </GlowingCard>
  </div>
);

const Projects = () => {
  const projects = portfolioData.projects;
  return (
    <AnimateOnScroll>
      <section className="pt-4 mb-10 px-2.5 max-w-2xl  mx-auto" id="project">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary_text">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Projects;
