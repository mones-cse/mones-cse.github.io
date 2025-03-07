const TechBadges = ({ techs }: { techs: string[] }) => {
  return (
    <>
      {techs.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-theme_secondary/30 text-white px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </>
  );
};

export default TechBadges;
