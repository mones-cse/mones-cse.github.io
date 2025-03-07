import { Balancer, Provider } from "react-wrap-balancer";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import portfolioData from "../data/portfolioData.json";
import CustomSection from "./ui/CustomSection";

const About = () => {
  return (
    <AnimateOnScroll id="about">
      <CustomSection title="About" className="text-center">
        <Provider>
          {portfolioData.about.map((item, index) => (
            <p key={index} className="text-secondary_text text-md font-light">
              <Balancer>{item}</Balancer>
            </p>
          ))}
        </Provider>
      </CustomSection>
    </AnimateOnScroll>
  );
};

export default About;
