import React from "react";
import Image from "next/image";
import portFolioData from "../utils/portfolioData.json";
import GlowingCard from "./GlowingCard";
import { AnimateOnScroll } from "./AnimateOnScroll";
// Types
interface CardProps {
  title: string;
  organization: string;
  year: string;
  description: string;
  logo: string;
}

// AwardCard Component - Handles the content structure
const AwardCard: React.FC<CardProps> = ({
  title,
  description,
  logo,
  organization,
  year,
}) => {
  return (
    <GlowingCard>
      <div className="flex items-start gap-4 w-full">
        {logo && (
          <Image src={logo} alt={`${title} logo`} width={48} height={48} />
        )}
        <div className="flex-grow">
          <p className="text-xs text-primary_text">{title}</p>
          <h3 className="text-xs text-primary_text ">{organization}</h3>
          <p className="text-xs text-secondary_text font-light">
            {description}
          </p>
          <p className="text-xs text-secondary_text font-light">{year}</p>
        </div>
      </div>
    </GlowingCard>
  );
};

// Cards Grid Component
const CardsGrid: React.FC<{ awards: CardProps[] }> = ({ awards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {awards.map((award, index) => (
        <AwardCard key={index} {...award} />
      ))}
    </div>
  );
};

// Main Awards Section Component
const AwardsSection: React.FC = () => {
  const awardData = portFolioData.awards;

  return (
    <AnimateOnScroll id="awards">
      <section className="max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center pt-4 px-2.5 mx-auto mb-10">
        <h1 className="text-4xl mb-4 text-primary_text">Awards</h1>
        <CardsGrid awards={awardData} />
      </section>
    </AnimateOnScroll>
  );
};

export default AwardsSection;
