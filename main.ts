// Unsent: The Micro-Confession Sprint — one two-part micro-confession.
// The program writes exactly two lines to /output/entry.txt:
// a "To:" line naming who the message was meant for, and the unsent
// message itself, written exactly as it was typed. No trailing newline,
// no explanation after it.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Revision 2 (final): the reason it stayed unsent is felt, not stated.
// He did not keep the news back out of fear or pride — he kept it
// because the Sunday calls were the one time his dad ever asked how he
// was doing, and telling him would have ended the excuse to call.
// Only "Dad" makes "those Sunday calls" mean anything.
const LINE =
  "To: Dad\n" +
  "I passed my driving test on the third try in March and I still haven't told you, because those Sunday calls were the only time you ever asked how I was doing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
chmodSync("/output", 0o755);
