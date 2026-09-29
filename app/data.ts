export type BOERecord={boe:string;date:string;type:string;location:string;folder:string;status:'Active'|'Changed';size:string;modified:string};
export const records:BOERecord[]=[
{boe:'BOE-2026-009812',date:'29 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'184 KB',modified:'09:08'},
{boe:'305-7781',date:'29 Sep 2026',type:'305',location:'DXB',folder:'September / Import Operation',status:'Changed',size:'92 KB',modified:'09:05'},
{boe:'DXB-48192',date:'28 Sep 2026',type:'DXB',location:'DXB',folder:'September / Active',status:'Active',size:'210 KB',modified:'17:42'},
{boe:'BOE-2026-009731',date:'28 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'176 KB',modified:'16:21'},
{boe:'305-7610',date:'27 Sep 2026',type:'305',location:'DXB',folder:'September / Active',status:'Active',size:'88 KB',modified:'14:13'},
{boe:'BOE-2026-009624',date:'26 Sep 2026',type:'BOE',location:'DXB',folder:'September / Import Operation',status:'Active',size:'164 KB',modified:'11:02'}];