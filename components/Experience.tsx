import GlassCard from "./glassCard";

const experienceData = [
  {
    title: "Co-Founder | Technical Lead",
    company: "Dosier",
    date: "2022-2024",
  },
  {
    title: "Technical Lead",
    company: "Cramstack",
    date: "2017-2022",
  },
  {
    title: "Software Engineer",
    company: "Inovio",
    date: "2016-2016",
  },
  {
    title: "Game Developer",
    company: "Pechas Game Studio",
    date: "2014-2015",
  },
];

const Experience = () => {
  return (
    <div className="max-w-2xl mx-auto text-center text-primary_text flex flex-col gap-2 mb-10  pt-4 px-2.5" id="experience">
      <p className="text-3xl font-semibold mb-4">Experience</p>
      <div className="grid grid-cols-2 gap-4 mx-auto text-start w-full">
        {experienceData.map((data, index) => (
          <GlassCard key={index}>
          <div className="flex flex-col gap-2">
              <p className="text-base">{data.title}</p>
              <p className="text-sm opacity-80 text-secondary_text">{data.company}</p>
              <p className="text-xs opacity-60 text-secondary_text">{data.date}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
