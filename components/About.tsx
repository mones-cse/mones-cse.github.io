import { AnimateOnScroll } from "./AnimateOnScroll";

const About = () => {
  return (
    <AnimateOnScroll id="about">
      <div className="text-white/50 font-light flex flex-col max-w-2xl mx-auto justify-center text-center gap-4 mb-10 pt-4 px-2.5">
        <p className="text-3xl font-semibold text-white">About</p>
        <p>
          I am focused on JS, TS, React, Next.js, Node.js, and Python, working
          across both front-end and back-end development. Over the years, I’ve
          worked with startups, enterprises, government organizations, and
          financial institutions, developing solutions ranging from SaaS
          platforms to secure document management systems, analytical platforms
          with natural language querying (NLQ), and Web3 solutions leveraging
          IPFS.
        </p>
        <p>
          I thrive on research and solving problems, from building architectures
          to designing innovative solutions, with experience deploying projects
          using Docker on AWS and GCP. My work has been recognized with awards
          such as the National ICT Award and Microsoft Imagine Cup. I was also
          part of the Rockstart AI Accelerator in the Netherlands and the
          LongHash X Accelerator for Web3 innovations.
        </p>
        <p>
          With a Master’s and Bachelor’s in Computer Science and Engineering, I
          remain committed to learning and delivering impactful solutions
          tailored to real-world needs.
        </p>
        <p>Let’s build something exceptional together!</p>
      </div>
    </AnimateOnScroll>
  );
};

export default About;
