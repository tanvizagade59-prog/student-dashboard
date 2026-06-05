export default function HeroTile() {
  const days = [
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "F", active: true },
    { label: "S", active: true },
    { label: "S", active: false },
    { label: "S", active: false },
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-gradient-to-r from-[#0d0722] via-[#09091b] to-[#040511] p-8 h-[220px] flex justify-between items-center w-full">
      <div className="absolute right-0 top-0 w-[400px] h-full bg-purple-600/10 blur-[90px] pointer-events-none" />

      {/* Main Message Block layout */}
      <div className="z-10 flex flex-col justify-between h-full max-w-xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back, Tanvi! 👋
          </h1>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Keep learning, keep growing. You've got this!
          </p>
        </div>

        {/* Streak Metrics Layout */}
        <div className="flex items-center gap-4">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-4 py-2.5 flex items-center gap-3">
            <span className="text-xl">🔥</span>
            <div>
              <div className="text-xl font-black leading-none">12</div>
              <p className="text-[9px] uppercase tracking-wider text-gray-400 mt-1">Day Streak</p>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-4 py-[14px] flex items-center gap-2.5">
            {days.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    day.active
                      ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                      : "border border-white/20 bg-transparent"
                  }`}
                />
                <span className="text-[9px] font-bold text-gray-500">{day.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Crystal Element Design Vector Right Side */}
      <div className="relative hidden md:block mr-12 z-10">
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl transform scale-75 translate-y-4" />
        <div className="w-28 h-5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full transform translate-y-16 border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <div className="w-[80%] h-[50%] bg-cyan-400/10 rounded-full blur-xs" />
        </div>
        <div 
          className="w-20 h-20 bg-gradient-to-b from-purple-400 via-indigo-500 to-purple-800 rounded-xl rotate-[45deg] skew-x-6 skew-y-6 shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-white/20 animate-bounce" 
          style={{ animationDuration: '4s' }} 
        />
      </div>
    </div>
  );
}