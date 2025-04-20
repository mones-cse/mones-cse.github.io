"use client";
import Image from "next/image";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import type { Award } from "@/data/portfolioData";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import CustomSection from "./ui/CustomSection";

import GlowingCard from "./ui/GlowingCard";

interface AwardCardProps extends Award {
  onClick?: () => void;
}
// AwardCard Component - Handles the content structure
const AwardCard: React.FC<AwardCardProps> = ({
  title,
  description,
  logo,
  organization,
  year,
  onClick,
}) => {
  return (
    <GlowingCard onClick={onClick}>
      <div className="flex items-start gap-4 w-full ">
        {logo && (
          <Image src={logo} alt={`${title} logo`} width={64} height={64} />
        )}
        <div className="flex-grow">
          <p className="text-xs font-semibold text-primary_text mb-1">
            {title}
          </p>
          <h3 className="text-xs text-theme_primary font-medium">
            {organization}
          </h3>
          <p className="text-xs text-secondary_text font-light">
            {description}
          </p>
          <p className="text-xs text-primary_text font-light">{year}</p>
        </div>
      </div>
    </GlowingCard>
  );
};

// Cards Grid Component
const CardsGrid: React.FC<{ awards: Award[] }> = ({ awards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full ">
      {awards.map((award, index) => (
        <AwardCard
          key={index}
          {...award}
          onClick={() => {
            if ("link" in award && award.link) {
              window.open(award.link, "_blank");
            }
          }}
        />
      ))}
    </div>
  );
};

// Main Awards Section Component
const AwardsSection: React.FC = () => {
  const awardData = portfolioData.awards;

  return (
    <AnimateOnScroll id="awards">
      <CustomSection title="Awards" className="">
        <CardsGrid awards={awardData} />
      </CustomSection>
    </AnimateOnScroll>
  );
};

export default AwardsSection;
