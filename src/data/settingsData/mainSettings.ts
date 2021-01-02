export interface IMainSetting {
  setting: {
    name: string;
    storageKey: string;
    default: string;
    options: IOption[];
  };
}

export interface IOption {
  title: string;
  description: IDescriptionPart[];
}

export interface IDescriptionPart {
  content: string;
  type: string;
}

export const mainSettings = [
  {
    name: "Psalter Cycle",
    storageKey: "psalterCycle",
    default: "60 Day",
    options: [
      {
        title: "60 Day",
        description: [
          {
            content: "Pray through the psalms once every 60 days",
            type: "regular",
          },
        ],
      },
      {
        title: "30 Day",
        description: [
          {
            content: "Pray through the psalms once every 30 days",
            type: "regular",
          },
        ],
      },
    ],
  },
  {
    name: "Reading Cycle",
    storageKey: "readingCycle",
    default: "One Year",
    options: [
      {
        title: "One Year",
        description: [
          {
            content:
              "Read through most of the Bible each year. (Use if you pray ",
            type: "regular",
          },
          { content: "both", type: "bold" },
          { content: " Morning and Evening Prayer)", type: "regular" },
        ],
      },
      {
        title: "Two Year",
        description: [
          {
            content:
              "Read through most of the Bible in two years. (Use if you pray ",
            type: "regular",
          },
          { content: "either", type: "bold" },
          { content: " Morning ", type: "regular" },
          { content: "or", type: "bold" },
          { content: " Evening prayer)", type: "regular" },
        ],
      },
    ],
  },
  {
    name: "Reading Length",
    storageKey: "readingLength",
    default: "Full",
    options: [
      {
        title: "Full",
        description: [
          {
            content: "The full readings will always be used.",
            type: "regular",
          },
        ],
      },
      {
        title: "Abbreviated",
        description: [
          {
            content: "Suggested abbreviations, when available.",
            type: "regular",
          },
        ],
      },
    ],
  },
  {
    name: "Reading Audio",
    storageKey: "readingAudio",
    default: "Disable Audio",
    options: [
      {
        title: "Disable Audio",
        description: [
          {
            content: "No audio controls for scripture readings",
            type: "regular",
          },
        ],
      },
      {
        title: "Enable Audio",
        description: [
          {
            content: "Enable audio player for scripture readings",
            type: "regular",
          },
        ],
      },
    ],
  },
  {
    name: "Canticle Rotation",
    storageKey: "canticleRotation",
    default: "Traditional",
    options: [
      {
        title: "Traditional",
        description: [
          {
            content: "The traditional fixed canticles each day",
            type: "regular",
          },
        ],
      },
      {
        title: "Seasonal Rotation",
        description: [
          {
            content:
              "One fixed canticle and one canticle that rotates by season",
            type: "regular",
          },
        ],
      },
      {
        title: "Daily Rotation",
        description: [
          {
            content: "A rotating set of canticles by day of week and season",
            type: "regular",
          },
        ],
      },
    ],
  },
];
