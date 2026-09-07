"use client";
import {useState} from "react";import {site} from "@/content/site";
export default function Logo(){
 const [bad,setBad]=useState(false);
 return <div className="brand">{<div className="logo">{!bad?<img src={site.brand.logo} alt="" onError={()=>setBad(true)}/>:<b>L</b>}</div>}
 <div className="brand-text"><strong>{site.brand.name}</strong><span>{site.brand.descriptor}</span></div></div>
}