"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  FileSignature,
  Calendar,
  ShieldCheck,
  Building2,
  Database,
  Smartphone,
  Globe,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50/20 to-slate-200/60 py-10 px-4 print:bg-white print:p-0 text-slate-800 font-sans antialiased">
      {/* Floating Action Bar (Hidden when printing) */}
      <div className="fixed top-6 right-6 flex items-center gap-3 print:hidden z-50">
        <Link
          href="/annexure"
          className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200 shadow-md text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-600" />
          View Annexure
        </Link>
        <div className="hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/80 shadow-sm text-xs font-semibold text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Ready for Signature
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2.5 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 hover:from-slate-800 hover:to-emerald-900 text-white px-5 py-2.5 rounded-full shadow-lg shadow-slate-900/20 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          Save as PDF / Print
        </button>
      </div>

      {/* Main Agreement Paper Canvas */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-300/40 border border-slate-200/80 overflow-hidden print:shadow-none print:border-none print:rounded-none print:p-0 print:max-w-none">
        
        {/* Top Decorative Gradient Accent Ribbon */}
        <div className="h-3 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 print:hidden" />

        <div className="p-8 sm:p-12 print:p-0">
          
          {/* Document Header & Metadata Bar */}
          <header className="border-b border-slate-200 pb-8 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  CONFIDENTIAL & LEGALLY BINDING
                </span>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                  REF: HF-CIYO-MSA-2026
                </span>
              </div>
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Date: October 2026
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase leading-snug">
              Project Commercial Proposal & Delivery Agreement
            </h1>
            <p className="mt-2 text-sm text-slate-600 font-normal">
              Master Service Agreement for the turnkey design, full-stack engineering, and cloud deployment of the <strong className="text-emerald-900 font-semibold">Hira Dairy Farm Multi-App Ecosystem</strong>.
            </p>
          </header>

          {/* Parties Involved Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* Service Provider */}
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 p-5 rounded-xl border border-slate-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl -mr-6 -mt-6"></div>
              <div className="flex items-center gap-2.5 mb-2.5 text-indigo-900 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-indigo-600" />
                Service Provider
              </div>
              <p className="font-extrabold text-base text-slate-900">Ciyo Enterprises</p>
              <p className="text-sm font-medium text-indigo-700 mt-0.5">Software Engineering Division: Ciyo Software</p>
              <p className="text-xs text-slate-500 mt-2">Specializing in Full-Stack Distributed Platforms, AWS Cloud Architecture & Cross-Platform Mobile Applications.</p>
            </div>

            {/* Client Entity */}
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 p-5 rounded-xl border border-slate-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-6 -mt-6"></div>
              <div className="flex items-center gap-2.5 mb-2.5 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Client Entity
              </div>
              <p className="font-extrabold text-base text-slate-900">Hira Farms</p>
              <p className="text-sm font-medium text-emerald-700 mt-0.5">Commercial Livestock & Dairy Farm Operations</p>
              <p className="text-xs text-slate-500 mt-2">[Corporate Office / Dairy Farm Complex Registration Details Here]</p>
            </div>
          </section>

          {/* Project Highlights Matrix Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">Total Fixed Contract</span>
              <div className="text-2xl font-black text-white">₹70,000 <span className="text-xs font-normal text-slate-300">INR</span></div>
              <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Milestone-Gated
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-4 sm:p-5 rounded-xl shadow-sm border border-emerald-900">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 block mb-1">Delivery Cadence</span>
              <div className="text-2xl font-black text-white">8 Weeks</div>
              <div className="mt-2 text-xs font-semibold text-teal-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Demos Every Monday
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white p-4 sm:p-5 rounded-xl shadow-sm border border-indigo-950">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 block mb-1">Architecture Scope</span>
              <div className="text-2xl font-black text-white">7 Applications</div>
              <div className="mt-2 text-xs font-semibold text-indigo-300 flex items-center gap-1">
                <Database className="w-3.5 h-3.5" />
                AWS Lambda + MongoDB
              </div>
            </div>
          </section>

          {/* Project Scope Component Cards */}
          <section className="mb-10 text-sm">
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-3.5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-600" />
              Comprehensive Technical Scope (7 Dedicated Applications)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {/* Web Frontends */}
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-bold text-indigo-900 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  Next.js Web (x3)
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="font-medium">• <span className="font-semibold text-slate-900">admin-frontend:</span> Farm & Finance Console</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">marketplace-frontend:</span> Unit Catalog & Order Flow</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">performance-frontend:</span> Milk & P&L Portal</li>
                </ul>
              </div>

              {/* Mobile Apps */}
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  React Native Expo (x3)
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="font-medium">• <span className="font-semibold text-slate-900">admin-mobile:</span> Rapid Milk & Vet Logger</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">marketplace-mobile:</span> Animal Shopping & UPI/Cards</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">performance-mobile:</span> Investor Daily Tracker</li>
                </ul>
              </div>

              {/* Backend & Cloud */}
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wide block mb-2 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-amber-600" />
                  Cloud & Database (x1)
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="font-medium">• <span className="font-semibold text-slate-900">hira-farms-backend:</span> Node/Express AWS Lambda</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">MongoDB Atlas:</span> M0 Free Tier Optimization</li>
                  <li className="font-medium">• <span className="font-semibold text-slate-900">AWS S3:</span> KYC, Vet Passports & Milestone Storage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Milestone Breakdown & Payment Schedule */}
          <section className="mb-10 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                Milestone Breakdown & Payment Schedule
              </h3>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 self-start sm:self-auto">
                Weekly Deliverables on Mondays • Extends up to 8 Weeks
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              To safeguard both parties and maintain strict accountability, milestone progress demonstrations are formally submitted on <strong className="text-slate-900">every Monday</strong> across the 8-week cycle, with payments released in synchronization with verified criteria.
            </p>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5 font-bold">Phase</th>
                    <th className="p-3.5 font-bold">Milestone & Deliverables</th>
                    <th className="p-3.5 font-bold">Estimated Time to Complete</th>
                    <th className="p-3.5 font-bold text-right">Amount (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-xs">
                  
                  {/* Phase 0 */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-blue-50 text-blue-700 border border-blue-200">
                        Phase 0
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        UI Design Validation & Agreement Sign-Off
                      </span>
                      Walkthrough of initial UI layout samples/prototypes; Execution of Master Service Agreement (MSA).
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        Week 1 (Mon, W1)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Initial Architecture & Scope Lock</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹2,500</td>
                  </tr>

                  {/* Phase 1 */}
                  <tr className="hover:bg-slate-50/70 transition-colors bg-slate-50/30">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-violet-50 text-violet-700 border border-violet-200">
                        Phase 1
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        Database Architecture & Backend API Foundation
                      </span>
                      MongoDB collections setup; AWS Lambda Express backend initialized; Auth & CRUD APIs staged.
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        Week 2 (Mon, W2)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Backend Staging & Mongo Collections</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹15,000</td>
                  </tr>

                  {/* Phase 2 */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-cyan-50 text-cyan-700 border border-cyan-200">
                        Phase 2
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        Next.js Web Ecosystem (3 Web Apps)
                      </span>
                      Integration of Admin, Marketplace, and Performance Web portals with live staging backend API.
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        Weeks 3 – 4 (Mon, W3 & W4)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Weekly Demos Every Monday</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹17,500</td>
                  </tr>

                  {/* Phase 3 */}
                  <tr className="hover:bg-slate-50/70 transition-colors bg-slate-50/30">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Phase 3
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        React Native Mobile Ecosystem (3 Mobile Apps)
                      </span>
                      Cross-platform build of Admin/Farm Operations App, Marketplace App, and Performance Mobile App.
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        Weeks 5 – 6 (Mon, W5 & W6)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Weekly Demos Every Monday</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹17,500</td>
                  </tr>

                  {/* Phase 4 */}
                  <tr className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-amber-50 text-amber-700 border border-amber-200">
                        Phase 4
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        System Integration & End-to-End Workflow Verification
                      </span>
                      End-to-end testing linking mobile inputs (milk yield/transit logs) to web portals and investor P&L statements.
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        Week 7 (Mon, W7)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Full Loop Integration Testing</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹10,000</td>
                  </tr>

                  {/* Phase 5 */}
                  <tr className="hover:bg-slate-50/70 transition-colors bg-emerald-50/20">
                    <td className="p-3.5 font-bold align-top">
                      <span className="inline-block px-2 py-0.5 rounded font-extrabold text-[11px] bg-emerald-600 text-white">
                        Phase 5
                      </span>
                    </td>
                    <td className="p-3.5 align-top">
                      <span className="font-bold text-slate-900 text-sm block mb-1">
                        Production Deployment & Final Asset Handover
                      </span>
                      Deployment to client’s production environment; Full repository transfer; Handover of documentation & credentials.
                    </td>
                    <td className="p-3.5 align-top">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600 text-white font-semibold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        Week 8 (Mon, W8 Handover)
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">Final Repo & Credentials Clearance</span>
                    </td>
                    <td className="p-3.5 text-right font-black text-slate-900 text-sm align-top">₹7,500</td>
                  </tr>

                </tbody>
                <tfoot className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white">
                  <tr>
                    <td colSpan={3} className="p-4 text-right font-bold text-xs uppercase tracking-wider text-slate-300">
                      Total Fixed Contract Value
                    </td>
                    <td className="p-4 text-right font-black text-lg text-emerald-400">
                      ₹70,000
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          {/* Commercial Terms & Developer Protection Clauses */}
          <section className="mb-14 text-sm">
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Commercial Terms & Developer Protection Clauses
            </h3>
            
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3.5 rounded-lg border-l-4 border-indigo-600 bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">1. Staging Environment Isolation</span>
                All reviews for Phases 1 through 4 will occur exclusively on Ciyo Software's staging environments, Vercel preview URLs, and Expo testing builds. No code or production instances will be deployed directly to client servers prior to Phase 5 clearance.
              </div>

              <div className="p-3.5 rounded-lg border-l-4 border-emerald-600 bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">2. Timeline & Monday Progress Cadence</span>
                The project adheres to an 8-week delivery plan with milestone progress demonstrations provided on every Monday. The estimated 8-week timeline is contingent on timely payment processing (within 3 business days of milestone completion) and client-provided infrastructure access (AWS credentials, MongoDB Atlas, API keys). Delays in these provisions will proportionally shift the delivery schedule.
              </div>

              <div className="p-3.5 rounded-lg border-l-4 border-teal-600 bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">3. Defined Milestone Acceptance</span>
                Each milestone review is strictly evaluated against functional criteria defined in the initial requirement documents. Milestone approvals cannot be withheld due to cosmetic preference changes or new features outside the initial scope.
              </div>

              <div className="p-3.5 rounded-lg border-l-4 border-amber-600 bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">4. Change Request Procedure</span>
                Any requirements not explicitly captured in the initial documentation will be evaluated as out-of-scope. A separate addendum with independent pricing and timeline impacts will be issued before implementation.
              </div>

              <div className="p-3.5 rounded-lg border-l-4 border-rose-600 bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">5. Intellectual Property & Code Title</span>
                100% of the source code, database structures, configurations, and intellectual property remain the exclusive property of Ciyo Enterprises until the final invoice of ₹7,500 is settled in full. Full ownership transfer and repository rights will be handed over immediately upon final clearance.
              </div>

              <div className="p-3.5 rounded-lg border-l-4 border-emerald-600 bg-emerald-50/40 border border-emerald-200">
                <span className="font-bold text-emerald-950 block mb-0.5">6. 1-Year Post-Handover Maintenance & Future Feature Support</span>
                Maintenance will be provided up to 1 (one) year after the handover. No fee will be taken up. If any new development or features needed to be added, then an additional fee of ₹2,000/- to appropriate value based on scope and complexity will be taken.
              </div>
            </div>
          </section>

          {/* Execution & Signatures Section */}
          <section className="pt-8 border-t-2 border-slate-900">
            <div className="flex items-center gap-2 mb-6 text-slate-900">
              <FileSignature className="w-5 h-5 text-emerald-700" />
              <h3 className="text-base font-black uppercase tracking-wide">Execution & Formal Signatures</h3>
            </div>

            <p className="text-xs text-slate-600 mb-6 italic">
              IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date written below, agreeing to the 8-week timeline, Monday review cadence, technical scope, maintenance provisions, and milestone payment schedule defined herein.
            </p>

            {/* Annexure Mandatory Review Notice */}
            <div className="mb-8 p-3.5 bg-amber-50/90 border border-amber-200/90 rounded-xl text-center text-xs text-amber-900 font-medium shadow-xs">
              (There is an{" "}
              <Link
                href="/annexure"
                className="underline font-bold text-emerald-800 hover:text-emerald-950 underline-offset-2 decoration-emerald-700 decoration-1.5 transition-colors"
              >
                annexure
              </Link>{" "}
              document attached, kindly go through before signing)
            </div>

            {/* Stacked Vertical Signatures Layout - One Full Row Per Party */}
            <div className="space-y-6 flex flex-col">

              {/* Row 1: Service Provider - Ciyo Enterprises (Seal Removed) */}
              <div className="w-full bg-slate-50/70 p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-widest block mb-0.5">For Service Provider</span>
                    <p className="font-bold text-slate-900 text-sm">Ciyo Enterprises (Ciyo Software)</p>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium italic">Lead Engineering & Architecture Provider</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-8">
                    <div className="border border-slate-300 border-dashed rounded-lg h-28 flex items-center justify-center bg-white relative">
                      <span className="text-[11px] text-slate-400 font-medium absolute top-2 left-3">Authorized Signatory</span>
                      <span className="text-slate-300 font-serif italic text-2xl select-none">Ciyo Software</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 space-y-3 text-xs text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Name:</span>
                      <input
                        type="text"
                        defaultValue="Authorized Signatory"
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0 font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Date:</span>
                      <input
                        type="date"
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Client Entity - Hira Farms (Partner 1) */}
              <div className="w-full bg-slate-50/70 p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-0.5">For Client Entity</span>
                    <p className="font-bold text-slate-900 text-sm">Hira Farms (Partner 1)</p>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium italic">Project Commercial Execution & Oversight</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-8">
                    <div className="border border-slate-300 border-dashed rounded-lg h-28 flex items-center justify-center bg-white relative">
                      <span className="text-[11px] text-slate-400 font-medium absolute top-2 left-3">Partner 1 Signature</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 space-y-3 text-xs text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Name:</span>
                      <input
                        type="text"
                        placeholder="Partner 1 Full Name..."
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0 font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Date:</span>
                      <input
                        type="date"
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Client Entity - Hira Farms (Partner 2 & Official Seal) */}
              <div className="w-full bg-slate-50/70 p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-0.5">For Client Entity</span>
                    <p className="font-bold text-slate-900 text-sm">Hira Farms (Partner 2 & Official Entity Seal)</p>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium italic">Official Seal & Legal Counterpart Signatory</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="border border-slate-300 border-dashed rounded-lg h-28 flex items-center justify-center bg-white relative">
                      <span className="text-[11px] text-slate-400 font-medium absolute top-2 left-3 leading-tight">Partner 2 Signature</span>
                    </div>
                    <div className="border border-slate-300 border-dashed rounded-lg h-28 flex items-center justify-center bg-white relative">
                      <span className="text-[11px] text-slate-400 font-medium absolute top-2 left-3">Official Seal</span>
                      <div className="w-14 h-14 rounded-full border-2 border-emerald-300 flex items-center justify-center text-[9px] font-bold text-emerald-600 text-center uppercase tracking-tight">
                        Hira Seal
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 space-y-3 text-xs text-slate-600 bg-white p-3.5 rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Name:</span>
                      <input
                        type="text"
                        placeholder="Partner 2 Full Name..."
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0 font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 w-12">Date:</span>
                      <input
                        type="date"
                        className="border border-slate-300 rounded px-2.5 py-1 text-xs bg-white text-slate-800 flex-1 print:border-none print:p-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer Branding (Hidden when printing) */}
      <footer className="max-w-4xl mx-auto mt-8 text-center text-xs text-slate-500 print:hidden">
        Project Commercial Agreement • Generated by Ciyo Software for Hira Farms Ecosystem • Confidential
      </footer>
    </div>
  );
}