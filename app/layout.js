import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://myflowersantalya.example"),
  title: "MyFlowers Antalya | Flower Delivery & Gift Shop",
  description:
    "MyFlowers Antalya ile aynı gün çiçek teslimatı, premium buket tasarımları ve hediye setleri.",
  keywords: [
    "MyFlowers Antalya",
    "Antalya çiçekçi",
    "flower delivery antalya",
    "gift shop antalya",
    "aynı gün çiçek teslimatı",
  ],
  openGraph: {
    title: "MyFlowers Antalya",
    description: "Antalya'da modern çiçek tasarımları ve premium hediye deneyimi.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyFlowers Antalya",
    description: "Antalya'da çiçek teslimatı ve premium hediye setleri.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
