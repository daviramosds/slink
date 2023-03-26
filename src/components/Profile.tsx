import Image from "next/image";

interface ProfileProps {
  src: string;
}

export function Profile({ src }: ProfileProps) {
  return (
    <div className="w-36 h-36 rounded-full border-2 border-blue-600 p-1">
      <div className="w-full h-full relative">
        <Image
          className="rounded-full"
          src="https://github.com/daviramosds.png"
          fill
          alt={"profile image"}
        />
      </div>
    </div>
  );
}
