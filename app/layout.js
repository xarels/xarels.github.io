import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata = {
  charset:"utf-8" ,
  language: "en",
  url: "https://www.yourwebsite.com", /* Change this */
  type: "portfolio",
  site_name: "[Your Name] - Graphic Designer Portfolio", /* Change this */
  title: "[Your Name] - Graphic Designer Portfolio",  /* Change this */
  description: "Professional portfolio of [Your Name] - Graphic Designer specializing in branding, portraits, and poster design",
  keywords: "graphic design, portfolio, branding, portraits, posters",
  author: "[P.S.]",  /* Change this */
  canonical: "https://www.yourwebsite.com",  /* Change this */
  publication_date: "2022-01-01",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
