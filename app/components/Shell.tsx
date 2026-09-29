'use client';
import Link from 'next/link'; import {usePathname} from 'next/navigation'; import {Activity,CalendarDays,Database,FileSearch,FolderOpen,LayoutDashboard,Settings2,ShieldCheck,Bell,Command} from 'lucide-react';
const nav=[['/','Overview',LayoutDashboard],['/search','BOE Search',FileSearch],['/daily-activity','Daily Activity',CalendarDays],['/folders','Folder Explorer',FolderOpen],['/scanner','Scanner Center',Activity],['/data-health','Data Health',Database],['/audit','Audit Trail',ShieldCheck]] as const;
export default function Shell({children,title,subtitle}:{children:React.ReactNode;title:string;subtitle?:string}){
 const path=usePathname();
 return <div className="app-shell">
  <header className="topbar"><Link href="/" className="brand"><div className="brandmark"><span>BOE</span></div><div><strong>BOE / 2026</strong><small>OPERATIONS INTELLIGENCE</small></div></Link>
   <div className="global-search"><FileSearch size={16}/><Link href="/search">Search BOE, 305, DXB, VIN or folder…</Link><kbd><Command size={11}/> K</kbd></div>
   <div className="top-actions"><span className="online"><i/> Scanner online</span><button className="icon-btn"><Bell size={17}/></button><div className="avatar">AG</div></div>
  </header>
  <div className="layout"><aside className="sidebar"><div className="workspace"><span>WORKSPACE</span><b>2026 IMPORT OPERATION</b></div><nav>{nav.map(([href,label,Icon],i)=><Link key={href} href={href} className={path===href?'navitem active':'navitem'}><span className="nav-index">0{i+1}</span><Icon size={16}/><span>{label}</span></Link>)}</nav><div className="side-bottom"><div className="health"><span className="health-dot"/><div><b>System healthy</b><small>All services operational</small></div></div><button className="navitem"><Settings2 size={16}/><span>Settings</span></button></div></aside>
   <main className="main"><section className="hero"><div><div className="eyebrow"><span className="pulse"/> LIVE OPERATIONS · 29 SEP 2026</div><h1>{title}</h1><p>{subtitle}</p></div><div className="hero-rule"><span>PROTECTED SOURCE</span><b>Z:\…\2026</b></div></section>{children}<footer><span>BOE / OPERATIONS INTELLIGENCE</span><span>Windows Scanner · Read-only source</span><span>v0.4 concept build</span></footer></main>
  </div></div>
}