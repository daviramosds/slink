import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LinkInteface } from "@/interfaces/LinkInteface";
import { getLinks } from "@/lib/hygraph";
import { useEffect, useState } from "react";
import Loading from "@/pages/loading";

export default function Home() {
  const [items, setItems] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  const fetchApiData = async () => {
    const links = await getLinks();

    setItems(links);

    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-6 dark:bg-slate-900">
      <Profile
        image="https://github.com/daviramosds.png"
        redirect_url="https://github.com/daviramosds"
        username="@daviramosds"
      />

      {items.map((link: LinkInteface | any) => (
        <Card key={link.id} title={link.title} src={link.url} />
      ))}

      <ThemeSwitcher />
    </div>
  );
}
