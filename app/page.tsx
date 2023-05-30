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
    <main className={styles.main}>
      <Image
        src="/nora_logo.png"
        style={{
          margin: "auto",
        }}
        height={70}
        width={150}
        alt="NORA logo"
      />
      <h1 style={{ textAlign: "center", marginTop: 35 }}>
        Client Satisfaction <br />
        Survey Invitation Generator
      </h1>
      <form action={generatePDF} id="PID_form" className={styles.card}>
        <label>Reason</label>
        <select
          name="survey_reason"
          id="survey_reason"
          required
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select Survey Reason
          </option>
          <option value="a_change_in_level_of_care">
            Change in Level of Care
          </option>
          <option value="a_six_month_check_in">Six Month Check In</option>
          <option value="a_completion_of_the_treatment_program">
            Program Exit
          </option>
        </select>
        <label>PID</label>
        <input placeholder="Client PID" name="PID" id="client_PID" type="text" required />
        <button
          type="submit"
          style={{
            marginTop: 10,
            padding: 5,
            color: "#fff",
            background: "#5D4E60",
            border: 0,
            fontSize: 25,
            borderRadius: 5,
          }}
        >
          Generate Survey Invitation
        </button>
      </form>
    </main>
  );
}
