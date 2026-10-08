import Link from "next/link";

export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif",padding:"4rem 2rem",maxWidth:680,margin:"auto"}}>
      <meta httpEquiv="refresh" content="0;url=/tr/" />
      <script dangerouslySetInnerHTML={{__html:'window.location.replace("/tr/");'}} />
      <h1>Bedirhan Bayram</h1>
      <p>Redirecting to the portfolio...</p>
      <p><Link href="/tr/">Türkçe</Link> · <Link href="/en/">English</Link></p>
    </main>
  );
}
