import Link from "next/link";
export default function SiteNav({locale}:{locale:string}){
 const tr=locale==="tr";
 const links=[["about",tr?"Hakkımda":"About"],["projects",tr?"Projeler":"Projects"],["skills",tr?"Yetkinlikler":"Skills"],["blog",tr?"Yazılar":"Blog"],["contact",tr?"İletişim":"Contact"]];
 return <header lang={tr?"tr":"en"}><nav className="wrap" aria-label={tr?"Ana menü":"Main navigation"}><Link className="brand" href={`/${locale}/`}>Bedirhan Bayram</Link><div className="links">{links.map(([slug,label])=><Link key={slug} href={`/${locale}/${slug}/`}>{label}</Link>)}<Link href={`/${tr?"en":"tr"}/`}>{tr?"EN":"TR"}</Link></div></nav></header>;
}