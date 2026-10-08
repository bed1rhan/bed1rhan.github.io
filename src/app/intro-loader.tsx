"use client";
import {useEffect,useState} from "react";
export default function IntroLoader(){
 const [visible,setVisible]=useState(false);
 const [progress,setProgress]=useState(0);
 useEffect(()=>{
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  if(sessionStorage.getItem("bb-intro-seen"))return;
  sessionStorage.setItem("bb-intro-seen","1");
  setVisible(true);
  const start=performance.now();
  let raf=0;
  const tick=(now:number)=>{
   const elapsed=now-start;
   setProgress(Math.min(100,Math.round(elapsed/15)));
   if(elapsed<1500)raf=requestAnimationFrame(tick);
   else setVisible(false);
  };
  raf=requestAnimationFrame(tick);
  return ()=>cancelAnimationFrame(raf);
 },[]);
 if(!visible)return null;
 return <div className="intro-loader" role="status" aria-label="Loading website">
 <div className="intro-loader-center"><div className="intro-loader-mark" aria-hidden="true"><span className="intro-hourglass">⌛</span></div><div className="intro-progress">{progress}%</div><div className="intro-progress-track"><div style={{width:progress+"%"}} /></div><div className="intro-loader-caption">INITIALIZING PORTFOLIO</div></div>
 </div>;
}