import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Survey Invitation",
  description:
    "An online tool to generate client satisfaction survey invitations",
  icons: {
    icon: "/pwa_icon.png",
    shortcut: "/pwa_icon.png",
    apple: "/pwa_icon.png",
  },
  applicationName: "Client Survey Invitation",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://client-survey-invite-generator.vercel.app",
    title: "Client Survey Invitation",
    description:
      "An online tool to generate client satisfaction survey invitations",
    image: "https://client-survey-invite-generator.vercel.app/pwa_icon.png",
    siteName: "Client Survey Invitation",
  },
  keywords: [
    "Client",
    "Satisfaction",
    "Survey",
    "Invite",
    "Generator",
    "Northern Ohio Recovery Association",
  ],
  authors: [{ name: "Samuel Thompson", url: "tszlau.com" }],
  colorScheme: "light",
  creator: "Samuel Thompson",
  publisher: "Samuel Thompson",
  metadataBase: new URL("https://client-survey-invite-generator.vercel.app"),
  themeColor: "#5D4E60",
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Client Survey Invitation",
    description:
      "An online tool to generate client satisfaction survey invitations",
    siteID: "1640747945896169472",
    creator: "@tszlau_0",
    creatorId: "1640747945896169472",
    images: ["https://client-survey-invite-generator.vercel.app/pwa_icon.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: "Client Survey Invitation",
    statusBarStyle: "purple-translucent",
    startupImage: ["/pwa_icon.png"],
  },
  appLinks: {
    web: {
      url: "https://client-survey-invite-generator.vercel.app",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
