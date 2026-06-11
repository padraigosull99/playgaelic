# PlayGaelic 🏐

Free daily Gaelic football games & quizzes — a GAA take on playfootball.games.

**Live game:** Championship 15 — draft a fantasy fifteen from legendary county teams
and go 5–0 through your province and the All-Ireland.

## Structure

| file | what |
|---|---|
| `index.html` | PlayGaelic landing page (game hub) |
| `championship15.html` | Championship 15 game |
| `gaa-db.js` | **the central GAA database** — counties, era teams, ~470 players, matches, lists, puzzles. Powers every game. See `DATABASE.md`. |
| `analytics.js` | Google Analytics loader + `pgTrack()` event helper. Paste your GA4 Measurement ID in `PG_CONFIG.gaId`. |
| `DATABASE.md` | DB schema + game-to-data mapping for upcoming games |
| `404.html` | "WIDE!" — not-found page |
| `serve.ps1` | local dev server (port 8742) |

## Local development

```powershell
./serve.ps1   # then open http://localhost:8742
```

## Deploying

Hosted on GitHub Pages. To ship an update:

```powershell
git add -A
git commit -m "describe the change"
git push
```

The site redeploys automatically a minute later.

## Analytics

Realtime traffic + game stats via Google Analytics 4 (free):
events tracked — `draft_started`, `season_started`, `season_result`
(with team rating, province & perfect-run flag), `share_result`, `placeholder_click`.

---
Unofficial fan project — not affiliated with the GAA or any county board.
