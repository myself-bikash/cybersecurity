"use client";

import { useState } from "react";

type IconName = "activity" | "shield" | "lock" | "arrow" | "check" | "globe" | "server";

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "activity":
      return <svg {...shared}><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>;
    case "shield":
      return <svg {...shared}><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "lock":
      return <svg {...shared}><rect width="14" height="11" x="5" y="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></svg>;
    case "arrow":
      return <svg {...shared}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case "check":
      return <svg {...shared}><path d="m5 12 4 4L19 6" /></svg>;
    case "globe":
      return <svg {...shared}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>;
    case "server":
      return <svg {...shared}><rect width="18" height="7" x="3" y="3" rx="2" /><rect width="18" height="7" x="3" y="14" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" /></svg>;
  }
}

const features = [
  {
    icon: "activity" as const,
    title: "Real-time monitoring",
    description:
      "Bring network, cloud, and endpoint signals into one clear operational view. Surface meaningful changes without drowning teams in noise.",
    label: "Observe",
  },
  {
    icon: "shield" as const,
    title: "Automated compliance",
    description:
      "Map evidence to your control framework, track gaps, and keep audit work connected to the systems and owners responsible.",
    label: "Prove",
  },
  {
    icon: "lock" as const,
    title: "Threat isolation",
    description:
      "Move from investigation to a controlled response with explicit approvals, scoped actions, and a record of what changed.",
    label: "Respond",
  },
];

const events = {
  network: [
    { time: "14:32:08", level: "INFO", message: "Gateway health check passed", color: "text-cyan-300" },
    { time: "14:31:42", level: "WARN", message: "Unusual egress volume · edge-03", color: "text-amber-300" },
    { time: "14:30:17", level: "INFO", message: "Policy sync completed · 24 rules", color: "text-cyan-300" },
  ],
  endpoints: [
    { time: "14:32:11", level: "INFO", message: "Endpoint check-in · workstation-12", color: "text-cyan-300" },
    { time: "14:31:56", level: "WARN", message: "New process flagged for review", color: "text-amber-300" },
    { time: "14:29:03", level: "INFO", message: "Isolation policy ready · approval required", color: "text-cyan-300" },
  ],
};

const integrations = ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Okta"];

