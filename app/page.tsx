import Link from "next/link";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="list-disc ml-6 mt-4">
        <li>
          <Link href="/week-2">Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="/week-3">Week 3 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
