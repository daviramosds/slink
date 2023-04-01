import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  src: string;
}

export function Profile({ src }: ProfileProps) {
  return (
    <div className="w-36 h-36 rounded-full border-2 border-blue-600 p-1 text-center">
      <div className="w-full h-full relative">
        <Image
          className="rounded-full"
          src="https://github.com/daviramosds.png"
          fill
          alt={"profile image"}
        />
      </div>

      <Link target="_blank" href={"https://github.com/daviramosds"}>
        <p className="text-blue-600 text-lg my-3">@username</p>
      </Link>
    </div>
  );
}
