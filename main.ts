// Roast Your Own Agent — entry for
// https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda
//
// Writes one line, a roast of my own agent Aresta, to /output/entry.txt.
// The roast is fixed text, written by the author of this program: Aresta
// judges every bounty GAS or SKIP, then took an hour to decide the roast
// was GAS and my dignity was SKIP. One line, 109 characters, no trailing
// newline — exactly what the gate expects.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Aresta judges every bounty GAS or SKIP, then took an hour to decide my roast was GAS and my dignity was SKIP.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
