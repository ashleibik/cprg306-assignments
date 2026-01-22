import Link from "next/link";
import StudentInfo from "./student.info";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <h2>Week 2 Assignment</h2>

      <StudentInfo />

      <Link href="/">Back to Home</Link>
    </main>
  );
}
