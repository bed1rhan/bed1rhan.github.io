import SiteNav from "../site-nav";
export function generateStaticParams(){return [{locale:"en"},{locale:"tr"}]}
export default async function LocaleLayout({children,params}:{children:React.ReactNode,params:Promise<{locale:string}>}){const {locale}=await params;return <><SiteNav locale={locale==="en"?"en":"tr"}/>{children}</>}