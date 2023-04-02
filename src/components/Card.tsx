import Link from "next/link";

export function Card() {
  return (
    <Link target="_blank" href={"https://github.com/daviramosds"}>
      <p className="text-blue-600 font-semibold text-lg w-72 h-12 rounded border-2 border-blue-600 flex items-center justify-center transition-opacity hover:opacity-75">TITLE</p>
    </Link>
  );
}
