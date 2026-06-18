/* ============================================================
   TENABLE — GAA top-10 list quiz · question bank
   Every list below is a VERIFIED factual set (roll-of-honour /
   provincial geography). Counts are stated in each question so
   variable-length lists read correctly. Add more lists freely —
   keep them to clean, unambiguous sets (avoid tie-broken "top N"
   tails where the cut-off is fuzzy).
   ============================================================ */
const TENABLE_DATA = {
  football: [
    { q:"Counties to win the All-Ireland Senior Football title since 1990",
      sub:"Sam Maguire winners, 1990–2024",
      answers:["Kerry","Dublin","Cork","Down","Donegal","Derry","Meath","Galway","Armagh","Tyrone"] },

    { q:"The 5 most successful football counties of all time",
      sub:"By All-Ireland SFC titles won",
      answers:["Kerry","Dublin","Galway","Cork","Meath"] },

    { q:"Counties that won Sam Maguire in the 2010s",
      sub:"All-Ireland SFC champions, 2010–2019",
      answers:["Cork","Dublin","Donegal","Kerry"] },

    { q:"Counties that won Sam Maguire in the 2000s",
      sub:"All-Ireland SFC champions, 2000–2009",
      answers:["Kerry","Galway","Armagh","Tyrone"] },

    { q:"The 9 counties of Ulster GAA",
      sub:"Ulster Senior Football Championship",
      answers:["Antrim","Armagh","Cavan","Derry","Donegal","Down","Fermanagh","Monaghan","Tyrone"] },

    { q:"The 6 counties of Munster GAA",
      sub:"Munster Senior Football Championship",
      answers:["Clare","Cork","Kerry","Limerick","Tipperary","Waterford"] },

    { q:"The 5 home counties of Connacht GAA",
      sub:"Connacht Senior Football Championship",
      answers:["Galway","Leitrim","Mayo","Roscommon","Sligo"] },

    { q:"The 4 provinces of the GAA",
      sub:"Ireland's provincial councils",
      answers:["Connacht","Leinster","Munster","Ulster"] }
  ],

  hurling: [
    { q:"Counties to win the All-Ireland Senior Hurling title since 1990",
      sub:"Liam MacCarthy winners, 1990–2024",
      answers:["Cork","Tipperary","Kilkenny","Offaly","Clare","Wexford","Galway","Limerick"] },

    { q:"The 4 most successful hurling counties of all time",
      sub:"By All-Ireland SHC titles won",
      answers:["Kilkenny","Cork","Tipperary","Limerick"] },

    { q:"Counties that won Liam MacCarthy in the 2010s",
      sub:"All-Ireland SHC champions, 2010–2019",
      answers:["Tipperary","Kilkenny","Clare","Galway","Limerick"] },

    { q:"Counties that won Liam MacCarthy in the 2000s",
      sub:"All-Ireland SHC champions, 2000–2009",
      answers:["Kilkenny","Cork","Tipperary"] },

    { q:"The 6 counties of Munster GAA",
      sub:"Munster Senior Hurling Championship",
      answers:["Clare","Cork","Kerry","Limerick","Tipperary","Waterford"] },

    { q:"The 4 provinces of the GAA",
      sub:"Ireland's provincial councils",
      answers:["Connacht","Leinster","Munster","Ulster"] }
  ]
};

/* Nicknames / common forms → canonical answer (keys are normalised:
   lower-case, accents & non-alphanumerics stripped). Levenshtein
   tolerance in the game handles ordinary typos, so this only needs
   genuine aliases. */
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
  rossies:"Roscommon"
};
