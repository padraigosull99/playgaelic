/* ============================================================
   TENABLE — GAA "name the 10" daily quiz · question bank
   ----------------------------------------------------------
   RULE: every list MUST contain EXACTLY 10 answers (that's the
   whole point of Tenable). The engine will refuse any list that
   isn't length 10.

   Each list is a VERIFIED, definitive set — no fuzzy "top-N"
   tails where the 10th place is a tie. Counts checked against
   Wikipedia roll-of-honour / finals records (as of 2026).

   One football list + one hurling list go live each day, chosen
   deterministically from the date so everyone gets the same
   puzzle. Add more lists to lengthen the rotation.
   ============================================================ */
const TENABLE_DATA = {
  football: [
    { q:"Counties to win the All-Ireland football title since 1990",
      sub:"Sam Maguire winners, 1990–present",
      answers:["Kerry","Dublin","Cork","Down","Donegal","Derry","Meath","Galway","Armagh","Tyrone"] },

    { q:"Counties to reach an All-Ireland football final since 2001",
      sub:"Winners and runners-up, 2001–present",
      answers:["Dublin","Kerry","Mayo","Tyrone","Galway","Donegal","Cork","Down","Armagh","Meath"] }
  ],

  hurling: [
    { q:"The 10 most successful hurling counties of all time",
      sub:"By All-Ireland senior hurling titles won",
      answers:["Kilkenny","Cork","Tipperary","Limerick","Dublin","Wexford","Galway","Clare","Offaly","Waterford"] },

    { q:"Counties to reach an All-Ireland hurling final since 1989",
      sub:"Winners and runners-up, 1989–present",
      answers:["Kilkenny","Tipperary","Cork","Galway","Clare","Limerick","Offaly","Wexford","Waterford","Antrim"] },

    { q:"The 10 counties to win the National Hurling League",
      sub:"Every NHL title winner in history",
      answers:["Tipperary","Kilkenny","Cork","Limerick","Galway","Clare","Wexford","Waterford","Dublin","Offaly"] }
  ]
};

/* Nicknames / common forms → canonical answer (keys normalised:
   lower-case, accents & non-alphanumerics stripped). Levenshtein
   tolerance in the game handles ordinary typos. */
const TENABLE_ALIASES = {
  dubs:"Dublin", baileathacliath:"Dublin",
  kingdom:"Kerry", thekingdom:"Kerry",
  rebels:"Cork", leeside:"Cork",
  royals:"Meath", royalcounty:"Meath",
  tribe:"Galway", tribesmen:"Galway", tribesman:"Galway",
  orchard:"Armagh", orchardcounty:"Armagh",
  redhand:"Tyrone", redhands:"Tyrone",
  oakleaf:"Derry", londonderry:"Derry",
  mourne:"Down", mournemen:"Down",
  tirchonaill:"Donegal",
  cats:"Kilkenny", marblecounty:"Kilkenny", kk:"Kilkenny",
  premier:"Tipperary", premiercounty:"Tipperary", tipp:"Tipperary",
  treaty:"Limerick", treatymen:"Limerick", shannonsiders:"Limerick",
  banner:"Clare", bannercounty:"Clare",
  deise:"Waterford",
  faithful:"Offaly", faithfulcounty:"Offaly",
  yellowbellies:"Wexford", model:"Wexford", modelcounty:"Wexford",
  saffrons:"Antrim", glensmen:"Antrim",
  rossies:"Roscommon"
};
