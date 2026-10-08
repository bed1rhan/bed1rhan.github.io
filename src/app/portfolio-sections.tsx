import Link from "next/link";

const groups=[
 {tr:"Programlama",en:"Programming",detailTr:"Yazılım geliştirme ve algoritmik problem çözme",detailEn:"Software development and algorithmic problem solving",items:[["Python","python"],["C++","cplusplus"],["C","c"]]},
 {tr:"Görüntü ve Veri İşleme",en:"Image & Data Processing",detailTr:"Görüntü analizi, veri işleme ve makine öğrenimi araçları",detailEn:"Image analysis, data processing and machine learning tools",items:[["OpenCV","opencv"],["Pandas","pandas"],["TensorFlow / Keras","tensorflow"],["YOLOv5","pytorch"]]},
 {tr:"Araçlar ve Platformlar",en:"Tools & Platforms",detailTr:"Geliştirme ortamları, işletim sistemleri ve donanım",detailEn:"Development environments, operating systems and hardware",items:[["Raspberry Pi","raspberrypi"],["Linux","linux"],["Windows","windows"],["Git","git"]]}
];
export function SkillsView({locale}:{locale:string}){
 const tr=locale==="tr";
 return <div className="editorial-page">
 <div className="editorial-heading"><div className="eyebrow">{tr?"TEKNİK YETKİNLİKLER":"TECHNICAL SKILLS"}</div><h1>{tr?"Yetkinlikler":"Skills"}</h1><p>{tr?"Projelerimde kullandığım programlama dilleri, kütüphaneler ve geliştirme araçları.":"Programming languages, libraries and development tools I use in my projects."}</p></div>
 <div className="editorial-groups">{groups.map((group)=><section className="editorial-group" key={group.en}><div className="editorial-group-intro"><h2>{tr?group.tr:group.en}</h2><p>{tr?group.detailTr:group.detailEn}</p></div><div className="tech-tiles">{group.items.map(([name,icon])=><div className="tech-tile" key={name}><div className="tech-logo">{name==="C"?<div className="c-language-logo" aria-label="C language logo"><span>C</span></div>:name==="Windows"?<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#0078D4" d="M2 4.3 10.8 3v8.5H2zm10.2-1.5L22 1.4v10.1h-9.8zM2 12.7h8.8v8.5L2 19.9zm10.2 0H22v10.1l-9.8-1.4z"/></svg>:<img loading="lazy" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`} alt="" />}</div><span>{name}</span></div>)}</div></section>)}</div>
 </div>
}
const projects=[
 {id:"albasti",name:"Albastı",typeTr:"Bilişsel sistem mimarisi",typeEn:"Cognitive systems architecture",descriptionTr:"Bilişsel mimari, karar verme mekanizmaları ve gerçek dünyayla etkileşen akıllı sistemler üzerine uzun vadeli kişisel projem.",descriptionEn:"A long-term personal project exploring cognitive architecture, decision-making and intelligent systems that interact with the physical world.",status:"In Development",className:"development",stack:["AI Architecture","System Design"],href:"albasti"},
 {id:"yas",name:"YAS / PAS",typeTr:"Bilgisayarlı görü",typeEn:"Computer vision",descriptionTr:"Çevrimdışı yüz tanıma tabanlı personel devam takip sistemi. Serdivan Belediyesinde gerçek ortam beta testleri gerçekleştirildi.",descriptionEn:"An offline facial-recognition attendance system beta-tested in a real-world environment at Serdivan Municipality.",status:"Prototype",className:"prototype",stack:["Python","Computer Vision"]},
 {id:"sayas",name:"SAYAS",typeTr:"Görüntü analizi",typeEn:"Image analysis",descriptionTr:"Ziyaretçi sayma amaçlı bilgisayarlı görü uygulaması. Gerçek ortam beta testlerinin ardından geliştirme durduruldu.",descriptionEn:"A computer-vision visitor counter; development was discontinued after real-world beta testing.",status:"Discontinued",className:"discontinued",stack:["Computer Vision"]},
 {id:"ekas",name:"EKAS",typeTr:"Gömülü sistemler",typeEn:"Embedded systems",descriptionTr:"Raspberry Pi ve görüntü işleme teknolojileri kullanılarak geliştirilen emniyet kemeri tespit prototipi.",descriptionEn:"A seat-belt detection prototype using Raspberry Pi and computer vision technologies.",status:"Prototype",className:"prototype",stack:["Raspberry Pi","Computer Vision"]}
];
export function ProjectsView({locale}:{locale:string}){
 const tr=locale==="tr";
 return <div className="editorial-page">
 <div className="editorial-heading"><div className="eyebrow">{tr?"SEÇİLİ ÇALIŞMALAR":"SELECTED WORK"}</div><h1>{tr?"Projeler":"Projects"}</h1><p>{tr?"Fikir aşamasından prototipe ve çalışan sistemlere uzanan çalışmalarım. Projelerin mevcut geliştirme durumlarını da burada görebilirsiniz.":"From early concepts to prototypes and working systems. Each project includes its current development status."}</p></div>
 <div className="project-list">{projects.map((project)=><article className="project-row" key={project.id}><div className="project-row-content"><div className="project-row-top"><div><span className="project-category">{tr?project.typeTr:project.typeEn}</span><h2>{project.name}</h2></div><span className={`status status-${project.className}`}>{project.status}</span></div><p>{tr?project.descriptionTr:project.descriptionEn}</p><div className="project-row-bottom"><div className="project-tech">{project.stack.map(s=><span key={s}>{s}</span>)}</div>{project.href?<Link className="project-details-link" href={`/${locale}/projects/${project.href}/`}>{tr?"Projeyi incele":"View project"} <span aria-hidden="true">↗</span></Link>:<span className="project-details-muted">{tr?"Detay sayfası hazırlanıyor":"Details coming soon"}</span>}</div></div></article>)}</div>
 </div>
}
