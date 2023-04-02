import Link from "next/link";

interface CardProps {
  title: string;
  src: string;
}

export function Card({ title, src }: CardProps) {
  return (
    <Link target="_blank" href={src}>
      <p className="text-blue-600 font-semibold text-lg w-72 h-12 rounded border-2 border-blue-600 flex items-center justify-center transition-opacity hover:opacity-75 uppercase">
        {title}
      </p>
    </Link>
  );
}
