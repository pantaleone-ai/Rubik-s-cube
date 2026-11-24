import Link from "next/link";
const steps = [
  { number: "01", title: "Learn the notation", body: "R, L, U, D, F and B describe the six faces. An apostrophe means counter-clockwise; a 2 means a half turn." },
  { number: "02", title: "Understand the pieces", body: "Corners have three visible stickers, edges have two, and centers define each face. On larger cubes, center and edge pairing add new stages." },
  { number: "03", title: "Practice controlled turns", body: "Start with one face turn at a time. Watch how a layer moves, then reverse it to return to the previous state." },
  { number: "04", title: "Build repeatable sequences", body: "An algorithm is a fixed sequence of moves. Practice slowly, keep the cube orientation consistent, and focus on the pieces each move affects." },
];
export default function LearnPage() {
  return <main className="min-h-dvh bg-[#070b12] px-5 py-8 text-white sm:px-8 sm:py-12">
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">TWIST<span className="ml-2 text-white/35">Puzzle Studio</span></Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs">
          <Link href="/" className="rounded-full px-3 py-2 text-white/60 hover:bg-white/10">Play</Link>
          <Link href="/explore" className="rounded-full px-3 py-2 text-white/60 hover:bg-white/10">Explore</Link>
          <span aria-current="page" className="rounded-full bg-white px-3 py-2 font-semibold text-black">Learn</span>
        </nav>
      </div>
      <section className="mt-16 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Learn to solve</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Understand the moves.</h1>
        <p className="mt-4 text-sm leading-6 text-white/55">A clear starting point for learning twisty puzzles. Interactive step-by-step algorithms will be added with each puzzle engine.</p>
      </section>
      <section className="mt-10 space-y-3">{steps.map((step) => <article key={step.number} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[64px_1fr] sm:p-6">
        <span className="text-sm font-semibold tabular-nums text-white/30">{step.number}</span>
        <div><h2 className="text-base font-semibold">{step.title}</h2><p className="mt-2 text-sm leading-6 text-white/50">{step.body}</p></div>
      </article>)}</section>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="rounded-xl bg-white px-4 py-3 text-xs font-semibold text-black transition hover:bg-white/90">Practice on the cube</Link>
        <Link href="/explore" className="rounded-xl border border-white/15 px-4 py-3 text-xs font-medium text-white/75 transition hover:bg-white/10">Browse puzzles</Link>
      </div>
    </div>
  </main>;
}
