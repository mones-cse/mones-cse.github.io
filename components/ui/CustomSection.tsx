interface customSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const CustomSection: React.FC<customSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <section
      className={`max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center pt-4 px-2.5 mx-auto mb-10  gap-4 ${className} `}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="h-px w-8 bg-theme_primary/50 mr-4"></div>
        <h1 className="text-4xl text-primary_text">{title}</h1>
        <div className="h-px w-8 bg-theme_primary/50 ml-4"></div>
      </div>
      {children}
    </section>
  );
};
export default CustomSection;
