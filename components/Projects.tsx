import GlowingCard from "./ui/GlowingCard";
import portfolioData from "../data/portfolioData.json";
import CustomSection from "./ui/CustomSection";
import Image from "next/image";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import Balancer from "react-wrap-balancer";
import TechBadges from "./ui/TechBadges";

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
  <div className="hover:scale-[101%] transition-all duration-300 h-full ">
    <GlowingCard>
      <div className="flex flex-col h-full">
        <div className="w-full h-48 relative overflow-hidden bg-white/10">
          <Image
            src={image}
            alt={`${title} demo`}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="py-2 flex flex-col flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-primary_text mb-2">
              {title}
            </h3>
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
          <p className="mb-2 text-sm text-secondary_text font-light flex-grow">
            <Balancer>{description}</Balancer>
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <TechBadges techs={technologies} />
          </div>
        </div>
      </div>
    </GlowingCard>
  </div>
);

const Projects = () => {
  const projects = portfolioData.projects;

  // Get the count of projects
  const projectCount = projects.length;

  // Determine if we have an odd number of projects
  const hasOddProjects = projectCount % 2 !== 0;

  return (
    <AnimateOnScroll id="project">
      <CustomSection title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                hasOddProjects && index === projectCount - 1
                  ? "lg:col-span-2 lg:w-1/2 lg:mx-auto"
                  : ""
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </CustomSection>
    </AnimateOnScroll>
  );
};

export default Projects;
