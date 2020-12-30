export const advancedSettings = [
  {
    setting: `VISUAL THEME`,
    options: [`Use Computer Setting`, `Light Mode`, `Dark Mode`],
    description: `Use light mode or dark mode, or default to your computer's setting for light or dark mode`,
  },

  {
    setting: `SUBSTITUTE SUNDAY/HOLY DAY (EUCHARISTIC) LECTIONARY`,
    options: [`Standard Daily Office`, `Sundays & Holy Days`],
    description: `On Sundays and major holy days, do you want to use the standard Daily Office readings or substitute the 3-year Sunday/Holy Day cycle? When the Daily Office is used for the principal service of a church, the prayer book instructs you to replace the Daily Office readings with the three year cycle of Sunday and Holy Day readings. This is generally done only in churches and not when using the Daily Office as a personal devotion at home.`,
  },

  {
    setting: `CONFESSION INTRO LENGTH`,
    options: [
      `Long Intro Only on Fast Days`,
      `Short Intro Always`,
      `Long Intro Always`,
    ],
    description: `Use either the short or long exhortation before the confession.`,
  },

  {
    setting: `ABSOLUTION STYLE`,
    options: [`Deacon or Lay Person`, `Priest or Bishop`],
    description: `After the confession, read an absolution suitable for a priest or a prayer suitable for a deacon or lay person.`,
  },

  {
    setting: `MORNING PRAYER INVITATORY`,
    options: [
      `Venite always`,
      `Celebratory Sundays and feasts`,
      `Rotating each day`,
      `Celebratory Always`,
    ],
    description: `Open with the Venite (Psalm 95) always (traditional), have a special celebratory invitatory on Sundays and feasts (Pascha Nostrum during Eastertide or Jubilate/Psalm 100 otherwise), or rotate between the normal and celebratory invitatory each day. Regardless of which setting you choose, the Pascha Nostrum is always used during the first week of Easter, and the invitatory will never be the same as one of the day's appointed psalms.`,
  },

  {
    setting: `READING HEADINGS`,
    options: [`Hide`, `Show`],
    description: `Show or hide headings from the English Standard Version of the Bible in scripture readings`,
  },

  {
    setting: `LANGUAGE STYLE FOR PRAYERS`,
    options: [`Traditional`, `Contemporary`],
    description: `Traditional and contemporary language options are available for the Kyrie (Lord have mercy) and the Lord's Prayer`,
  },

  {
    setting: `NATIONAL HOLIDAY COLLECTS`,
    options: [`All`, `United States`, `Canada`, `None`],
    description: `Show country-specific commemorations for the United States, Canada, or both.`,
  },

  {
    setting: `EVENING PRAYER SUFFRAGES`,
    options: [`Rotating`, `Traditional`, `New`],
    description: `Choose which set of short prayers to be used each evening`,
  },

  {
    setting: `ADDITIONAL COLLECTS`,
    options: [`Rotating`, `Fixed`],
    description: `Use a different collect for each day of the week, or use the same two collects (from the classic prayer books) each day.`,
  },

  {
    setting: `PRAYERS IN THE TIME OF AN ELECTION`,
    options: [`On`, `Off`],
    description: `Include election related collects until the U.S. General election. (Automatically disabled if only Canadian feasts are selected).`,
  },

  {
    setting: `PRAYERS IN THE TIME OF PANDEMIC`,
    options: [`On`, `Off`],
    description: `Include a rotating set of collects for the duration of this pandemic`,
  },

  {
    setting: `GREAT LITANY AT MORNING PRAYER`,
    options: [`Off`, `Wed, Fri, & Sun.`, `Everyday`],
    description: `Include the Great Litany after the collects at Morning Prayer`,
  },

  {
    setting: `GREAT LITANY AT EVENING PRAYER`,
    options: [`Off`, `Wed, Fri, & Sun.`, `Everyday`],
    description: `Include the Great Litany after the collects at Evening Prayer`,
  },

  {
    setting: `GENERAL THANKSGIVING`,
    options: [`On`, `Off`],
    description: `Pray the General Thanksgiving at the end of Morning and Evening Prayer`,
  },

  {
    setting: `PRAYER OF ST. JOHN CHRYSOSTOM`,
    options: [`On`, `Off`],
    description: `Pray the Prayer of St. John Chrysostom at the end of Morning and Evening Prayer. This prayer is suitable when praying in a group.`,
  },

  {
    setting: `THE GRACE`,
    options: [`Rotating`, `Traditional`],
    description: `Rotate each day through the three provided conclusions, or always use the same one from the classic prayer books.`,
  },

  {
    setting: `ADVENT "O" ANTIPHONS`,
    options: [`Literal`, `Hymnal`, `Latin`, `None`],
    description: `The traditional "O" Antiphons are used before and after the first canticle in Evening Prayer during the last eight days of Advent. You can use literal translations of the original Latin, or the familiar paraphrases used in the hymn "O Come, O Come Emmanuel"`,
  },
];
