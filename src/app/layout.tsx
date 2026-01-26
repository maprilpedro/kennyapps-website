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
    "Select your time, pick your mood, and start playing. Kenny Advisor generates personalized guitar practice sessions for Mac and iOS.",
  keywords: [
    "guitar practice",
    "practice app",
    "guitar learning",
    "music practice",
    "guitar exercises",
  ],
  metadataBase: new URL("https://kennyapps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kenny Advisor - Practice Guitar. Just Play.",
    description:
      "Select your time, pick your mood, and start playing. Kenny Advisor generates personalized guitar practice sessions for Mac and iOS.",
    url: "https://kennyapps.com",
    siteName: "Kenny Apps",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenny Advisor - Guitar Practice App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny Advisor - Practice Guitar. Just Play.",
    description:
      "Select your time, pick your mood, and start playing. Kenny Advisor generates personalized guitar practice sessions for Mac and iOS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
