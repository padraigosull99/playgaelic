# PlayGaelic rating scale (v2 — deflated, June 2026)

One scale for every player in `gaa-db.js`. A 78 on Leitrim '94 means the same
as a 78 on Kerry '05. Hard ceiling **95**.

## The rubric

| Band | Meaning | Budget |
|---|---|---|
| **95** | GOAT tier — the "greatest ever" argument | exactly 7: D. Clifford, C. Cooper, J. O'Shea, P. Spillane, P. Canavan, M. Sheehy, S. Cluxton |
| **90–94** | Generational — defined an era, carried teams to Sams | ~7 league-wide (Fenton, M. Murphy, Keegan, Tohill, Giles, Matt Connor, Seán O'Neill) |
| **85–89** | Elite county stars — All-Star winners, the best man on a great team | 1–3 per tier-1 team |
| **80–84** | Strong county regulars; the standout on a weaker county | bulk of tier-1/2 squads |
| **75–79** | Solid county starters | bulk of tier-2/3 squads |
| **70–74** | Fringe starters on weaker counties | floor |

## Anchors (sanity-check new ratings against these)

- David Clifford **95** (ceiling) · Conor Glass **88** · Michael Murphy **91**
- Lee Keegan **90** · Shane McGuigan **87** · Sam Mulroy **83** · Craig Lennon **81**
- Dessie Dolan **83** · typical underdog-team starter **74–78**

## The deflation curve (old scale → new scale, applied 2026-06-12)

Order-preserving: `old ≤ 84 → old − 3`, then a compressed top:
85→82 · 86→83 · 87→83 · 88→84 · 89→85 · 90→86 · 91→87 · 92→88 · 93→88 ·
94→89 · 95→89 · 96→90 · 97→90 · 98→91 · 99→92, with GOAT (95) and
generational (90–91) overrides hand-applied after.

## Hurling (`hurling-db.js`) — same scale, separate anchors

Identical bands and 95 ceiling. Hurling anchors:

- Henry Shefflin **95** (the lone hurling GOAT — hurling's Clifford)
- Generational **90–94**: Joe Canning 91 · TJ Reid 91 · Cian Lynch 90 · Aaron Gillane 90 · Tony Kelly 90
- Elite **85–89**: Brian Whelahan 89 · Tommy Walsh / JJ Delaney 88 · Eoin Kelly (Tipp) 88 · Brian Corcoran 87 · Joe Deane 87 · John Mullane 87 · Daithí Burke 87
- Dynasty team average (Kilkenny, Limerick) ≈ 85–86; one-AI team ≈ 82; weaker county (Antrim, Kerry) ≈ 77–78

**Every hurling team is built from a verified All-Ireland final team sheet** (`[V]` in the file).
Clubs are only filled where confirmed — never guessed. When adding a team, pull the
real starting 15 from the Wikipedia final page first, then rate on the rubric.

## Maintaining it

1. **Adding a player/team**: rate on the rubric above, then compare with two
   anchors of similar stature. New teams: most players 74–80, one standout 82–85.
2. **Moving an anchor**: shift players of the same band by the same offset,
   then re-run the validator.
3. **Validator**: open `validate.html` in a browser (or the local server).
   It flags: any rating >95, >3 players ≥88 on one team, team averages above
   tier ceilings, duplicate names within a team, teams missing a GK, and
   prints the global distribution.
