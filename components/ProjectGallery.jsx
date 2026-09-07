"use client";
import { useMemo, useState } from "react";

const labels = { all: "Tümü", ofis: "Ofis", ticari: "Ticari" };

export default function ProjectGallery({ projects }) {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(() => filter === "all" ? projects : projects.filter((project) => project.category === filter), [filter, projects]);

  return <>
    <div className="project-filters">{Object.entries(labels).map(([key, label]) => <button className={filter === key ? "active" : ""} onClick={() => setFilter(key)} key={key}>{label}</button>)}</div>
    {visible.length ? <div className="project-grid">{visible.map((project, index) => <article className="project-card" key={project.id} style={{ "--delay": `${Math.min(index, 8) * 45}ms` }}>
      <div className="project-image"><img src={project.image} alt={project.title}/><span>İncele ↗</span></div>
      <div className="project-meta"><h2>{project.title}</h2><p>{labels[project.category]}</p></div>
    </article>)}</div> : <div className="project-empty"><strong>Bu kategoride henüz proje yok.</strong><span>Görselleri public/media/projects/{filter === "all" ? "ofis veya ticari" : filter} klasörüne ekleyin.</span></div>}
  </>;
}
