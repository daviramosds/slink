import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-6   dark: bg-slate-900">
      <Profile image="https://github.com/daviramosds.png" redirect_url="https://github.com/daviramosds" username="@daviramosds" />
      <Card src="https://github.com/daviramosds" title="github" />
    </div>
  );
}
