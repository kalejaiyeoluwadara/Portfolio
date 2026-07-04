import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oluwadara Kalejaiye — Full-Stack Engineer & Designer",
  description:
    "Full-stack engineer and designer building fintech, food delivery, and community platforms across Nigeria. Selected work: Pocketly, Tetra Pay, IluEats.",
  openGraph: {
    title: "Oluwadara Kalejaiye — Full-Stack Engineer & Designer",
    description:
      "Full-stack engineer and designer building products people actually use.",
    type: "website",
  },
};

// Runs before paint: applies the saved theme (dark by default) to avoid a flash
const themeInit = `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t!=="light"){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col grain">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <PortfolioProvider>{children}</PortfolioProvider>
        <Analytics />
      </body>
    </html>
  );
}
