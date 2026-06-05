"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("courses").select("*");

      if (error) {
        console.log("Supabase Error:", error.message);
      }

      setCourses(data || []);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>My Courses</h1>

      {courses.length === 0 ? (
        <p>No data found in Supabase table.</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.title || "No Title"} — {course.progress || 0}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}