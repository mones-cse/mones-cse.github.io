import { Balancer, Provider } from "react-wrap-balancer";
import { AnimateOnScroll } from "./AnimateOnScroll";
import portfolioData from "../data/portfolioData.json";

const About = () => {
  return (
    <AnimateOnScroll id="about">
      <div className=" max-w-2xl lg:max-w-3xl text-secondary_text text-md font-light flex flex-col  mx-auto justify-center text-center gap-4 mb-10 pt-4 px-2.5">
        <p className="text-3xl font-semibold text-primary_text">About</p>
        <Provider>
          {portfolioData.about.map((item, index) => (
            <p key={index}>
              <Balancer>{item}</Balancer>
            </p>
          ))}
        </Provider>
      </div>
    </AnimateOnScroll>
  );
};

export default About;
