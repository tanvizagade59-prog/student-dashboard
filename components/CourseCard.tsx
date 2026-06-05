interface Props {
  title: string;
  progress: number;
  lessons: number;
  color: string;
  icon: string;
}

export default function CourseCard({ title, progress, lessons, color, icon }: Props) {
  const getIconStyles = (symbol: string) => {
    if (symbol === "⚛️") return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    if (symbol === "JS") return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs font-bold";
    if (symbol === "▲") return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  };

  return (
    <div className="bg-[#090f1d] rounded-[2rem] p-5 border border-white/[0.04] hover:border-purple-500/20 transition-all duration-300 relative group flex flex-col justify-between min-h-[240px]">
      <div className="absolute top-4 right-4 text-gray-600 cursor-pointer text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        •••
      </div>

      <div>
        {/* Dynamic Context Header Logos */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border text-base mb-5 ${getIconStyles(icon)}`}>
          {icon}
        </div>
        <h3 className="text-sm font-bold tracking-wide text-white group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
      </div>

      {/* Numerical Tracks Layout Progress info */}
      <div className="mt-4 w-full">
        <div className="flex justify-between items-center text-[11px] font-medium text-gray-400 mb-1.5">
          <span className="text-gray-500 font-bold">Progress</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>

        <div className="h-1 bg-black/40 rounded-full w-full overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
          />
        </div>

        <div className="mt-3 text-[10px] font-bold text-gray-500 tracking-wide">
          {lessons} Lessons
        </div>
      </div>
    </div>
  );
}