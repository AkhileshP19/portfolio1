import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akhilesh Patil | Full Stack Developer",
  description:
    "Portfolio of Akhilesh Patil — Full Stack Developer skilled in Next.js, React, Tailwind CSS, MongoDB, Express.js, and building scalable, high-performance web applications.",
  keywords: [
    "Akhilesh Patil",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio"
  ],
  authors: [{ name: "Akhilesh Patil" }],
  creator: "Akhilesh Patil",
  publisher: "Akhilesh Patil",
  metadataBase: new URL("https://akhilesh-patil.vercel.app"),
  openGraph: {
    title: "Akhilesh Patil | Full Stack Developer",
    description:
      "Showcasing projects, experience, and skills in modern web development — MERN stack, Next.js, Tailwind CSS, MongoDB, and more.",
    url: "https://akhilesh-patil.vercel.app",
    siteName: "Akhilesh Patil | Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
