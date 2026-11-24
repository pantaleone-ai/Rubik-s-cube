"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { puzzleCatalog, type PuzzleFamily } from "../../lib/puzzles/catalog";
const filters: { label: string; value: "all" | PuzzleFamily }[] = [
  { label: "All puzzles", value: "all" }, { label: "Cubes", value: "cube" },
  { label: "Tetrahedral", value: "tetrahedral" }, { label: "Polyhedral", value: "polyhedral" },
  { label: "Shape mods", value: "shape-mod" }, { label: "Mechanical", value: "mechanical" },
];
export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<(typeof filters)[number]["value"]>("all");
  const puzzles = useMemo(() => puzzleCatalog.filter((puzzle) => {
    const matchesFamily = family === "all" || puzzle.family === family;
    const text = `${puzzle.name} ${puzzle.description} ${puzzle.category}`.toLowerCase();
    return matchesFamily && text.includes(query.toLowerCase().trim());
  }), [family, query]);
  return <main className="min-h-dvh bg-[#070b12] px-5 py-8 text-white sm:px-8 sm:py-12">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">TWIST<span className="ml-2 text-white/35">Puzzle Studio</span></Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs">
          <Link href="/" className="rounded-full px-3 py-2 text-white/60 hover:bg-white/10">Play</Link>
          <span aria-current="page" className="rounded-full bg-white px-3 py-2 font-semibold text-black">Explore</span>
          <Link href="/learn" className="rounded-full px-3 py-2 text-white/60 hover:bg-white/10">Learn</Link>
        </nav>
      </div>
      <section className="mt-14 max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Puzzle library</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Find your next puzzle.</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/55">Start with the classic cube family, then explore tetrahedral, polyhedral, shape-mod and mechanical puzzles as they are added.</p>
      </section>
      <section className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="block w-full sm:max-w-sm"><span className="sr-only">Search puzzles</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search puzzles..." className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm outline-none transition placeholder:text-white/30 focus:border-white/30" />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Filter by puzzle family">
          {filters.map((filter) => <button key={filter.value} type="button" onClick={() => setFamily(filter.value)} aria-pressed={family === filter.value} className={family === filter.value ? "rounded-full bg-white px-3 py-2 text-xs font-semibold text-black" : "rounded-full border border-white/10 px-3 py-2 text-xs text-white/60 transition hover:bg-white/10"}>{filter.label}</button>)}
        </div>
      </section>
      <div className="mt-8 flex items-center justify-between text-xs text-white/40"><span>{puzzles.length} puzzles</span><span>Available now and on the roadmap</span></div>
      <section className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {puzzles.map((puzzle) => <article key={puzzle.id} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/20 hover:bg-white/[0.055]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-lg font-semibold text-white/75">{puzzle.sizeLabel?.replaceAll(" ", "") ?? puzzle.name.slice(0, 2).toUpperCase()}</div>
            <span className={puzzle.status === "available" ? "rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300" : "rounded-full bg-white/[0.07] px-2.5 py-1 text-[10px] font-medium text-white/45"}>{puzzle.status === "available" ? "Available" : "Planned"}</span>
          </div>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">{puzzle.category} · {puzzle.difficulty}</p>
          <h2 className="mt-2 text-lg font-semibold">{puzzle.name}</h2>
          <p className="mt-2 min-h-12 text-sm leading-6 text-white/50">{puzzle.description}</p>
          {puzzle.status === "available" ? <Link href="/" className="mt-5 inline-flex items-center text-xs font-semibold text-white underline-offset-4 hover:underline">Play now <span aria-hidden="true" className="ml-1">↗</span></Link> : <span className="mt-5 inline-flex text-xs text-white/35">In the roadmap</span>}
        </article>)}
      </section>
      {puzzles.length === 0 && <p className="mt-12 rounded-xl border border-dashed border-white/15 p-8 text-center text-sm text-white/45">No puzzles match that search. Try another term or family.</p>}
    </div>
  </main>;
}
