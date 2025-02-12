import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-2.5 py-4 w-full text-center border border-t-1 border-white/10">
      <p>Made with ❤️ by Mones</p>
      <div className="flex items-center justify-center gap-2.5">
        {/* todo: add link */}
        <AiFillLinkedin fontSize={20} />
        <AiFillGithub fontSize={20} />
        <AiOutlineMail fontSize={20} />
        <AiFillTwitterCircle fontSize={20} />
      </div>
    </footer>
  );
};

export default Footer;
