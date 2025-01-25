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
    <div className="max-w-xl  mx-auto text-center text-white flex flex-col gap-2 mb-10">
      <p className="text-3xl mb-4">Experience</p>
      <div className="grid grid-cols-2 gap-4 mx-auto text-start w-full">
        {experienceData.map((data, index) => (
          <div key={index} className="bg-white/5 p-2 rounded-md backdrop-blur">
            <div>
              <p>{data.title}</p>
              <p>{data.company}</p>
              <p>{data.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
