import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Ahmed Shleibik</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/ashleibik/cprg306-assignments">
          https://github.com/ashleibik/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}
