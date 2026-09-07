import Logo from "@/components/Logo";
import HoverMenu from "@/components/HoverMenu";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectImages } from "@/lib/media";

export const metadata = { title: "Projeler | LOBİ İç Mimarlık" };

export default function ProjectsPage() {
  const projects = [...getProjectImages("ofis"), ...getProjectImages("ticari")];
  return <main className="projects-page">
    <header className="projects-header"><Logo/><HoverMenu light/></header>
    <section className="projects-intro"><div><p className="projects-kicker">SEÇİLİ ÇALIŞMALAR · LOBİ</p><h1>Projeler</h1></div><p>Mekânın karakterini; işlev, malzeme, ışık ve detay üzerinden yeniden kuruyoruz.</p></section>
    <section className="projects-content"><ProjectGallery projects={projects}/></section>
  </main>;
}
