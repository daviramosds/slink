import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-6">
      <Profile />
      <Card />
    </div>
  );
}
