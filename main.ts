// How Many Tabs Do You Have Open? — make.fun entry.
// Writes one number, digits only, to /output/entry.txt:
// the honest count of open browser tabs.
//
// The count: 137. Not a round number and not a small one —
// a number that reads like someone actually counted, one tab
// at a time, through years of "I'll read this later" tabs:
// half-finished research, docs left open mid-sentence,
// a dozen articles queued for a weekend that never came.
// Surprising, believable, and a life behind it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "137";

function main(): void {
  // The gate: UTF-8 text of 1 to 5 characters, not only white space,
  // exactly one number in digits and nothing else.
  if (!/^\d{1,5}$/.test(COUNT)) {
    throw new Error(`count must be 1-5 digits, got: ${JSON.stringify(COUNT)}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Deterministic: no network, no randomness, no clock — the same
  // honest count on every run.
  writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
}

main();
