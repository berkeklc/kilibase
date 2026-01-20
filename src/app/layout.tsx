import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kili Basecamp Experience 2026 | Run for Life. Camp with Purpose. Give Blood.",
  description: "A national movement bringing together youth, professionals, institutions and communities at the foot of Mount Kilimanjaro to save lives, inspire responsibility, and build a culture of impact.",
  keywords: ["Kili Basecamp", "Kilimanjaro", "Tanzania", "Blood Donation", "Youth Leadership", "Marathon", "CSR", "Volunteer"],
  openGraph: {
    title: "Kili Basecamp Experience 2026",
    description: "Run for Life. Camp with Purpose. Give Blood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
