import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans' 
});

export const metadata: Metadata = {
  title: "Playbox",
  description: "All in one tools within one platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
