import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./theme-toggle";
import IntroLoader from "./intro-loader";
export const metadata: Metadata = {title:"Bedirhan Bayram",description:"Computer engineering, software and projects.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="tr" suppressHydrationWarning><body><IntroLoader />{children}<footer className="site-footer"><div className="wrap footer-inner"><div className="footer-bottom"><span>© 2026 Bedirhan Bayram</span><span className="footer-links"><a href="mailto:bedirhanbayram.bb@gmail.com">Email</a><a href="https://instagram.com/han.bayram_">Instagram</a><a href="https://github.com/bed1rhan">GitHub</a></span><ThemeToggle /></div></div></footer></body></html>
}