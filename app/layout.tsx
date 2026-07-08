import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation";
import { Chatbot } from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Md. Azad - Software Developer",
  description: "I'm Md. Azad, a passionate software developer with expertise in building web applications. Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
         <Chatbot />
      </body>
    </html>
  );
}
