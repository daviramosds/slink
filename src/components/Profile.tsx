import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  image: string;
  redirect_url: string;
  username: string
}

export function Profile({ image, redirect_url, username }: ProfileProps) {
  return (
    <div className="text-center">
        <div className="rounded-full border-2 border-blue-600 p-1 flex items-center justify-center w-36 h-36 ">
          <Image
            className="rounded-full "
            src={image}
            alt={"profile image"}
            width={250}
            height={250}
          />
      </div>

      <Link target="_blank" href={redirect_url}>
        <p className="text-blue-600 font-semibold text-xl mt-2 mb-4">{username}</p>
      </Link>
    </div>
  );
}
