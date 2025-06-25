import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 items-center justify-center mt-20">
      <Link href={"/landing"}>
        <button className="border border-amber-50 rounded-2xl px-4 py-2">
          Option 1
        </button>
      </Link>
      <Link href={"/option"}>
        <button className="border border-amber-50 rounded-2xl px-4 py-2">
          Option 2
        </button>
      </Link>
    </div>
  );
}
