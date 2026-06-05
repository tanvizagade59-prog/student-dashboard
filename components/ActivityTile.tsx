"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

interface ActivityTileProps {
  chart?: boolean;
}

const data = [
  { day: "Mon", value: 25 },
  { day: "Tue", value: 42 },
  { day: "Wed", value: 61 },
  { day: "Thu", value: 66 },
  { day: "Fri", value: 55 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 78 },
];

export default function ActivityTile({ chart = false }: ActivityTileProps) {
  if (!chart) {
    const columns = [
      { date: "12 May", items: [3, 2, 0, 1] },
      { date: "13 May", items: [1, 4, 2, 0] },
      { date: "14 May", items: [0, 1, 3, 2] },
      { date: "15 May", items: [2, 0, 4, 1] },
      { date: "16 May", items: [4, 2, 1, 3] },
      { date: "17 May", items: [1, 3, 0, 2] },
      { date: "18 May", items: [2, 1, 3, 0] },
    ];

    const intensityColor = (val: number) => {
      if (val === 4) return "bg-purple-500";
      if (val === 3) return "bg-indigo-600";
      if (val === 2) return "bg-indigo-900";
      if (val === 1) return "bg-purple-950/60";
      return "bg-white/[0.01]";
    };

    return (
      <div className="bg-[#090f1d] rounded-[2rem] p-6 border border-white/[0.04] h-[320px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold tracking-wide text-white">Activity Overview</h3>
          <div className="bg-white/[0.02] border border-white/[0.06] text-[11px] font-bold text-gray-300 px-3 py-1.5 rounded-xl cursor-pointer flex items-center gap-1">
            This Week <span className="text-[9px] text-gray-500">▼</span>
          </div>
        </div>

        {/* GitHub Contribution Blocks Array Mapping */}
        <div className="flex gap-3 my-auto justify-center items-center">
          <div className="flex flex-col justify-between h-24 text-[9px] font-bold text-gray-500 pr-1 select-none">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>

          <div className="flex gap-3.5">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-2 items-center">
                <span className="text-[9px] font-bold text-gray-500">{col.date}</span>
                <div className="flex flex-col gap-2">
                  {col.items.map((val, i) => (
                    <div key={i} className={`w-5 h-5 rounded-md ${intensityColor(val)}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytic Metrics Summary Block Footer row */}
        <div className="flex items-center justify-between border-t border-white/[0.03] pt-4">
          <div className="flex items-center gap-3">
            <span className="text-sm bg-purple-500/10 p-2 rounded-xl text-purple-400">✓</span>
            <div>
              <div className="text-base font-black text-white">37</div>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Activities</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm bg-cyan-500/10 p-2 rounded-xl text-cyan-400">🕒</span>
            <div>
              <div className="text-base font-black text-white">18.4</div>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Hours Learned</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="text-xs font-bold">↗</span>
            <div>
              <div className="text-sm font-black">+23%</div>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">vs last week</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#090f1d] rounded-[2rem] p-6 border border-white/[0.04] h-[320px] flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold tracking-wide text-white">Weekly Progress</h3>
        <div className="bg-white/[0.02] border border-white/[0.06] text-[11px] font-bold text-gray-300 px-3 py-1.5 rounded-xl cursor-pointer flex items-center gap-1">
          All Courses <span className="text-[9px] text-gray-500">▼</span>
        </div>
      </div>

      {/* Styled Trend Area Line Chart Section Component */}
      <div className="w-full h-52 relative pr-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 700 }}
              domain={[0, 100]}
              tickCount={5}
            />
            <Tooltip
              contentStyle={{ background: "#0c1224", borderColor: "rgba(255,255,255,0.06)", borderRadius: "12px" }}
              labelStyle={{ color: "#9ca3af", fontSize: "11px" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#a855f7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#purpleGlow)"
              dot={{ fill: "#a855f7", stroke: "#090f1d", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Tooltip Label Badge indicator overlay component */}
        <div className="absolute top-[18%] right-[4%] bg-purple-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-purple-500">
          78%
        </div>
      </div>
    </div>
  );
}