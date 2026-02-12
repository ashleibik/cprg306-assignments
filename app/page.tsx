import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">CPNT 217</h1>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link className="text-blue-600 underline" href="/week-2">
            Week 2
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/week-3">
            Week 3
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/week-4">
            Week 4
          </Link>
        </li>

        {/* ✅ Add this */}
        <li>
          <Link className="text-blue-600 underline" href="/week-5">
            Week 5
          </Link>
        </li>
      </ul>
    </main>
  );
}
