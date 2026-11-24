import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Texted my grandma 'I love you, Grandma' — autocorrect sent 'I love you, Grandpa.' She's giving him the silent treatment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
