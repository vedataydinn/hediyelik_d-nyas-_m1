const heroPhoto = "/images/flower-hero.jpg";

const flowerProducts = [
  { title: "Romantik Gül Kutusu", image: "/images/flower-1.jpg", price: "₺1.290", tag: "Aşk" },
  { title: "Lily & Orkide Mix", image: "/images/flower-2.jpg", price: "₺1.450", tag: "Premium" },
  { title: "Parlak Şakayık Buketi", image: "/images/flower-3.jpg", price: "₺1.590", tag: "Yeni" },
  { title: "Kişiye Özel Hediye Seti", image: "/images/flower-4.jpg", price: "₺1.690", tag: "Set" },
  { title: "Soft Pastel Buket", image: "/images/flower-5.jpg", price: "₺980", tag: "Soft" },
  { title: "Kutlama Çiçek Aranjmanı", image: "/images/flower-6.jpg", price: "₺2.250", tag: "Lüks" },
  { title: "Doğum Günü Renk Festivali", image: "/images/flower-7.jpg", price: "₺1.190", tag: "Parti" },
  { title: "Beyaz Zarafet Buketi", image: "/images/flower-8.jpg", price: "₺1.390", tag: "Klasik" },
];

const serviceHighlights = [
  "Aynı gün Antalya içi teslimat",
  "Modern ve renkli premium tasarımlar",
  "Kutulu çiçek + hediye kombinleri",
  "WhatsApp üzerinden hızlı sipariş",
];

const occasions = [
  "Doğum Günü",
  "Yıldönümü",
  "Yeni İş Tebriği",
  "İsteme & Nişan",
  "Yeni Doğan",
  "Geçmiş Olsun",
];

const testimonials = [
  "Çiçekler görseldekinden daha güzeldi, teslimat çok hızlıydı.",
  "Renk kombinleri efsane, tam Instagram tarzı premium görünüm.",
  "Hediye kutusu ve not kartı çok özenli hazırlanmıştı.",
];

const faqs = [
  {
    q: "Aynı gün teslimat yapıyor musunuz?",
    a: "Evet, Antalya içi uygun saatlerde aynı gün teslimat hizmeti sunuyoruz.",
  },
  {
    q: "Ürünler görseldeki ile aynı mı geliyor?",
    a: "Mevsime göre küçük farklılıklar olabilir; stil, ton ve premium görünüm korunur.",
  },
  {
    q: "Kişiye özel not ve kurdele ekleniyor mu?",
    a: "Evet, sipariş sırasında mesajınızı ilettiğinizde ücretsiz not kartı eklenir.",
  },
];

export default function HomePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="mf-page">
        <header className="mf-hero" style={{ "--mf-hero": `url('${heroPhoto}')` }}>
          <nav className="mf-nav">
            <div className="mf-brand">
              <span>MyFlowers Antalya</span>
              <small>Flower Delivery & Gift Shop</small>
            </div>
            <a className="mf-nav-cta" href="#urunler">
              Koleksiyonu Gör
            </a>
          </nav>
          <div className="mf-glow mf-glow-left" />
          <div className="mf-glow mf-glow-right" />
          <div className="mf-hero-content">
            <p className="mf-kicker">Muratpaşa, Antalya</p>
            <h1>MyFlowers Antalya | Flower Delivery & Gift Shop</h1>
            <p>
              Canlı renkler, modern floral tasarımlar ve premium hediye sunumuyla Antalya’da
              özel günleri unutulmaz hale getiriyoruz.
            </p>
            <div className="mf-hero-actions">
              <a href="https://wa.me/905000000000" target="_blank" rel="noreferrer">
                WhatsApp ile Sipariş
              </a>
              <a href="#instagram">Instagram İlhamı</a>
            </div>
            <div className="mf-hero-badges">
              {["Canlı Renk", "Premium Paket", "Aynı Gün Teslimat"].map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </header>

        <main className="mf-main">
          <section id="hizmetler" className="mf-section">
            <h2>Neden MyFlowers Antalya?</h2>
            <div className="mf-highlight-grid">
              {serviceHighlights.map((item) => (
                <article key={item} className="mf-highlight-card">
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section id="urunler" className="mf-section">
            <div className="mf-section-head">
              <h2>Çiçek & Hediye Koleksiyonu</h2>
              <p>Renkli, modern ve premium görünümlü ürünler.</p>
            </div>
            <div className="mf-product-grid">
              {flowerProducts.map((product) => (
                <article key={product.title} className="mf-product-card">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <div className="mf-product-meta">
                    <b>{product.tag}</b>
                    <h3>{product.title}</h3>
                    <span>{product.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mf-section">
            <div className="mf-section-head">
              <h2>Özel Gün Konseptleri</h2>
              <p>Her ana uygun renkli ve estetik tasarımlar.</p>
            </div>
            <div className="mf-chip-grid">
              {occasions.map((item) => (
                <span key={item} className="mf-chip">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="instagram" className="mf-section">
            <div className="mf-section-head">
              <h2>Instagram Ruhuna Uygun Tasarımlar</h2>
              <p>
                İlham aldığımız renkli floral vitrin dili için{" "}
                <a href="https://www.instagram.com/myflowersantalya/" target="_blank" rel="noreferrer">
                  @myflowersantalya
                </a>
                .
              </p>
            </div>
            <div className="mf-story-grid">
              {[1, 2, 3, 4].map((item) => (
                <article key={item} className="mf-story-card">
                  <img
                    src={item % 2 === 0 ? "/images/flower-2.jpg" : "/images/flower-6.jpg"}
                    alt={`MyFlowers hikaye ${item}`}
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="mf-section">
            <div className="mf-section-head">
              <h2>Müşteri Yorumları</h2>
            </div>
            <div className="mf-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item} className="mf-testimonial-card">
                  <p>"{item}"</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mf-section">
            <div className="mf-section-head">
              <h2>Sık Sorulan Sorular</h2>
            </div>
            <div className="mf-faq-grid">
              {faqs.map((item) => (
                <article key={item.q} className="mf-faq-card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mf-section mf-contact">
            <h2>Hızlı İletişim</h2>
            <p>
              Sipariş, konsept hazırlık ve teslimat bilgisi için bize hemen ulaşın.
            </p>
            <a href="https://wa.me/905000000000" target="_blank" rel="noreferrer">
              WhatsApp Destek
            </a>
          </section>
        </main>
      </div>
    </>
  );
}
