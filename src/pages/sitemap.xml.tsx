import { GetServerSideProps } from "next";

const SitemapPage = () => {
  return null;
};

export default SitemapPage;

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  ctx.res.setHeader("Content-Type", "text/xml");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
  <loc>https://rotate-matrix.vercel.app</loc>
  <lastmod>2024-03-17</lastmod>
  </url>
  </urlset>
  `;
  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};
