import { Card } from "@/components/Card";
import { Profile } from "@/components/Profile";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Home() {

  const [items, setItems] = useState([{}])

  const fetchApiData = async () => {
    const { data } = await client.query({
      query: gql`
        query Assets {
          links {
            id
            slug
            title
            url
          }
        }
      `,
    });

    setItems(data.links)
  };

  useEffect(() => {
    fetchApiData()
  }, [])

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-6 dark:bg-slate-900">
      <Profile
        image="https://github.com/daviramosds.png"
        redirect_url="https://github.com/daviramosds"
        username="@daviramosds"
      />
      <Card src="https://github.com/daviramosds" title="github" />

      <ThemeSwitcher />
      <button onClick={fetchApiData}>Test</button>
    </div>
  );
}
