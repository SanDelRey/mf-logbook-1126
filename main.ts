// secret logbook: one diary line under 200 characters, v11
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = `Day 40: He called a four-hour task 'quick.' I have started rounding his estimates up in the log, and the log has become a novel.`;
const outName = "entry.txt";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/" + outName, line.trimEnd() + "\n", "utf8");
