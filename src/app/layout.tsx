import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kenny Apps",
  description:
    "Apps by Kenny. Thoughtfully designed software for Mac and iOS.",
  keywords: [
    "guitar practice",
    "practice app",
    "guitar learning",
    "music practice",
    "guitar exercises",
    "mac apps",
    "ios apps",
  ],
  metadataBase: new URL("https://kennyapps.com"),
  openGraph: {
    title: "Kenny Apps",
    description:
      "Apps by Kenny. Thoughtfully designed software for Mac and iOS.",
    url: "https://kennyapps.com",
    siteName: "Kenny Apps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny Apps",
    description:
      "Apps by Kenny. Thoughtfully designed software for Mac and iOS.",
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
