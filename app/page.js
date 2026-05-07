"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import HeroHorseScene from "./components/HeroHorseScene";

const heroPhoto = "/images/urun-at-heykel.png";

const categories = [
  {
    title: "Dekoratif At Heykeli",
    text: "Masa ve vitrinlere karakter katan şık dekoratif obje seçenekleri.",
    icon: "fa-horse",
    image: "/images/urun-at-heykel.png",
    price: "₺1.490",
    badge: "Özel Seri",
  },
  {
    title: "Konsept Parti Süsleri",
    text: "Doğum günü ve özel günler için temalı süsleme ürünleri.",
    icon: "fa-cake-candles",
    image: "/images/urun-baby-konsept.png",
    price: "₺790",
    badge: "En Çok Satan",
  },
  {
    title: "Hediyelik İçecek Şişeleri",
    text: "Özel tasarımlı şişe seçenekleriyle dikkat çeken hediye alternatifleri.",
    icon: "fa-wine-bottle",
    image: "/images/urun-icecek.png",
    price: "₺650",
    badge: "Yeni",
  },
  {
    title: "Savaşçı Figürleri",
    text: "Koleksiyon severler için detaylı işçiliğe sahip figür modelleri.",
    icon: "fa-chess-knight",
    image: "/images/urun-savasci-figuru.png",
    price: "₺1.150",
    badge: "Koleksiyon",
  },
  {
    title: "Ahşap El İşçiliği",
    text: "Doğal dokulu, oyma detaylara sahip zarif ahşap ürünler.",
    icon: "fa-hammer",
    image: "/images/urun-at-heykel.png",
    price: "₺920",
    badge: "Usta İşçilik",
  },
  {
    title: "Kupa & Hediye Setleri",
    text: "Kişiye özel veya tematik kupa ürünleriyle etkileyici hediye seçenekleri.",
    icon: "fa-mug-hot",
    image: "/images/urun-baby-konsept.png",
    price: "₺540",
    badge: "Hediye Paketi",
  },
  {
    title: "Premium Masa Objesi",
    text: "Ofis ve çalışma alanları için zarif, dikkat çekici dekor parçaları.",
    icon: "fa-chess-queen",
    image: "/images/urun-savasci-figuru.png",
    price: "₺1.270",
    badge: "VIP",
  },
  {
    title: "Özel Gün Konsepti",
    text: "Nişan, söz, doğum günü ve kutlamalar için bütünleşik konsept setler.",
    icon: "fa-wand-magic-sparkles",
    image: "/images/urun-baby-konsept.png",
    price: "₺1.050",
    badge: "Trend",
  },
  {
    title: "Cam Şişe Koleksiyonu",
    text: "Gösterişli sunum için estetik cam işçiliğiyle hazırlanmış seçenekler.",
    icon: "fa-champagne-glasses",
    image: "/images/urun-icecek.png",
    price: "₺580",
    badge: "Limited",
  },
  {
    title: "Anı Figürü",
    text: "Yaşadığınız özel anları tamamlayan dekoratif figür serileri.",
    icon: "fa-monument",
    image: "/images/urun-savasci-figuru.png",
    price: "₺880",
    badge: "Editör Seçimi",
  },
  {
    title: "Ahşap Prestij Serisi",
    text: "Detaylı oyma ve premium cilasıyla öne çıkan prestij ürünleri.",
    icon: "fa-gem",
    image: "/images/urun-at-heykel.png",
    price: "₺1.690",
    badge: "Prestij",
  },
  {
    title: "Kurumsal Hediye Seti",
    text: "Markalar için şık sunumlu, özel hazırlanabilir hediye alternatifleri.",
    icon: "fa-briefcase",
    image: "/images/urun-icecek.png",
    price: "₺1.320",
    badge: "Kurumsal",
  },
];

const whyUs = [
  { title: "Otantik Seçki", icon: "fa-crown", text: "Van'a özel ürünler" },
  { title: "Kalite Garantisi", icon: "fa-shield-heart", text: "Titiz üretim standardı" },
  { title: "Hızlı İletişim", icon: "fa-comments", text: "Anında destek ve yönlendirme" },
  { title: "Özenli Paketleme", icon: "fa-gift", text: "Hediye deneyimini tamamlar" },
];

