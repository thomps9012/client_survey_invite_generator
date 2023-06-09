import styles from "./page.module.css";
import { redirect } from "next/navigation";
import Image from "next/image";
export default function Home() {
  async function generatePDF(data: FormData) {
    "use server";
    const client_PID = data.get("PID");
    const survey_reason = data.get("survey_reason") as string;
    return redirect(`/invitation?PID=${client_PID}&reason=${survey_reason}`);
  }
  return (
    <main className="container mx-auto m-5 p-5 items-center h-screen">
      <Image
        src="/nora_logo.png"
        style={{
          margin: "auto",
        }}
        height={70}
        width={150}
        alt="NORA logo"
      />
      <h1 className="text-4xl my-10 tracking-tighter font-semibold text-center">
        Client Satisfaction <br />
        Survey Invitation Generator
      </h1>
      <form action={generatePDF} id="PID_form" className="my-10">
        <div className="relative z-0 w-full mb-6 group">
          <label className="text-gray-900 text-lg mb-2 tracking-tight">Reason</label>
          <select
            name="survey_reason"
            id="survey_reason"
            required
            defaultValue=""
            className="w-full text-lg text-gray-900 block px-0 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
          >
            <option value="" disabled hidden>
              Select Survey Reason...
            </option>
            <option value="a_change_in_level_of_care">
              Change in Level of Care
            </option>
            <option value="a_six_month_check_in">Six Month Check In</option>
            <option value="a_completion_of_the_treatment_program">
              Program Exit
            </option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            id="PID"
            name="PID"
            required
            autoFocus
            placeholder=" "
            min={0}
          />
          <label
            htmlFor="PID"
            className="peer-focus:font-medium absolute tracking-tight text-lg text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            PID
          </label>
        </div>
        <button
          id="begin_interview"
          type="submit"
          className="w-full text-xl my-10 cursor-pointer text-white text-center rounded-md bg-purple-900 hover:bg-purple-800 px-3 py-5 font-semibold shadow-sm ring-1 ring-inset ring-purple-300"
        >
          Generate Survey Invitation
        </button>
      </form>
    </main>
  );
}
