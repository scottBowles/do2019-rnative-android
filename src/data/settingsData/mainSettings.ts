export interface IMainSetting {
  title: string;
  name: string;
  help_text: ISettingText[];
  options: IOption[];
}

export interface IOption {
  value: string;
  hide: string[];
  show: string[];
  heading: string;
  text: ISettingText[];
}

export interface ISettingText {
  content: string;
  type: string;
}

const apiSettings = [
  {
    title: "Psalter Cycle",
    name: "psalter",
    help_text:
      "During Morning and Evening Prayer, pray through all the Psalms either every <strong>60 days</strong> (fewer psalms per day) or once every <strong>30 days</strong> (more psalms per day).",
    options: [
      {
        value: "60",
        hide: ["psalter-thirty"],
        show: ["psalter-sixty"],
        heading: "60 Day",
        text: "Pray through the psalms once every 60 days",
      },
      {
        value: "30",
        hide: ["psalter-sixty"],
        show: ["psalter-thirty"],
        heading: "30 Day",
        text: "Pray through the psalms once every 30 days",
      },
    ],
  },
  {
    title: "Reading Cycle",
    name: "reading_cycle",
    help_text:
      "Read through most of the Bible during Morning and Evening Prayer every <strong>1 year</strong> or every <strong>2 years</strong>.  The one year cycle is best if you do <strong>both</strong> Morning and Evening prayer daily; the two year cycle is best if you do only one.",
    options: [
      {
        value: "1",
        hide: [],
        show: [],
        heading: "One Year",
        text:
          "Read through most of the Bible each year. (Use if you pray <strong>both</strong> Morning and Evening Prayer)",
      },
      {
        value: "2",
        hide: [],
        show: [],
        heading: "Two Year",
        text:
          "Read through most of the Bible in two years. (Use if you pray <strong>either</strong> Morning <strong>or</strong> Evening prayer)",
      },
    ],
  },
  {
    title: "Reading Length",
    name: "reading_length",
    help_text:
      "Always use the full readings, or use the shortened readings (when there are suggested abbreviations).",
    options: [
      {
        value: "full",
        hide: [],
        show: [],
        heading: "Full",
        text: "The full readings will always be used.",
      },
      {
        value: "abbreviated",
        hide: [],
        show: [],
        heading: "Abbreviated",
        text: "Suggested abbreviations, when available.",
      },
    ],
  },
  {
    title: "Reading Audio",
    name: "reading_audio",
    help_text:
      "Show or hide an audio player to listen to the scripture readings during Morning and Evening Prayer.  Audio is provided by esv.org and currently does not include the Deuterocanon/Apocrypha.",
    options: [
      {
        value: "off",
        hide: ["bible-audio"],
        show: [],
        heading: "Disable Audio",
        text: "No audio controls for scripture readings",
      },
      {
        value: "on",
        hide: [],
        show: ["bible-audio"],
        heading: "Enable Audio",
        text: "Enable audio player for scripture readings",
      },
    ],
  },
  {
    title: "Canticle Rotation",
    name: "canticle_rotation",
    help_text: "",
    options: [
      {
        value: "default",
        hide: ["canticle-1979", "canticle-2011"],
        show: ["canticle-default"],
        heading: "Traditional",
        text: "The traditional fixed canticles each day",
      },
      {
        value: "2011",
        hide: ["canticle-1979", "canticle-default"],
        show: ["canticle-2011"],
        heading: "Seasonal Rotation",
        text: "One fixed canticle and one canticle that rotates by season",
      },
      {
        value: "1979",
        hide: ["canticle-default", "canticle-2011"],
        show: ["canticle-1979"],
        heading: "Daily Rotation",
        text: "A rotating set of canticles by day of week and season",
      },
    ],
  },
];

const parseHTML = (line: string) =>
  line.split(/<strong>|<\/strong>/).map((run, index) => ({
    content: run,
    type: index % 2 === 0 ? "regular" : "bold",
  }));

export const mainSettings: IMainSetting[] = apiSettings.map((setting) => {
  const help_text = parseHTML(setting.help_text);
  const options = setting.options.map((option) => {
    const text = parseHTML(option.text);
    return { ...option, text };
  });
  return { ...setting, help_text, options };
});
