import portfolioData from "../utils/portfolioData.json";
import GlowingCard from "./GlowingCard";

const Education = () => {
  const eductionData = portfolioData.education;
  return (
    <section
      className="flex flex-col items-center max-w-2xl mx-auto px-2.5  pt-4 pb-10"
      id="education"
    >
      <h1 className="text-4xl mb-4 text-primary_text">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {eductionData.map((item, index) => (
          <GlowingCard key={index}>
            <p className="text-sm text-primary_text">{item.degree}</p>
            <h3 className="text-xs text-secondary_text font-light">
              {item.institution}
            </h3>
            <p className="text-xs text-secondary_text font-light">
              {item.year}
            </p>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
