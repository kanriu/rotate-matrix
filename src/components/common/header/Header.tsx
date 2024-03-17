import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  urlEs: string;
}

export const Header: FC<Props> = ({
  title,
  description,
  keywords,
  url,
  urlEs,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="keywords" content={keywords?.join(", ") || ""} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="en-us" />
      <link rel="alternate" href={urlEs} hrefLang="es" />
      /**Link -- alternate */
    </Head>
  );
};
