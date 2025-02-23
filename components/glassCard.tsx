const GlassCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-gray-600 bg-black/5 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex flex-col items-start w-full p-3 rounded-md">
      {children}
    </div>
  );
};

export default GlassCard;
