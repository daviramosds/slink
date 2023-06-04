import { getLinks } from "@/lib/hygraph";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { LinkInteface } from "@/interfaces/LinkInteface";

export default function Redirect() {
  const router = useRouter();

  const [isLoading, setLoading] = useState(true);

  const fetchApiData = async () => {
    const links = await getLinks();

    const { slug } = await router.query;

    console.log(slug)
    links.map((link: LinkInteface) => {
      if (link.slug == slug) {
        console.log('match')
        router.push(link.url)
      }
    })
    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, [router.isReady]);

  if (isLoading) return <Loading />;

  return (
    <>
      <h1>loaded</h1>
    </>
  );
}
