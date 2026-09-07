"use client";

import { useState } from "react";
import Link from "next/link";

export default function HoverMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`menu-zone ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menü"
      >
        <span />
        <span />
        <span />
      </button>

      <aside className="panel">
        <div className="panel-brand">
          <b>LOB</b>
          <small>İÇ MİMARLIK</small>
        </div>

        <nav className="panel-nav">

          <Link href="/">
            <span>Ana Sayfa</span>
            <b>↗</b>
          </Link>

          <Link href="/projeler">
            <span>Projeler</span>
            <b>↗</b>
          </Link>

          <button
            type="button"
            onClick={(e) => e.preventDefault()}
          >
            <span>Hakkımızda</span>
            <b>↗</b>
          </button>

          <button
            type="button"
            onClick={(e) => e.preventDefault()}
          >
            <span>İletişim</span>
            <b>↗</b>
          </button>

        </nav>

        <div className="socials">
          <button type="button">IG</button>
          <button type="button">IN</button>
          <button type="button">BE</button>
          <button type="button">PT</button>
        </div>

        <div className="panel-foot">
          <span>İstanbul · Türkiye</span>
          <span>© 2026 LOBİ</span>
        </div>
      </aside>
    </div>
  );
}
