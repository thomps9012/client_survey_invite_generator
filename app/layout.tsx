import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Survey Invitation",
  description:
    "An online tool to generate client satisfaction survey invitations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nora_favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
