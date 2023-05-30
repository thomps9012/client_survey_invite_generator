import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Client Survey Invitation",
  description:
    "An online tool to generate client satisfaction survey invitations",
};
const DefaultHeader = () => (
  <Head>
    <link rel="icon" href="/nora_favicon.png" />
    <meta name="application-name" content="Client Survey Invitation" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta
      name="apple-mobile-web-app-title"
      content="Client Survey Invitation"
    />
    <meta
      name="description"
      content="An online tool to generate client satisfaction survey invitations"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/icons/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#5D4E60" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#5D4E60" />

    <link rel="apple-touch-icon" href="/client_survey_qr_code.png" />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/client_survey_qr_code.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/client_survey_qr_code-retina.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="167x167"
      href="/client_survey_qr_code.png"
    />

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/client_survey_qr_code.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/client_survey_qr_code.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/client_survey_qr_code.png" color="#5D4E60" />
    <link rel="shortcut icon" href="/client_survey_qr_code.png" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Client Survey Invitation" />
    <meta
      property="og:description"
      content="An online tool to generate client satisfaction survey invitations"
    />
    <meta property="og:site_name" content="Client Survey Invitation" />
    <meta
      property="og:url"
      content="https://client-survey-invite-generator.vercel.app"
    />
    <meta
      property="og:image"
      content="https://client-survey-invite-generator.vercel.app/client_survey_qr_code.png"
    />
  </Head>
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DefaultHeader />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
