import Image from "next/image";
import Link from "next/link";

export function Profile() {
  return (
    <div className="text-center">
        <div className="rounded-full border-2 border-blue-600 p-1 flex items-center justify-center w-36 h-36 ">
          <Image
            className="rounded-full "
            src="https://github.com/daviramosds.png"
            alt={"profile image"}
            width={250}
            height={250}
          />
      </div>

      <Link target="_blank" href={"https://github.com/daviramosds"}>
        <p className="text-blue-600 text-lg mt-2 mb-4">@daviramosds</p>
      </Link>
    </div>
  );
}
