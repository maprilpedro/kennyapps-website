import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenny Practice - Practice Guitar. Just Play.",
  description:
    "Select your time, pick your mood, and start playing. Kenny Practice generates personalized guitar practice sessions for Mac and iOS.",
  alternates: {
    canonical: "/practice",
  },
  openGraph: {
    title: "Kenny Practice - Practice Guitar. Just Play.",
    description:
      "Select your time, pick your mood, and start playing. Kenny Practice generates personalized guitar practice sessions for Mac and iOS.",
    url: "https://kennyapps.com/practice",
    siteName: "Kenny Apps",
    type: "website",
    images: [
      {
        url: "/practice/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kenny Practice - Guitar Practice App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny Practice - Practice Guitar. Just Play.",
    description:
      "Select your time, pick your mood, and start playing. Kenny Practice generates personalized guitar practice sessions for Mac and iOS.",
    images: ["/practice/og-image.png"],
  },
};

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
