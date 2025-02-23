"use client";
const GlowingCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="award-card relative p-[0.3px] w-auto cursor-pointer rounded-lg 
                  bg-opacity-10 bg-white before:absolute before:left-0 before:top-0 before:w-full 
                  before:h-full before:rounded-lg before:opacity-0 before:transition-opacity 
                  before:duration-500 before:z-[3] before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_40%)]
                  after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-lg 
                  after:opacity-0 after:transition-opacity after:duration-500 after:z-[1] 
                  after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.4),transparent_40%)]
                  hover:before:opacity-100 hover:after:opacity-100
                  border border-gray-700"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full rounded-lg bg-[rgb(23,23,23)] p-2.5 z-[2]">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
