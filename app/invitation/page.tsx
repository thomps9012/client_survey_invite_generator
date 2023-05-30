"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const InvitationDocument = ({
  PID,
  reason,
}: {
  PID: number;
  reason: string;
}) => {
  const formatted_reason = reason.split("_").join(" ");
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 50,
      }}
    >
      <Image
        src="/nora_logo.png"
        style={{
          margin: "auto",
        }}
        height={70}
        width={150}
        alt="NORA logo"
      />
      <br />
      <h1 style={{ textAlign: "center" }}>Client Satisfaction Survey</h1>
      <br />
      <p>
        The client satisfaction survey helps the Northern Ohio Recovery Agency
        (NORA) improve the delivery and quality of services provided at the
        agency
      </p>
      <br />
      <p>
        Due to {formatted_reason}, NORA is asking that you complete a client
        satisfaction survey
      </p>
      <br />
      <p>
        Your identifying information will never be shared with clinical staff,
        and is used for internal reporting purposes only.
      </p>
      <br />
      <b style={{ textAlign: "center" }}>
        Your Patient Identification (PID) Number is {PID}
      </b>
      <br />
      <p style={{ textAlign: "center" }}>
        The survey can be completed @ <br />
        <br />
        <Link href="https://client-survey-wpdqpodwuq-uc.a.run.app">
          https://client-survey-wpdqpodwuq-uc.a.run.app
        </Link>
      </p>
      <br />
      <p style={{ textAlign: "center" }}>or by Scanning the QR code below</p>
      <br />
      <Image
        style={{
          margin: "auto",
        }}
        src="/client_survey_qr_code.png"
        height={215}
        width={180}
        alt="QR Code"
      />
    </section>
  );
};
export default function PDFInvitation({
  searchParams,
}: {
  searchParams: { PID: string; reason: string };
}) {
  useEffect(() => {
    window.print();
  }, []);
  const printPage = () => {
    window.print();
  };
  return (
    <main>
      <button
        onClick={printPage}
        type="submit"
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          padding: 5,
          color: "#fff",
          background: "#5D4E60",
          borderRadius: 5,
          border: 0,
        }}
      >
        Print Invitation
      </button>
      <InvitationDocument
        PID={parseInt(searchParams.PID)}
        reason={searchParams.reason}
      />
    </main>
  );
}
