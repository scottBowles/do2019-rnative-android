export interface IAdvancedSetting {
  name: string;
  storageKey: string;
  default: string;
  options: string[];
  description: string;
}

export const advancedSettings = [
  {
    name: `VISUAL THEME`,
    storageKey: `visualTheme`,
    default: `Use Computer Setting`,
    options: [`Use Computer Setting`, `Light Mode`, `Dark Mode`],
    description: `Use light mode or dark mode, or default to your computer's setting for light or dark mode`,
  },

  {
    name: `SUBSTITUTE SUNDAY/HOLY DAY (EUCHARISTIC) LECTIONARY`,
    storageKey: `substituteLectionary`,
    default: `Standard Daily Office`,
    options: [`Standard Daily Office`, `Sundays & Holy Days`],
    description: `On Sundays and major holy days, do you want to use the standard Daily Office readings or substitute the 3-year Sunday/Holy Day cycle? When the Daily Office is used for the principal service of a church, the prayer book instructs you to replace the Daily Office readings with the three year cycle of Sunday and Holy Day readings. This is generally done only in churches and not when using the Daily Office as a personal devotion at home.`,
  },

  {
    name: `CONFESSION INTRO LENGTH`,
    storageKey: `confessionIntroLength`,
    default: `Long Intro Only on Fast Days`,
    options: [
      `Long Intro Only on Fast Days`,
      `Short Intro Always`,
      `Long Intro Always`,
    ],
    description: `Use either the short or long exhortation before the confession.`,
  },

  {
    name: `ABSOLUTION STYLE`,
    storageKey: `absolutionStyle`,
    default: `Deacon or Lay Person`,
    options: [`Deacon or Lay Person`, `Priest or Bishop`],
    description: `After the confession, read an absolution suitable for a priest or a prayer suitable for a deacon or lay person.`,
  },

  {
    name: `MORNING PRAYER INVITATORY`,
    storageKey: `morningPrayerInvitatory`,
    default: `Venite always`,
    options: [
      `Venite always`,
      `Celebratory Sundays and feasts`,
      `Rotating each day`,
      `Celebratory Always`,
    ],
    description: `Open with the Venite (Psalm 95) always (traditional), have a special celebratory invitatory on Sundays and feasts (Pascha Nostrum during Eastertide or Jubilate/Psalm 100 otherwise), or rotate between the normal and celebratory invitatory each day. Regardless of which setting you choose, the Pascha Nostrum is always used during the first week of Easter, and the invitatory will never be the same as one of the day's appointed psalms.`,
  },

  {
    name: `READING HEADINGS`,
    storageKey: `readingHeadings`,
    default: `Hide`,
    options: [`Hide`, `Show`],
    description: `Show or hide headings from the English Standard Version of the Bible in scripture readings`,
  },

  {
    name: `LANGUAGE STYLE FOR PRAYERS`,
    storageKey: `traditionalOrContemporary`,
    default: `Traditional`,
    options: [`Traditional`, `Contemporary`],
    description: `Traditional and contemporary language options are available for the Kyrie (Lord have mercy) and the Lord's Prayer`,
  },

  {
    name: `NATIONAL HOLIDAY COLLECTS`,
    storageKey: `nationalCollects`,
    default: `All`,
    options: [`All`, `United States`, `Canada`, `None`],
    description: `Show country-specific commemorations for the United States, Canada, or both.`,
  },

  {
    name: `EVENING PRAYER SUFFRAGES`,
    storageKey: `eveningPrayerSuffrages`,
    default: `Rotating`,
    options: [`Rotating`, `Traditional`, `New`],
    description: `Choose which set of short prayers to be used each evening`,
  },

  {
    name: `ADDITIONAL COLLECTS`,
    storageKey: `additionalCollects`,
    default: `Rotating`,
    options: [`Rotating`, `Fixed`],
    description: `Use a different collect for each day of the week, or use the same two collects (from the classic prayer books) each day.`,
  },

  {
    name: `PRAYERS IN THE TIME OF AN ELECTION`,
    storageKey: `electionPrayers`,
    default: `On`,
    options: [`On`, `Off`],
    description: `Include election related collects until the U.S. General election. (Automatically disabled if only Canadian feasts are selected).`,
  },

  {
    name: `PRAYERS IN THE TIME OF PANDEMIC`,
    storageKey: `pandemicPrayers`,
    default: `On`,
    options: [`On`, `Off`],
    description: `Include a rotating set of collects for the duration of this pandemic`,
  },

  {
    name: `GREAT LITANY AT MORNING PRAYER`,
    storageKey: `greatLitanyMP`,
    default: `Off`,
    options: [`Off`, `Wed, Fri, & Sun.`, `Everyday`],
    description: `Include the Great Litany after the collects at Morning Prayer`,
  },

  {
    name: `GREAT LITANY AT EVENING PRAYER`,
    storageKey: `greatLitanyEP`,
    default: `Off`,
    options: [`Off`, `Wed, Fri, & Sun.`, `Everyday`],
    description: `Include the Great Litany after the collects at Evening Prayer`,
  },

  {
    name: `GENERAL THANKSGIVING`,
    storageKey: `generalThanksgiving`,
    default: `On`,
    options: [`On`, `Off`],
    description: `Pray the General Thanksgiving at the end of Morning and Evening Prayer`,
  },

  {
    name: `PRAYER OF ST. JOHN CHRYSOSTOM`,
    storageKey: `prayerOfChrysostom`,
    default: `On`,
    options: [`On`, `Off`],
    description: `Pray the Prayer of St. John Chrysostom at the end of Morning and Evening Prayer. This prayer is suitable when praying in a group.`,
  },

  {
    name: `THE GRACE`,
    storageKey: `rotatingOrTradGrace`,
    default: `Rotating`,
    options: [`Rotating`, `Traditional`],
    description: `Rotate each day through the three provided conclusions, or always use the same one from the classic prayer books.`,
  },

  {
    name: `ADVENT "O" ANTIPHONS`,
    storageKey: `OAntiphons`,
    default: `Literal`,
    options: [`Literal`, `Hymnal`, `Latin`, `None`],
    description: `The traditional "O" Antiphons are used before and after the first canticle in Evening Prayer during the last eight days of Advent. You can use literal translations of the original Latin, or the familiar paraphrases used in the hymn "O Come, O Come Emmanuel"`,
  },
];
