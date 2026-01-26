import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kenny Advisor - Practice Guitar. Just Play.",
  description:
    "Select your time, pick your mood, and start playing. Kenny Advisor generates personalized guitar practice sessions so you can focus on what matters: playing. For Mac and iOS.",
  keywords: [
    "guitar practice",
    "practice app",
    "guitar learning",
    "music practice",
    "guitar exercises",
  ],
  openGraph: {
    title: "Kenny Advisor - Practice Guitar. Just Play.",
    description:
      "Select your time, pick your mood, and start playing. Kenny Advisor generates personalized guitar practice sessions so you can focus on what matters: playing.",
    url: "https://kennyapps.com",
    siteName: "Kenny Apps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const stored = localStorage.getItem('theme');
                  if (stored) return stored;
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                const theme = getTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