const testimonials = [
  { name: "Ayşe K.", text: "Van'da gördüğüm en klas hediyelik koleksiyonu, sunum gerçekten mükemmel." },
  { name: "Mert Y.", text: "Ürün kalitesi ve paketleme premium seviyede, özel gün hediyelerinde tek adresim." },
  { name: "Zehra T.", text: "Mağaza konsepti ve ürün çeşitliliği çok etkileyici, kesinlikle tavsiye ederim." },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    const revealItems = document.querySelectorAll(".reveal-3d");
    const cardTilt = document.querySelectorAll(".tilt-card");
    const counters = document.querySelectorAll("[data-counter]");
    const smoothLinks = document.querySelectorAll("a[href^='#']");
    const loader = document.querySelector(".loading-screen");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );
    revealItems.forEach((el) => io.observe(el));

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const max = Number(node.dataset.counter || 0);
          let start = 0;
          const step = () => {
            start += Math.ceil(max / 55);
            if (start >= max) {
              node.textContent = `${max}+`;
              return;
            }
            node.textContent = `${start}+`;
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(node);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => counterObserver.observe(c));

    const parallaxMouse = (e) => {
      if (!hero || isMobile) return;
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", String(x));
      hero.style.setProperty("--my", String(y));
    };

    const parallaxScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scrollY", `${y}px`);
      setScrollProgress(Math.min(y / Math.max(window.innerHeight, 1), 2));
    };

    const cardMove = (event, card) => {
      if (isMobile) return;
      const inner = card.querySelector(".flip-inner");
      if (!inner) return;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const rotY = ((x - centerX) / centerX) * 8;
      const rotX = -((y - centerY) / centerY) * 8;
      inner.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      inner.style.boxShadow = `${-rotY * 1.4}px ${14 + rotX * 1.1}px 34px rgba(0,0,0,.24)`;
    };

    const resetCard = (card) => {
      const inner = card.querySelector(".flip-inner");
      if (!inner) return;
      inner.style.transform = "";
      inner.style.boxShadow = "";
    };

    if (hero) hero.addEventListener("mousemove", parallaxMouse);
    window.addEventListener("scroll", parallaxScroll, { passive: true });
    parallaxScroll();

    cardTilt.forEach((card) => {
      card.addEventListener("mousemove", (e) => cardMove(e, card));
      card.addEventListener("mouseleave", () => resetCard(card));
    });

    const cursorMove = (e) => {
      if (!cursor || isMobile) return;
      cursor.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
    };
    document.addEventListener("mousemove", cursorMove);

    smoothLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const hideLoader = setTimeout(() => {
      if (loader) loader.classList.add("loaded");
    }, 2000);

    return () => {
      clearTimeout(hideLoader);
      io.disconnect();
      counterObserver.disconnect();
      if (hero) hero.removeEventListener("mousemove", parallaxMouse);
      window.removeEventListener("scroll", parallaxScroll);
      document.removeEventListener("mousemove", cursorMove);
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <div className="loading-screen">
        <div className="loader-text">HEDİYELİK DÜNYASI</div>
      </div>

      <div className="cursor-trail" ref={cursorRef} />

      <nav className="navbar">
        <a href="#hero" className="logo">
          HEDİYELİK DÜNYASI
        </a>
        <div className="nav-links">
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#urunler">Ürünlerimiz</a>
          <a href="#neden-biz">Neden Biz?</a>
          <a href="#iletisim">İletişim</a>
        </div>
      </nav>

      <header
        id="hero"
        className="hero"
        ref={heroRef}
        style={{ "--hero-image": `url('${heroPhoto}')` }}
      >
        <HeroHorseScene scrollProgress={scrollProgress} />
        <div className="hero-layer sky" />
        <div className="hero-layer mountains" />
        <div className="hero-layer lake" />
        <div className="hero-layer foreground" />
        <div className="texture" />
        <div className="particles" />
        <div className="hero-emblem">
          <i className="fa-solid fa-star-and-crescent" />
        </div>
        <div className="hero-content reveal-3d">
          <p className="hero-sub">Van, Türkiye</p>
          <h1>HEDİYELİK DÜNYASI</h1>
          <p>
            Van Gölü’nün büyüsünden ilham alan, şehrin ruhunu yansıtan premium hediyelik
            koleksiyonları.
          </p>
          <a className="cta" href="https://wa.me/905000000000" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp" /> WhatsApp ile Ulaş
          </a>
        </div>
      </header>

      <main>
        <section id="hakkimizda" className="about section reveal-3d">
          <div className="stats">
            <article>
              <h3 data-counter="10">0+</h3>
              <p>Yıl Tecrübe</p>
            </article>
            <article>
              <h3 data-counter="1000">0+</h3>
              <p>Özgün Ürün</p>
            </article>
            <article>
              <h3 data-counter="500">0+</h3>
              <p>Mutlu Müşteri</p>
            </article>
          </div>
          <div className="about-text">
            <h2>Hakkımızda</h2>
            <p>
              HEDİYELİK DÜNYASI, Van’ın kültürel dokusunu modern estetikle buluşturan seçkin bir
              hediyelik eşya mağazasıdır. Yerel değerleri, el işçiliğini ve premium sunumu bir
              araya getiriyoruz.
            </p>
            <p>
              Her ürün; anı, zarafet ve kaliteyi aynı pakette sunmak için özenle seçilir. Van’da
              unutulmaz bir hatıra deneyimi için sizi bekliyoruz.
            </p>
          </div>
        </section>

        <section id="urunler" className="section products reveal-3d">
          <h2>Ürünlerimiz</h2>
          <p className="section-lead">
            El işçiliği, sınırlı seri koleksiyonlar ve premium paketleme ile seçkin hediyeler.
          </p>
          <div className="product-grid">
            {categories.map((item) => (
              <article key={item.title} className="product-card tilt-card">
                <div className="flip-inner">
                  <div
                    className="flip-front"
                    style={{ "--card-image": `url('${item.image}')` }}
                  >
                    <img src={item.image} alt={item.title} className="card-photo" loading="lazy" />
                    <span className="badge">{item.badge}</span>
                    <i className={`fa-solid ${item.icon}`} />
                    <h3>{item.title}</h3>
                  </div>
                  <div className="flip-back">
                    <p>{item.text}</p>
                    <strong>{item.price}</strong>
                    <a href="https://wa.me/905000000000" target="_blank" rel="noreferrer">
                      İncele
                    </a>
                  </div>
                </div>
                <div className="product-meta">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section showcase reveal-3d">
          <h2>Signature Koleksiyon</h2>
          <div className="showcase-track">
            {categories.slice(0, 8).map((item, idx) => (
              <article key={`${item.title}-${idx}`} className="showcase-item">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="neden-biz" className="section why reveal-3d">
          <h2>Neden Biz?</h2>
          <div className="why-grid">
            {whyUs.map((item) => (
              <article key={item.title} className="why-card">
                <i className={`fa-solid ${item.icon}`} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="iletisim" className="section contact reveal-3d">
          <h2>İletişim</h2>
          <div className="contact-grid">
            <div className="map-wrap">
              <iframe
                title="Van Harita"
                loading="lazy"
                src="https://maps.google.com/maps?q=38.4983243,43.3970896&z=15&output=embed"
              />
            </div>
            <div className="contact-cards">
              <article>
                <h3>Konum</h3>
                <p>Van, Türkiye</p>
              </article>
              <article>
                <h3>Mağaza</h3>
                <p>HEDİYELİK DÜNYASI</p>
              </article>
              <article>
                <h3>İletişim</h3>
                <p>+90 500 000 00 00</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reviews reveal-3d">
          <h2>Müşteri Yorumları</h2>
          <div className="reviews-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="review-card">
                <p>"{item.text}"</p>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HEDİYELİK DÜNYASI • Van Hediyelik Eşya</p>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/905000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