export default function SecurityPlatformHome({ demoHref }: { demoHref: string }) {
  const [activeFeed, setActiveFeed] = useState<keyof typeof events>("network");

  return (
    <div className="min-h-screen overflow-hidden bg-[#090D16] text-slate-100 selection:bg-cyan-300/30 selection:text-white">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="relative z-10 border-b border-white/[0.08]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        >
          <a href="#" className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
            <span className="grid size-9 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
              <Icon name="shield" className="size-5" />
            </span>
            <span className="text-sm font-semibold tracking-[0.12em] text-white">NORTHSTAR<span className="text-cyan-300"> / SEC</span></span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" href="#platform">Platform</a>
            <a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" href="#capabilities">Capabilities</a>
            <a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300" href="#trust">Trust</a>
          </div>

          <a
            href={demoHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-cyan-200/50 bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:border-cyan-100 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            Book a demo <Icon name="arrow" className="size-4" />
          </a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
      <section className="relative isolate px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-56 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.11] blur-[120px]" />
          <div className="absolute right-[-16rem] top-44 size-[30rem] rounded-full bg-emerald-400/[0.07] blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-200">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              Security operations, made observable
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Know what’s happening.
              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-cyan-300 to-emerald-200 bg-clip-text text-transparent">
                Act with confidence.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Connect security signals, prove control coverage, and coordinate response from one operational picture—built for teams that need evidence, not noise.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={demoHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(103,232,249,0.18)] transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Book a technical demo <Icon name="arrow" className="size-4" />
              </a>
              <a
                href="#platform"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-6 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Explore the platform
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-wide text-slate-500">NO BLACK BOXES · AUDITABLE ACTIONS · HUMAN-APPROVED RESPONSE</p>
          </div>

          <section
            id="platform"
            aria-labelledby="dashboard-title"
            className="relative mx-auto mt-16 max-w-6xl rounded-2xl border border-white/[0.12] bg-[#0D1420]/95 p-2 shadow-[0_35px_120px_rgba(0,0,0,0.48)] ring-1 ring-black/40 sm:mt-20 sm:p-3"
          >
            <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A101A]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-slate-700" />
                    <span className="size-2 rounded-full bg-slate-700" />
                    <span className="size-2 rounded-full bg-slate-700" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">northstar / operations</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-300" />
                  Illustrative demo data
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_290px]">
                <div className="min-w-0 p-4 sm:p-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300/80">Environment / production</p>
                      <h2 id="dashboard-title" className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">Security overview</h2>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">SAMPLE VIEW · 14:32 UTC</span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Systems observed", value: "08", detail: "across 3 zones", icon: "server" as const },
                      { label: "Controls mapped", value: "24", detail: "evidence current", icon: "check" as const },
                      { label: "Network state", value: "NORMAL", detail: "1 event to review", icon: "globe" as const },
                    ].map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                        <div className="flex items-center justify-between text-slate-500">
                          <span className="font-mono text-[10px] uppercase tracking-wider">{metric.label}</span>
                          <Icon name={metric.icon} className="size-4 text-cyan-300/70" />
                        </div>
                        <p className="mt-4 font-mono text-2xl font-medium tracking-tight text-slate-100">{metric.value}</p>
                        <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-medium text-slate-200">Signal volume</h3>
                        <p className="mt-1 font-mono text-[10px] text-slate-500">SYNTHETIC SAMPLE · LAST 12 HOURS</p>
                      </div>
                      <div className="flex items-center gap-4 font-mono text-[10px] text-slate-400">
                        <span className="inline-flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-cyan-300" /> Normal</span>
                        <span className="inline-flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-amber-300" /> Review</span>
                      </div>
                    </div>
                    <div aria-label="Illustrative signal volume chart" role="img" className="mt-5 flex h-28 items-end gap-1.5 sm:h-36 sm:gap-2">
                      {[32, 45, 37, 61, 52, 74, 46, 58, 68, 42, 80, 57, 48, 69, 54, 91, 62, 76, 49, 64, 42, 73, 56, 83].map((height, index) => (
                        <div key={index} className="flex h-full flex-1 items-end">
                          <span
                            className={`w-full rounded-t-sm ${index === 15 ? "bg-amber-300/75" : "bg-cyan-300/50"}`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div aria-hidden="true" className="mt-2 flex justify-between font-mono text-[9px] text-slate-600">
                      <span>02:00</span><span>06:00</span><span>10:00</span><span>14:00</span>
                    </div>
                  </div>
                </div>

                <aside aria-label="Sample event stream" className="border-t border-white/[0.08] bg-[#0C131E] p-4 sm:p-5 lg:border-l lg:border-t-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-slate-200">Event stream</h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">Sample</span>
                  </div>
                  <div className="mt-4 flex gap-1 rounded-lg bg-white/[0.04] p-1" role="group" aria-label="Choose sample event feed">
                    {(["network", "endpoints"] as const).map((feed) => (
                      <button
                        key={feed}
                        type="button"
                        aria-pressed={activeFeed === feed}
                        onClick={() => setActiveFeed(feed)}
                        className={`min-h-9 flex-1 rounded-md px-2 text-xs capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 ${
                          activeFeed === feed ? "bg-white/[0.09] text-white" : "text-slate-500 hover:text-slate-200"
                        }`}
                      >
                        {feed}
                      </button>
                    ))}
                  </div>
                  <ul aria-live="polite" className="mt-4 space-y-4">
                    {events[activeFeed].map((event) => (
                      <li key={`${event.time}-${event.message}`} className="border-l border-white/10 pl-3">
                        <div className="flex items-center gap-2 font-mono text-[9px]">
                          <time>{event.time}</time>
                          <span className={event.color}>{event.level}</span>
                        </div>
                        <p className="mt-1.5 text-xs leading-5 text-slate-400">{event.message}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-300/15 bg-amber-300/[0.05] p-3">
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-amber-300" />
                    <p className="text-[11px] leading-5 text-slate-400"><span className="text-amber-200">Review required:</span> a human confirms response actions before execution.</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="trust" aria-labelledby="trust-title" className="border-y border-white/[0.07] bg-white/[0.015] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 id="trust-title" className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Designed to fit your security stack</h2>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-slate-400 sm:gap-x-9">
                {integrations.map((name) => <span key={name}>{name}</span>)}
              </div>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Framework control mapping examples">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-slate-300">
                <Icon name="check" className="size-4 text-cyan-300" /> SOC 2 controls
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-slate-300">
                <Icon name="check" className="size-4 text-cyan-300" /> ISO 27001 mapping
              </span>
              <p className="w-full text-right text-[10px] text-slate-600">Framework references only; not a certification claim.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" aria-labelledby="capabilities-title" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">Operational clarity</p>
            <h2 id="capabilities-title" className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">From raw signals to defensible action.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">A focused workflow for teams that need to see the environment, demonstrate control, and respond without losing context.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <article key={feature.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] motion-reduce:transform-none">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-300/[0.07] text-cyan-200">
                    <Icon name={feature.icon} className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-slate-600">0{index + 1} / {feature.label.toUpperCase()}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
                <div aria-hidden="true" className="absolute -bottom-16 -right-10 size-36 rounded-full bg-cyan-300/[0.035] blur-2xl transition group-hover:bg-cyan-300/[0.08]" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-title" className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-cyan-200/15 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.10),transparent_45%),linear-gradient(120deg,rgba(15,23,42,0.9),rgba(12,20,30,0.95))] p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300">See the system in context</p>
            <h2 id="contact-title" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Bring your hardest operational question.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Walk through your use case with a security engineer. No generic slide deck, and no claim that one platform replaces your team’s judgment.</p>
          </div>
          <a href={demoHref} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
            Book a demo <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </section>
      </main>

      <footer className="border-t border-white/[0.07] px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono tracking-wider">NORTHSTAR / SEC</span>
          <p>Illustrative interface concept. Wire demoHref and replace the sample data before publishing.</p>
        </div>
      </footer>
    </div>
  );
}
