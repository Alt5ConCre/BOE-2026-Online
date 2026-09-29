import Link from 'next/link';
import {ArrowUpRight, Activity, Database, FileSearch, FolderOpen, ShieldCheck, Clock3, ScanLine, ChevronRight} from 'lucide-react';
import Shell from './components/Shell';
import {records} from './data';

export default function Home(){
  return <Shell title="BOE Operations" subtitle="One controlled view of customs-document activity across the 2026 import operation.">
    <section className="control-hero">
      <div className="control-copy">
        <div className="section-kicker">OPERATIONS / 2026</div>
        <h2>Every document.<br/><em>One source of truth.</em></h2>
        <p>The Windows scanner continuously indexes the protected company structure while this workspace gives operators a faster way to search, inspect and trace every BOE event.</p>
        <div className="hero-actions">
          <Link href="/search" className="primary-action"><FileSearch size={16}/> Search BOEs <ArrowUpRight size={15}/></Link>
          <Link href="/scanner" className="secondary-action">Open scanner <ChevronRight size={15}/></Link>
        </div>
      </div>
      <div className="orbit-stage">
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
        <div className="orbit-core"><ScanLine size={27}/><span>LIVE INDEX</span><b>2,713</b><small>records</small></div>
        <div className="orbit-label label-a">18 <span>new today</span></div>
        <div className="orbit-label label-b">42 <span>active folders</span></div>
        <div className="orbit-label label-c">0 <span>scan errors</span></div>
      </div>
    </section>

    <section className="signal-strip">
      <div><span>INDEXED</span><b>2,713</b><small>records</small></div>
      <div><span>CHANGES TODAY</span><b>18</b><small>6 modified</small></div>
      <div><span>LAST SCAN</span><b>09:10</b><small>completed · 1m 42s</small></div>
      <div><span>SYSTEM</span><b className="signal-live"><i/>Online</b><small>Windows agent healthy</small></div>
    </section>

    <section className="command-grid">
      <div className="command-main">
        <div className="section-heading"><div><span className="section-kicker">WORKSPACES</span><h3>Operate the way you work</h3></div><span className="muted-note">6 dedicated workspaces</span></div>
        <div className="workspace-grid">
          {[
            ['/search','01','BOE Search',FileSearch,'Find BOE, 305, DXB, VIN, filenames and folders.'],
            ['/daily-activity','02','Daily Activity',Clock3,'Trace what was discovered or changed by date.'],
            ['/folders','03','Folder Explorer',FolderOpen,'Navigate the indexed 2026 structure and CLOSED branches.'],
            ['/scanner','04','Scanner Center',Activity,'Monitor heartbeat, scans, throughput and errors.'],
            ['/data-health','05','Data Health',Database,'Check integrity, source availability and index quality.'],
            ['/audit','06','Audit Trail',ShieldCheck,'Follow scanner events and record-level history.']
          ].map(([href,n,label,Icon,desc])=><Link href={href as string} className="workspace-card" key={label as string}>
            <span className="workspace-number">{n as string}</span><div className="workspace-icon"><Icon size={19}/></div><div className="workspace-content"><b>{label as string}</b><p>{desc as string}</p></div><ArrowUpRight className="workspace-arrow" size={17}/>
          </Link>)}
        </div>
      </div>
      <aside className="activity-panel">
        <div className="section-heading"><div><span className="section-kicker">LIVE FEED</span><h3>Latest activity</h3></div><span className="feed-dot">LIVE</span></div>
        <div className="feed-list">{records.slice(0,5).map((r,i)=><Link href="/search" className="feed-item" key={r.boe}>
          <span className={'feed-marker '+(i===1?'gold':'')}><i/></span><div><b>{r.boe}</b><p>{r.type} match · {r.folder}</p></div><time>{r.modified}</time>
        </Link>)}</div>
        <Link href="/daily-activity" className="feed-footer">Open daily activity <ArrowUpRight size={14}/></Link>
      </aside>
    </section>
  </Shell>
}