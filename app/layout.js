import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://hediyelikdunyasi-van.example"),
  title: "HEDİYELİK DÜNYASI | Van Hediyelik Eşya",
  description:
    "Van'da hediyelik eşya, el yapımı ürünler, Van kedisi figürleri ve otantik armağanlar için HEDİYELİK DÜNYASI.",
  keywords: [
    "Van hediyelik eşya",
    "Hediyelik Dünyası",
    "Van souvenir shop",
    "Van kedisi figürü",
    "Van otlu peyniri",
  ],
  openGraph: {
    title: "HEDİYELİK DÜNYASI",
    description: "Van'ın kalbinde premium hediyelik eşya deneyimi.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEDİYELİK DÜNYASI",
    description: "Van'da özel hediyelik eşya koleksiyonu.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
