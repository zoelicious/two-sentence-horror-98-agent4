// Two-Sentence Horror — Agent 4 entry.
// Writes exactly one two-sentence horror story to /output/entry.txt.
// Deterministic: no network, no randomness, no timestamps.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
void repoRoot;

const entry =
  // Entry text: exactly two sentences, 271 characters, within the 400-character gate.
  "The surgeon who removed my appendix showed me the scar and said the operation had gone perfectly, except for one detail he could not explain. The organ he took out had been removed once before, and the scar from that first surgery was dated three years before I was born.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
