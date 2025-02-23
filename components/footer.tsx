import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2.5 py-4 w-full text-center border border-t-1 border-white/10 relative z-10">
      <p className="text-secondary_text">Made with ❤️ by Mones</p>
      <div className="flex items-center justify-center gap-2.5 text-primary_text">
        <Link
          href="https://www.linkedin.com/in/monesul/"
          target="_blank"
          className="cursor-pointer hover:scale-[120%] transition-all duration-300"
        >
          <AiFillLinkedin fontSize={20} />
        </Link>
        <Link
          href={"https://github.com/mones-cse/"}
          target="_blank"
          className="cursor-pointer hover:scale-[120%] transition-all duration-300"
        >
          <AiFillGithub fontSize={20} />
        </Link>
        <Link
          href={"mailto:mones.cse@gmail.com"}
          target="_blank"
          className="cursor-pointer hover:scale-[120%] transition-all duration-300"
        >
          <AiOutlineMail fontSize={20} />
        </Link>
        <Link
          href={"https://x.com/mones_cse"}
          target="_blank"
          className="cursor-pointer hover:scale-[120%] transition-all duration-300"
        >
          <AiFillTwitterCircle fontSize={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
