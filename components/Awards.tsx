import Image from "next/image";
import portFolioData from "../utils/portFolioData.json";
import GlassCard from "./glassCard";

//todo: image ratio change images
const Award = () => {
  const awardData = portFolioData.awards;
  return (
    <section className="flex flex-col items-center max-w-2xl justify-center py-5 px-2.5 mx-auto">
      <h1 className="text-4xl mb-4">Awards</h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 w-full">
        {awardData.map((item, index) => (
          <GlassCard key={index}>
            <div className="flex items-start gap-4 w-full ">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={86}
                  height={86}
                />
              )}
              <div className="flex-grow">
                <p className="text-sm">{item.title}</p>
                
                <h3 className="text-xs text-zinc-600">{item.organization}</h3>
                <p className="text-xs text-zinc-600">{item.description}</p>
                <p className="text- text-zinc-600">{item.year}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Award;
