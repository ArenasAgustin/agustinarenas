/**
 * Patches @kindspells/astro-shield for Windows path compatibility.
 * Applied via postinstall — replaces unreliable .patch file on Windows.
 */
import { readFileSync, writeFileSync, realpathSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
// realpathSync follows junctions/symlinks to the actual file in the pnpm store
const target = realpathSync(resolve(root, "node_modules/@kindspells/astro-shield/dist/core.mjs"));

let content = readFileSync(target, "utf-8");

// Fix 1: path.resolve with leading slash fails on Windows — strip the leading slash instead of prepending "."
const fix1Old = 'const G = o?.config.base ?? "", he = w.startsWith(G) ? w.replace(G, "") : w, de = O(e, `.${he}`);';
const fix1New = 'const G = o?.config.base ?? "", he = w.startsWith(G) ? w.replace(G, "") : w, de = O(e, he.startsWith("/") ? he.slice(1) : he);';

if (!content.includes(fix1Old)) {
  if (content.includes(fix1New)) {
    console.log("patch-astro-shield: fix1 already applied, skipping.");
  } else {
    console.warn("patch-astro-shield: fix1 target not found — skipping (version mismatch?).");
  }
} else {
  content = content.replace(fix1Old, fix1New);
  console.log("patch-astro-shield: fix1 applied.");
}

// Fix 2: dynamic import of absolute Windows paths requires file:// protocol
const fix2Old = `      /* @vite-ignore */
      s
    );`;
const fix2New = `      /* @vite-ignore */
      process.platform === "win32" && /^[A-Za-z]:/.test(s) ? \`file:///\${s.replace(/\\\\/g, "/")}\` : s
    );`;

if (!content.includes(fix2Old)) {
  if (content.includes("process.platform")) {
    console.log("patch-astro-shield: fix2 already applied, skipping.");
  } else {
    console.warn("patch-astro-shield: fix2 target not found — skipping (version mismatch?).");
  }
} else {
  content = content.replace(fix2Old, fix2New);
  console.log("patch-astro-shield: fix2 applied.");
}

writeFileSync(target, content, "utf-8");
console.log("patch-astro-shield: done.");
