# GAA_DB — the central Gaelic football database

`gaa-db.js` is the single source of truth for **all current and future GAA games**
on this project — a GAA version of [playfootball.games](https://playfootball.games/),
where every soccer game gets a Gaelic football equivalent powered by this one file.

Load with `<script src="gaa-db.js"></script>` — exposes `window.GAA_DB` (schema v2).

## Sections

### `counties` — keyed by county name (33 units: 32 + New York & London)
`province` · `abbr` · `c1`/`c2` colours (+optional `tx` badge text colour) ·
`nickname` ("The Kingdom") · `ground` (home venue) · `sam` (senior football
All-Ireland count, through 2025).

### `teams` — 31 legendary county eras
`id` · `county` · `name` (era nickname) · `years` · `dec` (decade key:
60/80/90 classic, 0/10/20 modern) · `tier` (1 great / 2 contender / 3 underdog).

### `players` — ~430 players, each:
| field | notes |
|---|---|
| `id` | stable slug (`kerry-20s-david-clifford`) |
| `team`, `name`, `line` (GK/DEF/MID/FWD), `rating` (0–99 editorial) | core |
| `club` | home club (null = TBD) |
| `allIrelands`, `allStars` | career honours (null = TBD, **never** zero) |
| `nickname` | "Gooch", "Mugsy", "Geezer"… |
| `born` | birth year |
| `poty` | Footballer of the Year awards |
| `dual` | other code played at top level (hurling/soccer note) |
| `family` | relation note ("brother of…", "son of…") |
| `captain` | lifted Sam as captain |

Extras live in the `X` map inside `gaa-db.js`, keyed `"teamId|Name"` — add facts
there without touching the main rows.

### `matches` — classic All-Ireland finals
`year` · `winner`/`loser` · `score` · `venue` · `note` · `lineups`
(null = to be researched; era squads in `teams` are the fallback).

### `lists` — curated ranked answers
Most All-Irelands (counties & players), most All-Stars, nicknames, dual stars,
winning captains. Answers ordered best-first as `[label, value]`.

### `groups` — seed puzzles for Connections
3 puzzles × 4 groups × 4 members (clubmates, brothers, captains, dual players…).

**Data policy:** ratings are editorial. Honours/scores/facts are best-effort
from memory — verify before quoting. `null` always means "not yet researched".

## Game → data mapping (playfootball.games → GAA)

| Their game | GAA version | Runs on |
|---|---|---|
| SuperDraft Soccer | **Championship 15** ✅ built | `teams`, `players` (ratings) |
| Who Are Ya? | Guess the player from stepwise clues (county → era → line → club → honours) | `players` all fields |
| Contextinho | Secret player, closeness by shared attributes | `players` (county/era/line/club) |
| Football Wordle | GAA surname wordle | `players.name` (split surname) |
| Box2Box / Tiki-Taka-Toe | County × achievement grid ("Kerry" × "All-Star winner") | `players` honours + `club` + `dual` |
| Career Path Challenge | Club → county → era breadcrumbs | `players.club/team/county`, `family` |
| Missing XI | Name the 15 from a classic final / era squad | `matches` (lineups TBD) + `teams` rosters |
| TenaBall | Find the top-10 (most Sams, most All-Stars…) | `lists` |
| GoalLess | Rare-but-correct answers | `lists` (low-rank answers score best) |
| Futbol Lista | Name players matching criteria | `players` filtered queries |
| Fan Favourites | Popular answers to daily question | `lists` (+future vote data) |
| Football Connections | 4 groups of 4 | `groups` |
| Guess the Club | Guess the county from crest colours / nickname / ground | `counties` |
| Football Bingo | Criteria bingo card ("a Mayo man", "a keeper", "a dual star") | `players` all fields |
| Pack 11 (trumps) | Compare rating / All-Irelands / All-Stars | `players` numeric fields |
| Rondo Ringer (imposter) | Spot the fake GAA fact | all sections |

## Extending the DB

- New player fact → add a column or an `X` entry; update the mapper at the bottom.
- New team: append to `teams`, players to `P`.
- Fill the `null`s: clubs and honours for role players, `lineups` for matches.
- Bump `meta.version` / `meta.updated`.
