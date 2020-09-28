const dummyOffice = {
  frequency: "Daily",
  office: "evening",
  daySection: {
    date: {
      weekday: "Sat",
      dayOfMonth: "19",
      month: "Sep",
      year: "2020",
      isFastDay: true,
      color: "#077339",
    },
    content: {
      primary: {
        text:
          "Eve of The Sixteenth Sunday after Pentecost, or the Fifteenth Sunday after Trinity (Proper 20)",
        colors: ["#077339"],
      },
      secondary: [
        {
          text: "Ember Day (Autumn Saturday)",
          color: "#64147d",
        },
        {
          text: "Theodore of Tarsus, Archbishop of Canterbury, 690",
          color: "#ffffff",
          link: "https://en.wikipedia.org/wiki/Theodore_of_Tarsus",
        },
      ],
      season: { text: "Season After Pentecost", color: "#077339" },
    },
  },
  openingSentence: {
    text:
      "Jesus spoke to them, saying, “I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.”",
    citation: "John 8:12",
  },
  confession: {
    useLongFormInvitation: true,
    useDeaconOrLayAbsolution: true,
  },
};

export default dummyOffice;
