import GlowingCard from "./ui/GlowingCard";
import portfolioData from "../data/portfolioData.json";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import CustomSection from "./ui/CustomSection";
import TechBadges from "./ui/TechBadges";

const Experience = () => {
  const experienceData = portfolioData.experience;

  return (
    <AnimateOnScroll id="experience">
      <CustomSection title="Experience">
        <div className="flex flex-col gap-6 ">
          {experienceData.map((data, index) => (
            <GlowingCard key={index}>
              <div className="flex flex-col gap-1 ">
                <p className="text-xl font-semibold text-white">
                  {data.position}
                </p>
                <p className="text-sm text-theme_primary">
                  {data.company}{" "}
                  <span className="text-gray-400">| {data.location}</span>
                </p>
                <p className="text-xs text-gray-500">{data.date}</p>
              </div>

              <ul className="mt-4 text-sm text-gray-300 space-y-2">
                {data.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-theme_primary">✔</span> {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                <TechBadges techs={data.technologies} />
              </div>
            </GlowingCard>
          ))}
        </div>
      </CustomSection>
    </AnimateOnScroll>
  );
};

export default Experience;
