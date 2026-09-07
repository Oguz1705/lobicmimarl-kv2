"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export default function HoverMenu({ light = false }) {
  const [open, setOpen] = useState(false);
  return <div className={`menu-zone ${open ? "open" : ""} ${light ? "menu-zone--light" : ""}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
    <button className="trigger" onClick={() => setOpen((value) => !value)} aria-label="Menü"><span/><span/><span/></button>
    <aside className="panel">
      <div className="panel-brand"><b>LOBİ</b><small>İÇ MİMARLIK</small></div>
      <nav>{site.menu.map((item) => item.href === "#" ? <button key={item.label} onClick={(event) => event.preventDefault()}><span>{item.label}</span><b>↗</b></button> : <Link key={item.label} href={item.href}><span>{item.label}</span><b>↗</b></Link>)}</nav>
      <div className="socials">{site.socials.map((item) => <button key={item} onClick={(event) => event.preventDefault()}>{item}</button>)}</div>
      <div className="panel-foot"><span>İstanbul · Türkiye</span><span>© 2026 LOBİ</span></div>
    </aside>
  </div>;
}
