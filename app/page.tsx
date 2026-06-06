import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";
import { Search, Bell } from "lucide-react";

export default function Home() {
  const courses = [
    {
      title: "Advanced React Patterns",
      progress: 75,
      lessons: 12,
      color: "bg-blue-500",
      icon: "⚛️",
    },
    {
      title: "JavaScript Mastery",
      progress: 40,
      lessons: 8,
      color: "bg-emerald-500",
      icon: "JS",
    },
    {
      title: "Next.js Deep Dive",
      progress: 60,
      lessons: 10,
      color: "bg-purple-600",
      icon: "▲",
    },
    {
      title: "UI/UX Design Fundamentals",
      progress: 85,
      lessons: 9,
      color: "bg-orange-500",
      icon: "🎨",
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-[#030712] text-white overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto w-full">
        {/* Upper Navigation Row */}
        <main>
      <h1>Student Dashboard Running 🚀</h1>
    </main>
        <header className="flex justify-end items-center gap-6 mb-8">
          <button className="text-gray-400 hover:text-white transition">
            <Search size={18} />
          </button>
          <button className="text-gray-400 hover:text-white transition relative">
            <Bell size={18} />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-purple-500 rounded-full" />
          </button>
          {/* Header Controls (Profile photo removed) */}
          <div className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition">
            <span className="text-xs font-semibold">Tanvi Zagade</span>
            <span className="text-[9px] text-gray-500">▼</span>
          </div>
        </header>

        <HeroTile />

        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold tracking-wide">Your Courses</h2>
            <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition">
              View all <span className="text-sm">›</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                progress={course.progress}
                lessons={course.lessons}
                color={course.color}
                icon={course.icon}
              />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <ActivityTile />
          <ActivityTile chart />
        </div>
      </main>
    </div>
  );
}

  
