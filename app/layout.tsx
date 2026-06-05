import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learnova Dashboard",
  description: "Premium E-Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full m-0 p-0">
      <body className="h-full w-full bg-[#030712] text-white antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}