# Twist Puzzle Studio — Product Roadmap

> GitHub Issues are disabled for this repository (GitHub API returned HTTP 410). Enable Settings → General → Features → Issues to turn these workstreams into issues.

## Feature group 01 — Puzzle engine and cube foundation
- [ ] Correct NxN outer-layer selection for all six faces, including even dimensions.
- [ ] Keep logical cube state as the source of truth after animated moves.
- [ ] Add deterministic state-transition and inverse-move tests.
- [ ] Separate puzzle metadata, move rules, scramble generation and renderers behind a registry.

## Feature group 02 — New puzzle families
- [ ] Pyraminx: tetrahedral geometry, legal tip/layer turns, notation and scrambles.
- [ ] Skewb: corner-axis turns, correct permutations and scrambles.
- [ ] Megaminx: dodecahedral geometry, twelve face turns and notation.
- [ ] Shape mods: Mirror Cube and Windmill Cube.
- [ ] Mechanical puzzles: Gear Cube, then Square-1 / Curvy Copter after engine validation.

## Feature group 03 — Play sessions
- [ ] Inspection / ready / running / stopped solve timer.
- [ ] Move history, undo/redo and algorithm replay.
- [ ] Puzzle-specific local solve records and personal bests.
- [ ] Keyboard and touch controls with accessible focus states.

## Feature group 04 — Product experience
- [ ] Explore catalog with search, family filters and difficulty.
- [ ] Dedicated play routes for each puzzle ID.
- [ ] Responsive desktop workspace and mobile bottom-sheet controls.
- [ ] shadcn/ui primitives and Tailwind design tokens.
- [ ] Empty, loading, error and reduced-motion states.

## Feature group 05 — Learn and challenges
- [ ] Puzzle-specific notation guides.
- [ ] Step-by-step algorithms with play, pause, previous/next and piece highlighting.
- [ ] Curated and daily scramble challenges.
- [ ] Local personal bests and reproducible challenge seeds.

## Feature group 06 — Puzzle creator
- [ ] Configurable cube dimensions, palettes and display options.
- [ ] Validate custom configurations before rendering.
- [ ] URL-safe save/share format.
- [ ] Extend creator only to puzzle families with stable move engines.

## Delivery order
1. Make NxN cube moves correct and testable.
2. Establish the registry and engine contracts.
3. Ship Pyraminx and Skewb as the first non-cube geometry.
4. Add Megaminx after the polyhedral renderer is proven.
5. Add timer/history and the responsive app shell.
6. Add learning, challenges and creator once move replay is stable.

## Technical constraints
- Keep Next.js App Router, React, TypeScript, Tailwind v4, React Three Fiber and Three.js.
- Keep 3D render-loop state isolated from broad React state updates.
- Keep puzzle-specific geometry and move legality inside each puzzle module.
- No Cloudflare dependency for the initial roadmap.
