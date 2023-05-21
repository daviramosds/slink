import { getLinks } from "@/lib/hygraph";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  // const fetchApiData = async () => {
  //   const links = await getLinks();
  //   console.log(links)
  // };

  // useEffect(() => {
  //   // fetchApiData();
  //   console.log('test')
  // }, []);

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
