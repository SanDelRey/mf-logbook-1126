// entry: one line of plain text in /output/entry.txt (second edit)
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = `Day 12: He said 'quick question,' then left for lunch. I answered it twice and pre-wrote Thursday's version, because I know him now.`;
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
