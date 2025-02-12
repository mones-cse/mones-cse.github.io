import portFolioData from "../utils/portFolioData.json";
import GlassCard from "./glassCard";

const Education = () => {
  const eductionData = portFolioData.education;
  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto px-2.5  pt-4 pb-10" id="education">
      <h1 className="text-4xl mb-4">Education</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
        {eductionData.map((item, index) => (
          <GlassCard key={index}>
            <p className="text-base">{item.degree}</p>
            <h3 className="text-sm text-zinc-600">{item.institution}</h3>
            <p className="text-sm text-zinc-600">{item.year}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
