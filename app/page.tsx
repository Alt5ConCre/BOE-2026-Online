'use client';

import { useMemo, useState } from 'react';
import {
  Activity, Archive, ArrowUpRight, Bell, CalendarDays, ChevronDown, ChevronRight,
  CircleCheck, Clock3, Database, FileSearch, FolderOpen, LayoutDashboard,
  Menu, MoreHorizontal, RefreshCw, Search, Server, Settings2, ShieldCheck,
  SlidersHorizontal, Sparkles, X, Zap
} from 'lucide-react';

type RecordItem = {
  boe:string; date:string; type:string; location:string; folder:string; status:'Active'|'Changed'; size:string; modified:string;
};

const records:RecordItem[]=[
 {boe:'BOE-2026-009812',date:'29 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'184 KB',modified:'09:08'},
 {boe:'305-7781',date:'29 Sep 2026',type:'305',location:'DXB',folder:'September / Import Operation',status:'Changed',size:'92 KB',modified:'09:05'},
 {boe:'DXB-48192',date:'28 Sep 2026',type:'DXB',location:'DXB',folder:'September / Active',status:'Active',size:'210 KB',modified:'17:42'},
 {boe:'BOE-2026-009731',date:'28 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'176 KB',modified:'16:21'},
 {boe:'305-7610',date:'27 Sep 2026',type:'305',location:'DXB',folder:'September / Active',status:'Active',size:'88 KB',modified:'14:13'},
 {boe:'BOE-2026-009624',date:'26 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'164 KB',modified:'11:02'}
];

const nav=[
 ['Overview',LayoutDashboard],['BOE Search',FileSearch],['Daily Activity',CalendarDays],['Folder Explorer',FolderOpen],
 ['Scanner Center',Activity],['Data Health',Database],['Audit Trail',ShieldCheck]
] as const;

export default function Home(){
 const [query,setQuery]=useState(''); const [active,setActive]=useState('Overview');
 const [scanning,setScanning]=useState(false); const [selected,setSelected]=useState<RecordItem|null>(null);
 const filtered=useMemo(()=>records.filter(r=>Object.values(r).join(' ').toLowerCase().includes(query.toLowerCase())),[query]);
 const scan=()=>{setScanning(true);setTimeout(()=>setScanning(false),1400)};
 return <div className="app-shell">
  <header className="topbar">
   <div className="brand"><div className="brandmark"><Sparkles size={17}/></div><div><strong>BOE Intelligence</strong><small>Operations Control</small></div></div>
   <div className="global-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search BOE, 305, DXB or folder…"/><kbd>⌘ K</kbd></div>
   <div className="top-actions"><span className="online"><i/> Scanner online</span><button className="icon-btn"><Bell size={17}/></button><div className="avatar">AG</div></div>
  </header>
  <div className="mobilebar"><button className="icon-btn"><Menu size={20}/></button><span>{active}</span><button className="icon-btn"><MoreHorizontal size={20}/></button></div>
  <div className="layout">
   <aside className="sidebar">
    <div className="workspace"><span>WORKSPACE</span><b>BOE 2026</b></div>
    <nav>{nav.map(([label,Icon])=><button key={label} className={active===label?'navitem active':'navitem'} onClick={()=>setActive(label)}><Icon size={17}/><span>{label}</span>{label==='BOE Search'&&<em>⌘1</em>}</button>)}</nav>
    <div className="side-bottom"><div className="health"><span className="health-dot"/><div><b>System healthy</b><small>All services operational</small></div></div><button className="navitem"><Settings2 size={17}/><span>Settings</span></button></div>
   </aside>
   <main className="main">
    <section className="hero">
     <div><div className="eyebrow"><span className="pulse"/> Live operations · 29 September 2026</div><h1>{active==='Overview'?'Everything your BOE team needs.':active}</h1><p>{active==='Overview'?'A clear command center for discovering, tracking and auditing 2026 customs documents across the existing logistics folder structure.':'Search, monitor and manage your BOE operations from one workspace.'}</p></div>
     <div className="hero-actions"><button className="secondary-btn"><SlidersHorizontal size={15}/> Filters</button><button className="primary-btn" onClick={scan}><RefreshCw className={scanning?'spin':''} size={15}/>{scanning?'Scanning…':'Scan now'}</button></div>
    </section>
    <section className="metrics">
     {[['Total BOEs','2,713','+18 today','blue'],['New today','18','6 changed','violet'],['Active folders','42','3 months active','green'],['Last scan','09:10','Next · 09:15','amber']].map(([a,b,c,d])=><div className="metric-card" key={a}><div className={'metric-icon '+d}><Zap size={16}/></div><span>{a}</span><strong>{b}</strong><small>{c}</small></div>)}
    </section>
    <section className="content-grid">
     <div className="panel search-panel">
      <div className="panel-head"><div><span className="section-kicker">DOCUMENT INDEX</span><h2>BOE records</h2><p>Live-style view of indexed metadata</p></div><button className="more-btn"><MoreHorizontal size={18}/></button></div>
      <div className="filterbar"><div className="inline-search"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search records…"/>{query&&<button onClick={()=>setQuery('')}><X size={13}/></button>}</div><button className="filter-chip">All types <ChevronDown size={13}/></button><button className="filter-chip">September <ChevronDown size={13}/></button></div>
      <div className="table-wrap"><table><thead><tr><th>REFERENCE</th><th>DATE</th><th>MATCH</th><th>FOLDER</th><th>STATUS</th><th></th></tr></thead><tbody>{filtered.map(r=><tr key={r.boe} onClick={()=>setSelected(r)}><td><div className="ref"><span className="file-icon"><FileSearch size={14}/></span><b>{r.boe}</b></div></td><td>{r.date}</td><td><span className="match">{r.type}</span></td><td><span className="folder">{r.folder}</span></td><td><span className={'status '+(r.status==='Changed'?'changed':'')}><i/>{r.status}</span></td><td><ArrowUpRight size={15} className="row-arrow"/></td></tr>)}</tbody></table></div>
      <div className="table-foot"><span>Showing {filtered.length} of 2,713 indexed records</span><button>View all records <ChevronRight size={14}/></button></div>
     </div>
     <aside className="right-col">
      <div className="panel scanner-panel">
       <div className="panel-head"><div><span className="section-kicker">SYSTEM</span><h2>Scanner center</h2></div><span className="live-badge"><i/> LIVE</span></div>
       <div className="scanner-status"><div className="server-orb"><Server size={22}/><span/></div><div><b>{scanning?'Scanning source tree':'Ready to scan'}</b><p>Z:\PROJECT_LOGISTICS\…\2026</p></div></div>
       <div className="scan-line"><span>Schedule</span><b>Every 5 minutes</b></div><div className="scan-line"><span>Folder rules</span><b><CircleCheck size={14}/> CLOSED-aware</b></div><div className="scan-line"><span>Last completed</span><b>09:10 · 1m 42s</b></div>
       <div className="scan-progress"><span style={{width:scanning?'72%':'100%'}}/></div>
       <button className="wide-btn" onClick={scan}>{scanning?'Scanning source…':'Run full scan'} <ArrowUpRight size={14}/></button>
      </div>
      <div className="panel activity-panel"><div className="panel-head"><div><span className="section-kicker">ACTIVITY</span><h2>Today</h2></div><button className="more-btn"><MoreHorizontal size={18}/></button></div><div className="activity-list">{[['09:10','Scan completed','September active folders checked'],['09:10','4 matches detected','BOE · 305 · DXB matching'],['09:09','18 new records','History preserved automatically'],['09:04','Scanner heartbeat','Windows agent responded']].map(x=><div className="activity-item" key={x[0]+x[1]}><div className="timeline-dot"/><div><b>{x[1]}</b><p>{x[2]}</p></div><time>{x[0]}</time></div>)}</div></div>
     </aside>
    </section>
    <section className="bottom-grid">
      <div className="panel chart-panel"><div className="panel-head"><div><span className="section-kicker">DISCOVERY</span><h2>BOEs by month</h2></div><span className="mini-select">2026 <ChevronDown size={13}/></span></div><div className="bars">{[62,76,54,84,71,92,68,88,74,96,79,58].map((h,i)=><div className="bar-col" key={i}><div className="bar" style={{height:h+'%'}}/><small>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</small></div>)}</div></div>
      <div className="panel health-panel"><div className="panel-head"><div><span className="section-kicker">DATA HEALTH</span><h2>Integrity overview</h2></div><span className="health-score">98.7%</span></div><div className="health-row"><span>Indexed files</span><b>2,713</b><i><span style={{width:'98%'}}/></i></div><div className="health-row"><span>Change history</span><b>100%</b><i><span style={{width:'100%'}}/></i></div><div className="health-row"><span>Source availability</span><b>99.9%</b><i><span style={{width:'99.9%'}}/></i></div><div className="notice"><ShieldCheck size={16}/><span><b>No source files modified</b><small>Scanner operates read-only.</small></span></div></div>
    </section>
    <footer><span>BOE Intelligence</span><span>Source: Windows BOE Scanner</span><span>Read-only source protection</span><span>v0.2 interface</span></footer>
   </main>
  </div>
  {selected&&<div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="detail-modal" onClick={e=>e.stopPropagation()}><div className="modal-head"><div><span className="section-kicker">RECORD DETAIL</span><h2>{selected.boe}</h2></div><button className="icon-btn" onClick={()=>setSelected(null)}><X size={18}/></button></div><div className="detail-grid"><div><small>Match</small><b>{selected.type}</b></div><div><small>Status</small><b>{selected.status}</b></div><div><small>Modified</small><b>{selected.modified}</b></div><div><small>File size</small><b>{selected.size}</b></div></div><div className="source-box"><FolderOpen size={18}/><div><small>Source folder</small><b>{selected.folder}</b><p>Z:\PROJECT_LOGISTICS\Car Project\Import operation\2026</p></div></div><button className="primary-btn modal-btn"><FolderOpen size={15}/> Open source folder</button></div></div>}
 </div>
}