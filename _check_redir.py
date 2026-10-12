#!/usr/bin/env python3
import subprocess, re, concurrent.futures as cf
raw = open("/root/boardgamesdb/dist/sitemap-0.xml", encoding="utf-8").read()
urls = re.findall(r"<loc>([^<]+)</loc>", raw)
print("total URLs in sitemap:", len(urls))

def chk(u):
    r = subprocess.run(
        ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}|%{redirect_url}",
         "--max-time", "20", "-A", "Mozilla/5.0", u],
        capture_output=True, text=True)
    return u, r.stdout.strip()

redir, ok, nf, err = [], [], [], []
with cf.ThreadPoolExecutor(max_workers=12) as ex:
    for u, res in ex.map(chk, urls):
        code, _, loc = res.partition("|")
        try: code = int(code)
        except: err.append((u, res)); continue
        if code in (301, 302, 307, 308):
            redir.append((u, code, loc))
        elif code == 404:
            nf.append(u)
        elif code == 200:
            ok.append(u)
        else:
            err.append((u, res))

print(f"\n200 OK: {len(ok)}")
print(f"REDIRECT (3xx): {len(redir)}")
for u, c, loc in redir[:40]:
    print(f"  {c} -> {loc}   {u}")
print(f"404: {len(nf)}")
for u in nf[:40]:
    print("  ", u)
print(f"other/err: {len(err)}")
for u, res in err[:20]:
    print("  ", u, res)