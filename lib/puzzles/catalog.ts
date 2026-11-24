export type PuzzleStatus = "available" | "planned";
export type PuzzleFamily = "cube" | "tetrahedral" | "polyhedral" | "shape-mod" | "mechanical";
export interface PuzzleCatalogItem {
  id: string; name: string; family: PuzzleFamily;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string; status: PuzzleStatus; category: string; sizeLabel?: string;
}
export const puzzleCatalog: PuzzleCatalogItem[] = [
  { id: "2x2", name: "Pocket Cube", family: "cube", difficulty: "Beginner", description: "A compact cube with the same core turning feel and fewer pieces to solve.", status: "available", category: "Cubes", sizeLabel: "2 × 2" },
  { id: "3x3", name: "Rubik's Cube", family: "cube", difficulty: "Beginner", description: "The classic six-sided twisty puzzle.", status: "available", category: "Cubes", sizeLabel: "3 × 3" },
  { id: "4x4", name: "Rubik's Revenge", family: "cube", difficulty: "Intermediate", description: "A larger cube with inner layers and additional solving challenges.", status: "available", category: "Cubes", sizeLabel: "4 × 4" },
  { id: "5x5", name: "Professor's Cube", family: "cube", difficulty: "Advanced", description: "A five-layer cube with more pieces and longer solve paths.", status: "available", category: "Cubes", sizeLabel: "5 × 5" },
  { id: "pyraminx", name: "Pyraminx", family: "tetrahedral", difficulty: "Beginner", description: "A tetrahedral puzzle built around four corner tips and rotating layers.", status: "planned", category: "Tetrahedral" },
  { id: "skewb", name: "Skewb", family: "tetrahedral", difficulty: "Intermediate", description: "A corner-turning puzzle with a distinctive set of diagonal axes.", status: "planned", category: "Tetrahedral" },
  { id: "megaminx", name: "Megaminx", family: "polyhedral", difficulty: "Advanced", description: "A dodecahedral puzzle with twelve faces and a deep solving challenge.", status: "planned", category: "Polyhedral" },
  { id: "mirror-cube", name: "Mirror Cube", family: "shape-mod", difficulty: "Advanced", description: "A shape-mod cube that changes silhouette as its layers turn.", status: "planned", category: "Shape mods" },
  { id: "windmill", name: "Windmill Cube", family: "shape-mod", difficulty: "Expert", description: "An offset-cut cube that becomes an irregular shape when scrambled.", status: "planned", category: "Shape mods" },
  { id: "gear-cube", name: "Gear Cube", family: "mechanical", difficulty: "Advanced", description: "Interlocking gear mechanics make each turn affect neighboring pieces.", status: "planned", category: "Mechanical" },
];
export const availableCubeSizes = [2, 3, 4, 5] as const;
