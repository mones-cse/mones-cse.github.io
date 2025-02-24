import GlowingCard from "./GlowingCard";
import portfolioData from "../utils/portfolioData.json";
import { AnimateOnScroll } from "./AnimateOnScroll";

const Experience = () => {
  const experienceData = portfolioData.experience;
  return (
    <AnimateOnScroll id="experience">
      <div className="max-w-2xl mx-auto text-center text-primary_text flex flex-col gap-2 mb-10  pt-4 px-2.5">
        <p className="text-3xl font-semibold mb-4">Experience</p>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mx-auto text-start w-full">
          {experienceData.map((data, index) => (
            <GlowingCard key={index}>
              <div className="flex flex-col">
                <p className="text-base">{data.title}</p>
                <p className="text-sm opacity-80 text-secondary_text">
                  {data.company}
                </p>
                <p className="text-xs opacity-60 text-secondary_text">
                  {data.date}
                </p>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Experience;
