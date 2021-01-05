// url used: https://data.dailyoffice2019.com/api/v1/office/morning_prayer/2020-12-10?confession=lonf&absolution=priest
// on 1/4/21

import { IApiCalendarDay } from "data/interfaces";

interface IDummyOffice {
  calendar_day: IApiCalendarDay;
  modules: {
    data: {
      name: string;
      lines: {
        content: string;
        line_type: string;
        indented: boolean;
      }[];
    }[];
  };
}

export const dummyOffice: IDummyOffice = {
  calendar_day: {
    date: "2020-12-10",
    date_description: {
      date: "2020-12-10",
      weekday: "Thursday",
      month: "10",
      month_name: "December",
      day: "10",
      year: "2020",
    },
    season: { name: "Advent", colors: ["purple", "blue"] },
    fast: { fast_day: 0, fast_day_description: "", fast_day_reason: [] },
    commemorations: [
      {
        name: "Thursday after the Second Sunday in Advent",
        rank: {
          name: "ADVENT_FERIA",
          formatted_name: "Advent Feria",
          precedence: 6,
        },
        colors: ["purple", "blue"],
        links: [],
        collects: {
          collect:
            "Blessed Lord, who caused all Holy Scriptures to be written for our learning: Grant us so to hear them, read, mark, learn, and inwardly digest them, that by patience and the comfort of your holy Word we may embrace and ever hold fast the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever.  Amen.",
          alternate_collect: null,
          vigil_collect: null,
        },
      },
    ],
  },
  modules: {
    data: [
      {
        name: "Opening Sentence",
        lines: [
          {
            content: "Opening Sentence",
            line_type: "heading",
            indented: false,
          },
          {
            content:
              "In the wilderness prepare the way of the Lord; make straight in the desert a highway for our God.",
            line_type: "leader",
            indented: false,
          },
          { content: "ISAIAH 40:3", line_type: "citation", indented: false },
        ],
      },
      {
        name: "Confession of Sin",
        lines: [
          {
            content: "Confession of Sin",
            line_type: "heading",
            indented: false,
          },
          {
            content: "The Officiant says to the People",
            line_type: "rubric",
            indented: false,
          },
          {
            content: "Let us humbly confess our sins to Almighty God.",
            line_type: "leader",
            indented: false,
          },
          {
            content: "Almighty and most merciful Father,",
            line_type: "congregation",
            indented: false,
          },
          {
            content:
              "we have erred and strayed from your ways like lost sheep.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "We have followed too much the devices and desires",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "of our own hearts.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "We have offended against your holy laws.",
            line_type: "congregation",
            indented: false,
          },
          {
            content:
              "We have left undone those things which we ought to have done,",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "and we have done those things which we ought not",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "to have done;",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "and apart from your grace, there is no health in us.",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "O Lord, have mercy upon us.",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "Spare all those who confess their faults.",
            line_type: "congregation",
            indented: false,
          },
          {
            content:
              "Restore all those who are penitent, according to your promises",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "declared to all people in Christ Jesus our Lord.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "And grant, O most merciful Father, for his sake,",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "that we may now live a godly, righteous, and sober life,",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "to the glory of your holy Name. Amen.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "The Priest alone stands and says",
            line_type: "rubric",
            indented: false,
          },
          {
            content:
              "The Almighty and merciful Lord grant you absolution and remission of all your sins, true repentance, amendment of life, and the grace and consolation of his Holy Spirit.",
            line_type: "leader",
            indented: false,
          },
          { content: "Amen.", line_type: "congregation", indented: false },
        ],
      },
      {
        name: "Preces",
        lines: [
          { content: "The Preces", line_type: "heading", indented: false },
          { content: "All stand.", line_type: "rubric", indented: false },
          {
            content: "O Lord, open our lips;",
            line_type: "leader",
            indented: false,
          },
          {
            content: "And our mouth shall proclaim your praise.",
            line_type: "congregation",
            indented: false,
          },
          {
            content: "O God, make speed to save us;",
            line_type: "leader",
            indented: false,
          },
          {
            content: "O Lord, make haste to help us.",
            line_type: "congregation",
            indented: false,
          },
          {
            content:
              "Glory be to the Father, and to the Son, and to the Holy Spirit;",
            line_type: "leader",
            indented: false,
          },
          {
            content:
              "As it was in the beginning, is now, and ever shall be, world without end. Amen.",
            line_type: "congregation",
            indented: false,
          },
          { content: "Praise the Lord.", line_type: "leader", indented: false },
          {
            content: "The Lord’s Name be praised.",
            line_type: "congregation",
            indented: false,
          },
        ],
      },
      {
        name: "Invitatory",
        lines: [
          {
            content: "Our King and Savior now draws near:",
            line_type: "leader",
            indented: false,
          },
          {
            content: "O come, let us adore him.",
            line_type: "congregation",
            indented: false,
          },
          { content: "Venite", line_type: "heading", indented: false },
          { content: "O Come", line_type: "subheading", indented: false },
          {
            content: "Officiant and People, all standing",
            line_type: "rubric",
            indented: false,
          },
          {
            content: "O come, let us sing unto the Lord; *",
            line_type: "congreation",
            indented: false,
          },
          {
            content:
              "let us heartily rejoice in the strength of our salvation.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "Let us come before his presence with thanksgiving *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and show ourselves glad in him with psalms.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "For the Lord is a great God *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and a great King above all gods.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "In his hand are all the depths of the earth, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and the heights of the hills are his also.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "The sea is his, for he made it, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and his hands prepared the dry land.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "O come, let us worship and fall down, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and kneel before the Lord our Maker.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "For he is our God, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and we are the people of his pasture,",
            line_type: "congreation",
            indented: true,
          },
          {
            content: "and the sheep of his hand.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "The following verses may be omitted.",
            line_type: "rubric",
            indented: false,
          },
          {
            content:
              "Today, if you will hear his voice, harden not your hearts *",
            line_type: "congreation",
            indented: false,
          },
          {
            content:
              "as in the provocation, and as in the day of temptation in the wilderness,",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "When your fathers tested me, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "and put me to the proof, though they had seen my works.",
            line_type: "congregation",
            indented: true,
          },
          {
            content:
              "Forty years long was I grieved with this generation and said, *",
            line_type: "congreation",
            indented: false,
          },
          {
            content:
              "“It is a people that err in their hearts, for they have not known my ways,”",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "Of whom I swore in my wrath *",
            line_type: "congreation",
            indented: false,
          },
          {
            content: "that they should not enter into my rest.",
            line_type: "congregation",
            indented: true,
          },
          {
            content: "Psalm 95:1-7, 8-11",
            line_type: "citation",
            indented: false,
          },
          {
            content: "Our King and Savior now draws near:",
            line_type: "leader",
            indented: false,
          },
          {
            content: "O come, let us adore him.",
            line_type: "congregation",
            indented: false,
          },
        ],
      },
    ],
  },
};
