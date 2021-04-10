export interface IAdvancedSetting {
  name: string;
  storageKey: string;
  default: string;
  options: string[];
  description: string;
}

const url = `https://www.dailyoffice2019.com/?
setting_psalter=60
&setting_reading_cycle=1
&setting_reading_length=abbreviated
&setting_reading_audio=off
&setting_canticle_rotation=2011
&setting_theme=theme-light
&setting_lectionary=daily-office-readings
&setting_confession=long-on-fast
&setting_absolution=lay
&setting_morning_prayer_invitatory=invitatory_rotating
&setting_reading_headings=off
&setting_language_style=traditional
&setting_national_holidays=us
&setting_suffrages=rotating
&setting_collects=rotating
&setting_election_prayers=election_yes
&setting_pandemic_prayers=pandemic_no
&setting_mp_great_litany=mp_litany_off
&setting_ep_great_litany=ep_litany_off
&setting_general_thanksgiving=off&setting_chrysostom=on
&setting_grace=rotating
&setting_o_antiphons=literal`;

export const advancedSettings = [
  {
    title: "Visual Theme",
    name: "theme",
    help_text:
      "Use light mode or dark mode, or default to your computer's setting for light or dark mode",
    options: [
      {
        value: "theme-auto",
        hide: [],
        show: [],
        heading: "Use Computer Setting",
        text: "The long form of the intro and absolution are used every day",
        tags: { class: "theme-selector", "data-theme": "theme-auto" },
      },
      {
        value: "theme-light",
        hide: [],
        show: [],
        heading: "Light Mode",
        text:
          "The long form of the intro and absolution are used only on fast days",
        tags: { class: "theme-selector", "data-theme": "theme-light" },
      },
      {
        value: "theme-dark",
        hide: [],
        show: [],
        heading: "Dark Mode",
        text: "The short form of the intro and absolution are used every day",
        tags: { class: "theme-selector", "data-theme": "theme-dark" },
      },
    ],
  },
  {
    title: "Substitute Sunday/Holy Day (Eucharistic) Lectionary",
    name: "lectionary",
    help_text:
      "On Sundays and major holy days, do you want to use the standard Daily Office readings or substitute the 3-year Sunday/Holy Day cycle? When the Daily Office is used for the principal service of a church, the prayer book instructs you to replace the Daily Office readings with the three year cycle of Sunday and Holy Day readings.  This is generally done only in churches and not when using the Daily Office as a personal devotion at home.",
    options: [
      {
        value: "daily-office-readings",
        hide: ["mass-readings-feria", "mass-readings-sunday"],
        show: ["daily-office-readings-sunday", "daily-office-readings-feria"],
        heading: "Standard Daily Office",
        text: "",
        tags: {},
      },
      {
        value: "mass-readings",
        hide: ["mass-reading-feria", "daily-office-readings-sunday"],
        show: ["mass-readings-sunday", "mass-readingss-feria"],
        heading: "Sundays & Holy Days",
        text: "",
        tags: {},
      },
    ],
  },
  {
    title: "Confession Intro Length",
    name: "confession",
    help_text:
      "Use either the short or long exhortation before the confession.",
    options: [
      {
        value: "long-on-fast",
        hide: ["confession-long-form", "confession-short-form"],
        show: ["confession-fast-only"],
        heading: "Long Intro Only on Fast Days",
        text:
          "The long form of the intro and absolution are used only on fast days",
      },
      {
        value: "short",
        hide: ["confession-fast-only", "confession-long-form"],
        show: ["confession-short-form"],
        heading: "Short Intro Always",
        text: "The short form of the intro and absolution are used every day",
      },
      {
        value: "long",
        hide: ["confession-fast-only", "confession-short-form"],
        show: ["confession-long-form"],
        heading: "Long Intro Always",
        text: "The long form of the intro and absolution are used every day",
      },
    ],
  },
  {
    title: "Absolution Style",
    name: "absolution",
    help_text:
      "After the confession, read an absolution suitable for a priest or a prayer suitable for a deacon or lay person.",
    options: [
      {
        value: "lay",
        hide: ["priest"],
        show: ["lay"],
        heading: "Deacon or Lay Person",
        text: "A prayer suitable for a deacon or lay person to read",
      },
      {
        value: "priest",
        hide: ["lay"],
        show: ["priest"],
        heading: "Priest or Bishop",
        text: "An absolution suitable for a priest to pronounce",
      },
    ],
  },
  {
    title: "Morning Prayer Invitatory",
    name: "morning_prayer_invitatory",
    help_text:
      "Open with the Venite (Psalm 95) always (traditional), have a special celebratory invitatory on Sundays and feasts (Pascha Nostrum during Eastertide or Jubilate/Psalm 100 otherwise), or rotate between the normal and celebratory invitatory each day. Regardless of which setting you choose, the Pascha Nostrum is always used during the first week of Easter, and the invitatory will never be the same as one of the day's appointed psalms.",
    options: [
      {
        value: "invitatory_traditional",
        hide: [
          "invitatory_jubilate_on_feasts",
          "invitatory_rotating",
          "invitatory_celebratory_always",
        ],
        show: ["invitatory_traditional"],
        heading: "Venite always",
        text:
          "Always use the Venite (except on days when Pslam 95 is appointed)",
      },
      {
        value: "invitatory_jubilate_on_feasts",
        hide: [
          "invitatory_traditional",
          "invitatory_rotating",
          "invitatory_celebratory_always",
        ],
        show: ["invitatory_jubilate_on_feasts"],
        heading: "Celebratory Sundays and feasts",
        text: "Use the Jubilate on Feasts and Sundays, Venite on other days ",
      },
      {
        value: "invitatory_rotating",
        hide: [
          "invitatory_traditional",
          "invitatory_jubilate_on_feasts",
          "invitatory_celebratory_always",
        ],
        show: ["invitatory_rotating"],
        heading: "Rotating each day",
        text: "Rotate between the Venite and Jubilate",
      },
      {
        value: "celebratory_always",
        hide: [
          "invitatory_traditional",
          "invitatory_jubilate_on_feasts",
          "invitatory_rotating",
        ],
        show: ["invitatory_celebratory_always"],
        heading: "Celebratory Always",
        text: "Always use the Jubilate (or Pascha Nostrum, in Eastertide)",
      },
    ],
  },
  {
    title: "Reading Headings",
    name: "reading_headings",
    help_text:
      "Show or hide headings from the English Standard Version of the Bible in scripture readings ",
    options: [
      {
        value: "off",
        hide: ["reading-heading"],
        show: [],
        heading: "Hide",
        text: "Hide ESV headings in readings",
      },
      {
        value: "on",
        hide: [],
        show: ["reading-heading"],
        heading: "Show",
        text: "Show ESV headings in readings",
      },
    ],
  },
  {
    title: "Language Style for Prayers",
    name: "language_style",
    help_text:
      "Traditional and contemporary language options are available for the Kyrie (Lord have mercy) and the Lord's Prayer",
    options: [
      {
        value: "traditional",
        hide: ["contemporary"],
        show: ["traditional"],
        heading: "Traditional",
        text: "Traditional language for the Kyrie and Our Father",
      },
      {
        value: "contemporary",
        hide: ["traditional"],
        show: ["contemporary"],
        heading: "Contemporary",
        text: "Modern language for the Kyrie and Our Father",
      },
    ],
  },
  {
    title: "National Holiday Collects",
    name: "national_holidays",
    help_text:
      "Show country-specific commemorations for the United States, Canada, or both.",
    options: [
      {
        value: "all",
        hide: ["national_none"],
        show: ["canada", "us", "election"],
        heading: "All",
        text: "Both U.S. and Canadian Holidays",
      },
      {
        value: "us",
        hide: ["canada", "national_none"],
        show: ["us", "election"],
        heading: "United States",
        text: "United States Holidays",
      },
      {
        value: "canada",
        hide: ["us", "national_none", "election"],
        show: ["canada"],
        heading: "Canada",
        text: "Canadian Holidays",
      },
      {
        value: "national_none",
        hide: ["us", "canada"],
        show: ["national_none", "election"],
        heading: "None",
        text: "No Holidays",
      },
    ],
  },
  {
    title: "Evening Prayer Suffrages",
    name: "suffrages",
    help_text: "Choose which set of short prayers to be used each evening",
    options: [
      {
        value: "rotating",
        hide: ["suffrages-a", "suffrages-b"],
        show: ["suffrages-rotating"],
        heading: "Rotating",
        text: "Rotate between the traditional and new set each day",
      },
      {
        value: "traditional",
        hide: ["suffrages-b", "suffrages-rotating"],
        show: ["suffrages-a"],
        heading: "Traditional",
        text: "Always use the traditional set (same as Morning Prayer)",
      },
      {
        value: "new",
        hide: ["suffrages-a", "suffrages-rotating"],
        show: ["suffrages-b"],
        heading: "New",
        text:
          'Always use the newer set, each ending with "We entreat you, O Lord"',
      },
    ],
  },
  {
    title: "Additional Collects",
    name: "collects",
    help_text:
      "Use a different collect for each day of the week, or use the same two collects (from the classic prayer books) each day.",
    options: [
      {
        value: "rotating",
        hide: ["fixed"],
        show: ["rotating"],
        heading: "Rotating",
        text: "A different collect is said for each day of the week",
      },
      {
        value: "fixed",
        hide: ["rotating"],
        show: ["fixed"],
        heading: "Fixed",
        text: "The two traditional collects are said every day",
      },
    ],
  },
  {
    title: "Prayers in the Time of An Election",
    name: "election_prayers",
    help_text:
      "Include election related collects until the U.S. General election. (Automatically disabled if only Canadian feasts are selected).",
    options: [
      {
        value: "election_yes",
        hide: [],
        show: ["election_prayers"],
        heading: "On",
      },
      {
        value: "election_no",
        hide: ["election_prayers"],
        show: [],
        heading: "Off",
      },
    ],
  },
  {
    title: "Prayers in the Time of Pandemic",
    name: "pandemic_prayers",
    help_text:
      "Include a rotating set of collects for the duration of this pandemic",
    options: [
      {
        value: "pandemic_yes",
        hide: [],
        show: ["pandemic_prayers"],
        heading: "On",
      },
      {
        value: "pandemic_no",
        hide: ["pandemic_prayers"],
        show: [],
        heading: "Off",
      },
    ],
  },
  {
    title: "Great Litany at Morning Prayer",
    name: "mp_great_litany",
    help_text: "Include the Great Litany after the collects at Morning Prayer",
    options: [
      {
        value: "mp_litany_off",
        hide: ["litany-mp-wfs", "litany-mp-not-wfs"],
        show: ["mission-mp-wfs", "mission-mp-not-wfs"],
        heading: "Off",
        text: "Do not use the litany",
      },
      {
        value: "mp_litany_w_f_s",
        hide: ["litany-mp-not-wfs", "mission-mp-wfs"],
        show: ["litany-mp-wfs", "mission-mp-not-wfs"],
        heading: "Wed, Fri, & Sun.",
        text: "Litany on Wednesday, Friday, and Sunday (the traditional days)",
      },
      {
        value: "mp_litany_everyday",
        hide: ["mission-mp-wfs", "mission-mp-not-wfs"],
        show: ["litany-mp-wfs", "litany-mp-not-wfs"],
        heading: "Everyday",
        text: "Litany every day",
      },
    ],
  },
  {
    title: "Great Litany at Evening Prayer",
    name: "ep_great_litany",
    help_text: "Include the Great Litany after the collects at Evening Prayer",
    options: [
      {
        value: "ep_litany_off",
        hide: ["litany-ep-wfs", "litany-ep-not-wfs"],
        show: ["mission-ep-wfs", "mission-ep-not-wfs"],
        heading: "Off",
        text: "Do not use the litany",
      },
      {
        value: "ep_litany_w_f_s",
        hide: ["litany-ep-not-wfs", "mission-ep-wfs"],
        show: ["litany-ep-wfs", "mission-ep-not-wfs"],
        heading: "Wed, Fri, & Sun.",
        text: "Litany on Wednesday, Friday, and Sunday (the traditional days)",
      },
      {
        value: "ep_litany_everyday",
        hide: ["mission-ep-wfs", "mission-ep-not-wfs"],
        show: ["litany-ep-wfs", "litany-ep-not-wfs"],
        heading: "Everyday",
        text: "Litany every day",
      },
    ],
  },
  {
    title: "General Thanksgiving",
    name: "general_thanksgiving",
    help_text:
      "Pray the General Thanksgiving at the end of Morning and Evening Prayer",
    options: [
      {
        value: "on",
        hide: [],
        show: ["general_thanksgiving"],
        heading: "On",
        text: "Add the prayer of general thanksgiving at the end of the office",
      },
      {
        value: "off",
        hide: ["general_thanksgiving"],
        show: [""],
        heading: "Off",
        text:
          "Hide the prayer of general thanksgiving at the end of the office",
      },
    ],
  },
  {
    title: "Prayer of St. John Chrysostom",
    name: "chrysostom",
    help_text:
      "Pray the Prayer of St. John Chrysostom at the end of Morning and Evening Prayer.  This prayer is suitable when praying in a group.",
    options: [
      {
        value: "on",
        hide: [],
        show: ["chrysostom"],
        heading: "On",
        text: "For use when praying in groups of two or more",
      },
      {
        value: "off",
        hide: ["chrysostom"],
        show: [""],
        heading: "Off",
        text: "For when praying individually",
      },
    ],
  },
  {
    title: "The Grace",
    name: "grace",
    help_text:
      "Rotate each day through the three provided conclusions, or always use the same one from the classic prayer books.",
    options: [
      {
        value: "rotating",
        hide: ["fixed-grace"],
        show: ["rotating-grace"],
        heading: "Rotating",
        text: "Rotate through three different verses daily",
      },
      {
        value: "traditional",
        hide: ["rotating-grace"],
        show: ["fixed-grace"],
        heading: "Traditional",
        text: "Conclude with the traditional grace each day",
      },
    ],
  },
  {
    title: 'Advent "O" Antiphons',
    name: "o_antiphons",
    help_text:
      'The traditional "O" Antiphons are used before and after the first canticle in Evening Prayer during the last eight days of Advent. You can use literal translations of the original Latin, or the familiar paraphrases used in the hymn "O Come, O Come Emmanuel"',
    options: [
      {
        value: "literal",
        hide: ["antiphon_paraphrase, antiphon_latin"],
        show: ["antiphon_literal"],
        heading: "Literal",
        text: "Literal translation of the original Latin",
      },
      {
        value: "paraphrase",
        hide: ["antiphon_literal, antiphon_latin"],
        show: ["antiphon_paraphrase"],
        heading: "Hymnal",
        text: "Paraphrase used in, <em>O Come, O Come Emmanuel</em>",
      },
      {
        value: "latin",
        hide: ["antiphon_paraphrase, antiphon_literal"],
        show: ["antiphon_latin"],
        heading: "Latin",
        text: "Original Latin",
      },
      {
        value: "none",
        hide: ["antiphon_paraphrase, antiphon_latin", "antiphon_literal"],
        show: [""],
        heading: "None",
        text: "Hide the antiphons",
      },
    ],
  },
];
