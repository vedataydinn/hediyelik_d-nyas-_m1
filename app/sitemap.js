export default function sitemap() {
  const base = "https://hediyelikdunyasi-van.example";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
