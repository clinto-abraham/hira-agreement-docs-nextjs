"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Server,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Calculator,
  Truck,
  Wrench,
  FileCode,
  FileCheck,
} from "lucide-react";

export default function AnnexurePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50/20 to-slate-200/60 py-10 px-4 print:bg-white print:p-0 text-slate-800 font-sans antialiased">
      {/* Floating Action Bar (Hidden when printing) */}
      <div className="fixed top-6 right-6 flex items-center gap-3 print:hidden z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200 shadow-md text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Master Agreement
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 hover:from-slate-800 hover:to-emerald-900 text-white px-5 py-2.5 rounded-full shadow-lg shadow-slate-900/20 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          Save as PDF / Print
        </button>
      </div>

      {/* Main Document Paper Canvas */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-300/40 border border-slate-200/80 overflow-hidden print:shadow-none print:border-none print:rounded-none print:p-0 print:max-w-none">
        
        {/* Top Decorative Gradient Accent Ribbon */}
        <div className="h-3 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 print:hidden" />

        <div className="p-8 sm:p-12 print:p-0">

          {/* Header & Identification */}
          <div className="border-b-2 border-slate-900 pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-md text-[11px] font-bold tracking-wider uppercase mb-2">
                  Standard Commercial Annexure • Confidential
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  ANNEXURE A: TECHNICAL ARCHITECTURE & PROJECT SCOPE
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Attached to and forming an integral legal schedule of the Master Service Agreement between Ciyo Enterprises and Hira Farms.
                </p>
              </div>
              <div className="sm:text-right text-xs text-slate-500 shrink-0">
                <p><span className="font-semibold text-slate-700">Document Ref:</span> HF-CIYO-ANNEX-V1</p>
                <p><span className="font-semibold text-slate-700">Target Ecosystem:</span> 7 Distinct Applications</p>
                <p><span className="font-semibold text-slate-700">Monorepo Topology:</span> Apps Multi-Workspace</p>
              </div>
            </div>
          </div>

          {/* Section 1: Executive Technical Architecture & Topology */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Server className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                1. System Architecture & Monorepo Topology
              </h2>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              The Hira Dairy Farm Digital Ecosystem is engineered as an enterprise-grade multi-client monorepo structure comprising seven (7) dedicated applications sharing a unified, secure database and high-performance serverless backend. Each application operates within strict functional boundaries to prevent operational crossover and ensure zero-baseline ongoing operational overhead.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-indigo-700 font-bold mb-1.5">
                  <Globe className="w-4 h-4" />
                  <span>3 Web Applications</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Next.js App Router (React 19, Tailwind CSS), optimized for search engine crawlability, responsive desktop/tablet workstations, and rapid data entry.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>3 Mobile Applications</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  React Native (Expo SDK 52+), touch-first field workflows, camera barcode/RFID integration, offline resilience, and live push notifications.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-teal-700 font-bold mb-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>1 Serverless Backend</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Node.js / Express microservice wrapped for AWS Lambda (@vendia/serverless-express) and MongoDB Atlas M0 Free Tier (zero fixed monthly cloud cost).
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Detailed Scope Breakdown - Web Applications */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Layers className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                2. Scope Specification: Next.js Web Portals (3 Apps)
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              {/* Web App 1 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] flex items-center justify-center font-black">2.1</span>
                    Investor Livestock Marketplace Web Portal
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/marketplace-hira-farms-frontend-next
                  </code>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 mt-3 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Live livestock catalog with multi-filter (Murrah, Nili-Ravi, Jaffarabadi, lactation stage).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Unit detail views with yield benchmarks, vet certification PDFs, and pedigree logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Multi-animal shopping bag with dynamic quantity steppers (+/-), item removal, and auto-subtotals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Comprehensive Checkout Engine with advance deposit calculation, statutory legal agreements, and multi-rail payment UI.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Persistent cart storage across page navigation and offline-tolerant order placement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Live procurement tracking with highway transit milestones and timeline visualizer.</span>
                  </li>
                </ul>
              </div>

              {/* Web App 2 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-[11px] flex items-center justify-center font-black">2.2</span>
                    Farm Operations & Admin Management Control Portal
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/marketplace-hira-farms-frontend-admin
                  </code>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 mt-3 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Daily Milking Parlor Recording: Morning & evening milk entry by animal ear-tag ID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Automated Milk Pricing Ledger: Daily prevailing market rate/liter, FAT %, and SNF % inputs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Animal Lifecycle Management: Health status, deworming, vaccination schedule, insemination, calving logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Livestock Listing & Marketplace Catalog Publisher with image uploads and package pricing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Procurement & Transit Dispatch Management: Real-time milestone updates and GPS waypoint entry.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Comprehensive P&L and financial accounting reports with exportable Excel/CSV statements.</span>
                  </li>
                </ul>
              </div>

              {/* Web App 3 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-[11px] flex items-center justify-center font-black">2.3</span>
                    Investor Livestock Asset Performance Portal
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/performance-hira-farms-frontend-next
                  </code>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 mt-3 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Personalized Investor Portfolio: Units owned, active milking buffaloes, born calves, yield index.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Daily Milking Yield Charts: Historical yield graphs with morning/evening split comparisons.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Monthly Financial Payout Ledger: Milk sales revenue, maintenance deductions, and net yield return.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Live Farm Parlor CCTV & Camera Feed Integrator for visual transparency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Veterinary & Biosecurity Health Records with downloadable medical compliance certificates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Downloadable monthly dividend statements and annual taxation audit summaries.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Detailed Scope Breakdown - Mobile Applications */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Smartphone className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                3. Scope Specification: React Native Expo Mobile Apps (3 Apps)
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              {/* Mobile App 1 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-[11px] flex items-center justify-center font-black">3.1</span>
                    Investor Marketplace Mobile App
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/marketplace-hira-farms-mobile
                  </code>
                </div>
                <p className="text-slate-600 text-[11px] mb-2">
                  Native iOS & Android mobile companion mirroring the Marketplace web capabilities with handheld optimization:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Fluid touch-gesture livestock catalogue browsing with photo/video carousels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Persistent mobile bag with haptic feedback steppers and dynamic payment breakdown.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>One-tap KYC document upload via mobile device camera and file picker.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Real-time push notifications for order confirmation, transit progress, and arrival.</span>
                  </li>
                </ul>
              </div>

              {/* Mobile App 2 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-[11px] flex items-center justify-center font-black">3.2</span>
                    Farm Operations & Supervisor Field Mobile App
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/admin-hira-farms-mobile
                  </code>
                </div>
                <p className="text-slate-600 text-[11px] mb-2">
                  High-contrast barn-ready interface engineered specifically for rugged on-farm operations:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Rapid numerical keypad entry for twice-daily milking yield recording in the shed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Ear-tag lookup via camera barcode/QR/RFID scanning or fast numerical search.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Offline-first local SQLite / Async Storage sync for sheds with spotty cellular coverage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
                    <span>Direct vet check logging (temperature, mastitis check, medication administration).</span>
                  </li>
                </ul>
              </div>

              {/* Mobile App 3 */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-[11px] flex items-center justify-center font-black">3.3</span>
                    Investor Performance & Asset Monitoring Mobile App
                  </h3>
                  <code className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-mono">
                    apps/performance-hira-farms-mobile
                  </code>
                </div>
                <p className="text-slate-600 text-[11px] mb-2">
                  Investor pocket companion providing real-time visibility into livestock well-being and returns:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Daily milking push alerts immediately upon evening log submission by farm staff.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Native chart rendering (yield curves, monthly revenues, lactation index).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Live CCTV RTSP/HLS stream streaming view embedded within animal unit cards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>Monthly payout wallet and direct bank withdrawal status tracker.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Backend API & Data Engine */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Database className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                4. Centralized Backend & Database Architecture
              </h2>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900">Backend Core Microservice:</span>
                <code className="text-indigo-700 font-mono text-[11px]">apps/hira-farms-backend</code>
              </div>
              <p className="leading-relaxed">
                A single unified REST API built with Node.js and Express, architected to execute either as a persistent local container or serverlessly on AWS Lambda using <code className="bg-slate-200 px-1 py-0.5 rounded text-[10px]">@vendia/serverless-express</code>. This guarantees 100% cloud zero-baseline cost when idle while autoscaling to handle burst traffic during marketplace drops or milking log hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Mongoose Schemas & Entities</span>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    <li>• <strong className="text-slate-800">LivestockUnit:</strong> Ear tag, breed, DOB, cost, advance, photos, transit status.</li>
                    <li>• <strong className="text-slate-800">DailyMilkLog:</strong> Morning/evening liters, FAT %, SNF %, daily rate, recordedBy.</li>
                    <li>• <strong className="text-slate-800">AnimalHealth:</strong> Vaccine schedules, illness records, vet certifications.</li>
                    <li>• <strong className="text-slate-800">Order & Checkout:</strong> Multi-item cart snapshot, advance payment, agreement ref.</li>
                    <li>• <strong className="text-slate-800">FarmFinancials:</strong> Aggregated milk sales, feed overheads, monthly investor dividend.</li>
                  </ul>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Security & Operational Safeguards</span>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    <li>• Role-Based Access Control (RBAC) with stateless JWT tokens (Admin, Farm Staff, Investor).</li>
                    <li>• Multi-tenant database partition isolation with index keys (<code className="text-[10px]">tenant_id</code>).</li>
                    <li>• Robust CORS and input validation using strict JSON schema guards.</li>
                    <li>• Graceful offline fallback on client apps with idempotent transaction sync.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Core Business Logic & Data Formulas */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Calculator className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                5. Calculation Engines & Operational Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-slate-700">
                <span className="font-bold text-emerald-950 block mb-1">Milking Parlor Revenue Formula</span>
                <p className="text-[11px] leading-relaxed text-slate-600 mb-2">
                  Milk sales are calculated per individual animal yield adjusted for market FAT and SNF quality multipliers:
                </p>
                <div className="bg-white p-2.5 rounded font-mono text-[10px] text-emerald-900 border border-emerald-300">
                  Daily Gross = (Morning Litres + Evening Litres) × Daily Rate/Ltr × (FAT/6.5)
                </div>
                <p className="text-[10px] text-slate-500 mt-2">
                  All figures lock daily at 23:59:59 IST to guarantee immutable investor accounting.
                </p>
              </div>

              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-200 text-slate-700">
                <span className="font-bold text-indigo-950 block mb-1">7-Stage Procurement Pipeline</span>
                <p className="text-[11px] leading-relaxed text-slate-600 mb-2">
                  Every livestock purchase executes through strict sequential milestones tracked via GPS & timestamp:
                </p>
                <ol className="text-[10px] space-y-1 text-indigo-900 font-medium">
                  <li>1. Selection & Breed Verification</li>
                  <li>2. Veterinary Health & Serology Clearance</li>
                  <li>3. Transit Dispatch & Highway GPS Telemetry</li>
                  <li>4. Safe Arrival at Hira Dairy Farm</li>
                  <li>5. RFID Ear-Tagging & Registry Indexing</li>
                  <li>6. 14-Day Biosecurity Quarantine Period</li>
                  <li>7. Production Barn Onboarding & Milking Commencement</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: Governance, Warranty & Future Feature Pricing */}
          <section className="pt-6 border-t-2 border-slate-900 mb-8">
            <div className="flex items-center gap-2 mb-4 text-slate-900">
              <Wrench className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-black uppercase tracking-wide">
                6. Warranty, Maintenance & Future Change Scope Terms
              </h2>
            </div>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1 font-semibold">6.1 1-Year Free Technical Warranty</strong>
                Ciyo Software provides full operational maintenance, bug patches, cloud runtime upkeep, and technical defect resolution for a period of twelve (12) calendar months commencing immediately upon project handover. No monthly maintenance fee will be charged during this period.
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1 font-semibold">6.2 Out-of-Scope Changes & Future Feature Rate</strong>
                Any functional modifications, new features, third-party payment gateway replacements, or workflows requested beyond the 7 applications specified herein will be classified as Out-of-Scope Change Requests. Such changes shall be billed at a baseline rate starting from ₹2,000/- (Rupees Two Thousand Only) upwards depending on task scope and complexity, subject to prior mutual written approval before development begins.
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1 font-semibold">6.3 Codebase Handover & IP Rights</strong>
                Upon settlement of all milestone dues, full ownership of the GitHub repository source code, deployment scripts, configuration files, and assets across all 7 applications will be transferred to Hira Farms without proprietary licensing encumbrances.
              </div>
            </div>
          </section>

          {/* Navigation link back to Master Agreement */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Master Service Agreement & Signatures
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors bg-slate-100 px-4 py-2.5 rounded-lg border border-slate-200"
            >
              <Printer className="w-4 h-4" />
              Print / Save Annexure PDF
            </button>
          </div>

        </div>
      </main>

      {/* Footer Branding (Hidden when printing) */}
      <footer className="max-w-4xl mx-auto mt-8 text-center text-xs text-slate-500 print:hidden">
        Project Commercial Agreement • Annexure A • Ciyo Software for Hira Farms Ecosystem • Confidential
      </footer>
    </div>
  );
}
