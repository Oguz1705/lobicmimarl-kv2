import HeroSlider from "@/components/HeroSlider";
import HoverMenu from "@/components/HoverMenu";
import Logo from "@/components/Logo";
import { site } from "@/content/site";
import { getHomeSliderImages } from "@/lib/media";

export default function Page() {
  const sliderImages = getHomeSliderImages();
  return <main className="home">
    <HeroSlider images={sliderImages}/>
    <header className="topbar"><Logo/><HoverMenu/></header>
    <section className="hero-copy"><p className="eyebrow">{site.hero.eyebrow}</p><h1>{site.hero.title}</h1><p>{site.hero.text}</p></section>
    <div className="bottom"><span>Interior Architecture</span><span>Scroll to explore</span></div>
  </main>;
}
