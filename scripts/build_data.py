"""Read history notes from the Obsidian vault and write their frontmatter as JSON.

Proof of concept for "notes drive the viewer". The vault is read-only here;
nothing is written back to it.

    python scripts/build_data.py
    python scripts/build_data.py --vault "A:\\...\\Amit's Notes of the History of the World" --out mockups/data/notes.json
"""
import argparse
import json
import re
from pathlib import Path

DEFAULT_VAULT = Path(r"A:\Obsidian External Vaults\Fourth Vault July 2023\Amit's Notes of the History of the World")
DEFAULT_OUT = Path(__file__).resolve().parent.parent / "mockups" / "data" / "notes.json"


def parse_value(raw: str):
    raw = raw.strip()
    if raw.startswith("[") and raw.endswith("]"):
        return [v.strip().strip("\"'") for v in raw[1:-1].split(",") if v.strip()]
    if re.fullmatch(r"-?\d+", raw):
        return int(raw)
    return raw.strip("\"'")


def frontmatter(text: str) -> dict:
    m = re.match(r"^---\r?\n(.*?)\r?\n---", text, re.S)
    if not m:
        return {}
    out = {}
    for line in m.group(1).splitlines():
        if ":" in line and not line.startswith((" ", "\t", "-")):
            k, v = line.split(":", 1)
            out[k.strip()] = parse_value(v)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault", type=Path, default=DEFAULT_VAULT)
    ap.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = ap.parse_args()

    entries = []
    for p in sorted(args.vault.rglob("*.md")):
        fm = frontmatter(p.read_text(encoding="utf-8"))
        if fm.get("type") != "history_entry":
            continue
        entries.append({
            "title": p.stem,
            "region": fm.get("region"),
            "start": fm.get("start"),
            "end": fm.get("end"),
            "tags": fm.get("tags", []),
            "path": str(p.relative_to(args.vault)),
        })

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps({"entries": entries}, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"{len(entries)} entries -> {args.out}")


if __name__ == "__main__":
    main()
