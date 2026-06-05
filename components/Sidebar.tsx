"use client";

import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Calendar,
  BarChart3,
  Trophy,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronLeft
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", badge: null },
  { icon: BookOpen, label: "My Courses", badge: null },
  { icon: ClipboardList, label: "Assignments", badge: null },
  { icon: Calendar, label: "Calendar", badge: null },
  { icon: BarChart3, label: "Progress", badge: null },
  { icon: Trophy, label: "Leaderboard", badge: null },
  { icon: MessageSquare, label: "Messages", badge: 3 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#050915] border-r border-white/[0.04] flex flex-col justify-between h-screen sticky top-0 shrink-0">
      <div>
        {/* Brand Header Identity */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xs">✕</span>
          </div>
          <span className="text-base font-bold tracking-wide text-white">
            Learnova
          </span>
        </div>

        {/* Menu Controls List Stack */}
        <nav className="px-3 mt-6 space-y-1">
          {menuItems.map((item) => {
            const isDashboard = item.label === "Dashboard";
            return (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isDashboard
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <item.icon size={16} className={isDashboard ? "text-white" : "text-gray-400 group-hover:text-white"} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-purple-600/30 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/20">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Meta Profile Segments */}
      <div className="p-4 space-y-4 border-t border-white/[0.04]">
        <div className="space-y-0.5">
          <button className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/[0.02] transition">
            <Settings size={16} />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/[0.02] transition">
            <HelpCircle size={16} />
            <span>Help & Support</span>
          </button>
        </div>

        {/* Updated Profile Section (No Image, New Name) */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.04] group">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="leading-tight">
              <p className="text-xs font-bold text-white">Tanvi Zagade</p>
              <p className="text-[10px] text-gray-500 font-medium truncate max-w-[140px]">tanvi@example.com</p>
            </div>
          </div>
          <span className="text-gray-500 text-xs cursor-pointer group-hover:text-white">›</span>
        </div>

        <button className="w-full flex items-center gap-2.5 px-4 py-1 text-[10px] font-bold text-gray-500 hover:text-white transition">
          <ChevronLeft size={14} />
          <span>Collapse</span>
        </button>
      </div>
    </aside>
  );
}