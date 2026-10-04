"""Look up Calibre book ids for titles, so owned books can link to calibre://show-book/.

Usage: python scripts/calibre_ids.py "All the Light" "Secondhand Time"
Reads a temporary copy of metadata.db (read-only; never touches the library).
"""
import shutil, sqlite3, sys, tempfile, os

LIB = os.environ.get("CALIBRE_LIBRARY", r"C:\Users\amita\OneDrive\Books\CalibreLibrary")

def main(terms):
    tmp = os.path.join(tempfile.gettempdir(), "calibre-metadata-copy.db")
    shutil.copyfile(os.path.join(LIB, "metadata.db"), tmp)
    try:
        con = sqlite3.connect(tmp)
        for t in terms:
            rows = con.execute(
                "select b.id, b.title, b.author_sort from books b where b.title like ? order by b.id",
                (f"%{t}%",)).fetchall()
            for r in rows or [("-", f"(no match for {t!r})", "")]:
                print(f"{r[0]}\t{r[1]}\t{r[2]}")
        con.close()
    finally:
        os.remove(tmp)

if __name__ == "__main__":
    main(sys.argv[1:] or ["All the Light"])
