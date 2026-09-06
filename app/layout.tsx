import type {Metadata} from 'next'; import {Geist, Geist_Mono} from 'next/font/google'; import './globals.css';
const geist=Geist({variable:'--font-geist-sans',subsets:['latin']}); const mono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata:Metadata={title:'CareConnect — Find the right care',description:'A premium healthcare discovery demo.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${geist.variable} ${mono.variable} antialiased`}><body className="min-h-screen bg-white text-slate-950">{children}</body></html>}
