"use client";
import {useEffect,useState} from "react";
export default function ThemeToggle(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{
    const saved=localStorage.getItem("portfolio-theme");
    const preferred=window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled=saved==="dark"||(saved===null&&preferred);
    document.documentElement.classList.toggle("dark",enabled);
    setDark(enabled);
  },[]);
  function toggle(){const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("portfolio-theme",next?"dark":"light")}
  return <button className="theme-toggle" onClick={toggle} aria-label={dark?"Switch to light theme":"Switch to dark theme"}>{dark?"☀ Light":"☾ Dark"}</button>
}