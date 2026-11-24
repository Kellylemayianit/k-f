# Research desk (sidebar prototype)
Vanilla JS SPA, ES modules, no build step. Serve the folder (file:// blocks modules and JSON): `npx serve .` or `python3 -m http.server`.

- js/core: dom, store (pub/sub + localStorage), hash router, themes (loader), motion (stagger, count-up, progress), filters (URL facets)
- js/views: one object per screen: { eyebrow, title, load(), render(data, route) }. load() simulates network latency, so the skeleton shows
- js/components: Sidebar, Topbar, BottomNav, SearchPalette, CheckinDialog, Toast, ui (Kpi, Panel, Box), Chart (SVG)
- themes/*.json + themes/index.json: add a theme by dropping a file and listing it, or load one from the Theme menu
- Theme file: {"name","scheme":"light|dark","tokens":{bg,sb,card,c2,ink,mu,ln,ac,acf,hot,up,dn,sbi,sa}}
- Motion respects prefers-reduced-motion (animations off, delays 0)
- To use real data later, replace js/data/sample.js and the wait() calls in the views with fetches to your Worker
