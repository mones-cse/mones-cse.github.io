// import React from "react";
// import { FaAward } from "react-icons/fa";

// const AwardCard = ({
//   year,
//   title,
//   organization,
//   description,
//   logo,
// }: {
//   year: string;
//   title: string;
//   organization: string;
//   description: string;
//   logo?: string;
// }) => (
//   <div className="border border-white/10 py-4 px-4">
//     <div className="flex flex-row gap-2 justify-between start">
//       <div>
//         <span>{title} </span>
//         <br />
//         <span>{year} </span>
//       </div>
//       <div className="h-12 flex-shrink-0">
//         {logo ? (
//           <img
//             src={`/${logo}`}
//             alt={`${organization} logo`}
//             className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
//           />
//         ) : (
//           <FaAward className="w-full h-full" />
//         )}
//       </div>
//     </div>
//     <br />
//     <div>
//       <p>{organization}</p>
//       <p className="text-sm text-white/50">{description}</p>
//     </div>
//   </div>
// );

// const AwardsSection = () => {
//   const awards = [
//     {
//       year: "2022",
//       title: "LongHash X Accelerator",
//       organization: "Dosier",
//       description: "Decentralized Content Delivery",
//       logo: "logo-long-hash.png",
//     },
//     {
//       year: "2019",
//       title: "National ICT Award",
//       organization: "Cramstack",
//       description: "Power Analytics (Big Data Analytics)",
//       logo: "logo-ict.png",
//     },
//     {
//       year: "2018",
//       title: "Rockstart AI Accelerator",
//       organization: "Cramstack",
//       description:
//         "Search Driven Data Analytics Platform (NLQ Based) (Batch 2 Alumni)",
//       location: "Netherlands",
//       logo: "logo-rock-start.png",
//     },
//     {
//       year: "2018",
//       title: "Echelon 100 National Champion",
//       organization: "Cramstack",
//       description: "Search Driven Data Analytics Platform (NLQ Based)",
//       location: "Singapore",
//       logo: "logo-e27.png",
//     },
//     {
//       year: "2017",
//       title: "Digital Winner",
//       organization: "Cramstack",
//       description: "Search Driven Data Analytics Platform (NLQ Based)",
//       location: "Telenor",
//     },
//     {
//       year: "2015",
//       title: "Microsoft Imagine Cup National Champion",
//       organization: "Karigor",
//       description: "Smoking Bad (Game)",
//       logo: "logo-imagine-cup.png",
//     },
//     {
//       year: "2014",
//       title: "Microsoft Imagine Cup National Champion",
//       organization: "Karigor",
//       description: "!prince charming (Game)",
//       logo: "logo-imagine-cup.png",
//     },
//   ];

//   return (
//     <section className="py-12">
//       <div className="max-w-2xl mx-auto">
//         <div className="flex items-center gap-2 mb-6">
//           <FaAward className="w-6 h-6 text-blue-400" />
//           <h2 className="text-2xl font-bold text-white">Awards</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {awards.map((award, index) => (
//             <AwardCard
//               key={index}
//               year={award.year}
//               title={award.title}
//               organization={award.organization}
//               description={award.description}
//               logo={award.logo}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;


import Image from "next/image";
import portFolioData from "../utils/portFolioData.json";
import GlassCard from "./glassCard";

//todo: image ratio change images
const Award = () => {
  const awardData = portFolioData.awards;
  return (
    <section className="flex flex-col items-center w-full py-5 px-2.5">
      <h1 className="text-4xl mb-4">Awards</h1>
      <div className="flex flex-col items-center w-full gap-y-4">
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
