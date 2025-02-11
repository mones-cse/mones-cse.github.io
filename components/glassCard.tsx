const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-gray-600 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.25)] flex flex-col items-start w-full p-5 rounded-md">
      {children}
    </div>
  );
};

export default GlassCard;
