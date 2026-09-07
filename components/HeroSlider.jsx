"use client";
import { useEffect, useState } from "react";

export default function HeroSlider({ images = [] }) {
  const [active, setActive] = useState(0);
  const safeImages = images.length ? images : [];

  useEffect(() => {
    if (safeImages.length < 2) return;
    const timer = setInterval(() => setActive((value) => (value + 1) % safeImages.length), 2000);
    return () => clearInterval(timer);
  }, [safeImages.length]);

  return <div className="slider" aria-hidden="true">
    {safeImages.length ? safeImages.map((src, index) => (
      <div className={`slide ${index === active ? "slide--active" : ""}`} key={src}>
        <img src={src} alt="" loading={index === 0 ? "eager" : "lazy"} />
      </div>
    )) : <div className="placeholder"><b>ANA SAYFA GÖRSELLERİ</b><small>public/media/home-slider klasörüne fotoğraf ekleyin.</small></div>}
    {safeImages.length > 0 && <div className="counter"><span>{String(active + 1).padStart(2, "0")}</span><i/><span>{String(safeImages.length).padStart(2, "0")}</span></div>}
  </div>;
}
