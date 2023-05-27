import { getLinks } from "@/lib/hygraph";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function Redirect() {
  const router = useRouter();

  const [items, setItems] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  const fetchApiData = async () => {
    const links = await getLinks();

    setItems(links);
    const { slug } = await router.query;
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <h1>loaded</h1>
    </>
  );
}
