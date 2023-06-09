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
    <section>
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
      <h1 className="text-center text-4xl tracking-tighter font-semibold mb-10">
        Client Satisfaction Survey Invitation
      </h1>
      <p className="mb-5 text-lg">
        The completion of a client satisfaction survey helps the Northern Ohio
        Recovery Agency (NORA) improve the delivery and quality of services clients receive from the agency
      </p>
      <p className="mb-5 text-lg">
        Due to{" "}
        <span className="font-semibold tracking-tight italic">
          {formatted_reason}
        </span>
        , NORA is asking that you complete a client satisfaction survey
      </p>
      <p className="mb-5 text-lg">
        Your identifying information will never be shared with clinical staff,
        and is used for internal reporting and analytic purposes only.
      </p>
      <p className="text-center font-semibold text-3xl mt-10 italic">
        Your Patient Identification (PID) Number is
      </p>
      <p className="font-bold text-4xl mt-2 tracking-tight text-center mb-10">
        {PID}
      </p>
      <p className="text-xl text-center tracking-tight">
        The survey can be completed at{" "}
        <Link
          href="https://nora-client-satisfaction.vercel.app"
          className="font-semibold tracking-tight hover:text-purple-700 hover:underline hover:underline-offset-2 text-xl mx-2"
        >
          https://nora-client-satisfaction.vercel.app
        </Link>
      </p>
      <p className="text-xl tracking-tight text-center mt-2 mb-3">
        or by scanning the QR code below
      </p>
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
    <main className="container mx-auto items-center m-5 p-5">
      <button
        onClick={printPage}
        id="print-page-btn"
        className="w-full cursor-pointer text-white text-center rounded-md bg-purple-800 hover:bg-purple-700 px-3 py-2 font-semibold shadow-sm ring-1 ring-inset ring-purple-400"
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
