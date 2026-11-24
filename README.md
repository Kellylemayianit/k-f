# Research desk (prototype)
Vanilla JS SPA, ES modules, no build step. Serve the folder (file:// blocks module and JSON loading):

    npx serve .    # or: python3 -m http.server

- js/core: dom helpers, store (pub/sub + localStorage), hash router, filters (URL state), themes (loader)
- js/components, js/views: one function per component or screen, each returns a DOM element
- themes/*.json + themes/index.json: add a theme by dropping a file and listing it in index.json, or load one from the Theme menu
- Theme file shape: {"name","scheme":"light|dark","tokens":{"bg","pn","ink","mu","ln","ac","acf","bl","am","sel"}}
