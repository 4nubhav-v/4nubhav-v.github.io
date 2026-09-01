import rss, { pagesGlobToRssItems } from "@astrojs/rss";
export async function GET(context) {
  return rss({
    title: "Anubhav's Blogs",
    description: "Just ramblings about my life",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
