// /**
//  *
//  * IN THIS FILE
//  *
//  * parse dummyOffice data
//  *
//  * COMPONENTS
//  *   Title
//  *   Office (export default)
//  *
//  * Styles
//  *
//  */

// // TODO -- CONSIDER USING addIsFastDay API UTIL, IF IT PERFORMS BETTER THAN USING isFast HERE

// import React from "react";
// import { ScrollView, StyleSheet, View } from "react-native";

// import { dummyCalendarDayData, dummyOffice } from "data/dummyData";
// import { H1 } from "styles/typography";
// import { Loading } from "common/components";
// import {
//   CalendarBlock,
//   Content,
//   DateBlock,
// } from "common/components/calendarBlock";
// import { Confession } from "./Confession";
// import { Invitatory } from "./Invitatory";
// import { OpeningSentence } from "./OpeningSentence";
// import { CalendarDay } from "data/calendarData/models";

// const {
//   office,
//   frequency,
//   daySection: { date, content },
//   openingSentence,
//   confession: { useLongFormInvitation, useDeaconOrLayAbsolution },
// } = dummyOffice;

// const Title = ({ frequency, office }) => (
//   <H1 style={styles.title}>{frequency + "\n" + `${office} Prayer`}</H1>
// );

// export const Office = () => {
//   // need to change this hook to make officeData `CalendarDay`s
//   // const [officeData, isLoading] = useFetch(
//   //   "https://data.dailyoffice2019.com/api/v1/calendar/2020-9-21?format=json"
//   // );

//   // these three lines just for using dummy data
//   const { date, season, commemorations } = dummyCalendarDayData;
//   const officeDay = new CalendarDay(new Date(date), season, commemorations);
//   const isLoading = false;

//   return !!isLoading ? (
//     <View style={styles.container}>
//       <Loading />
//     </View>
//   ) : (
//     <ScrollView>
//       <View style={styles.container}>
//         <Title frequency={frequency} office={office} />
//         <CalendarBlock weekday={officeDay.weekday}>
//           <DateBlock day={officeDay} />
//           <Content day={officeDay} showSeason={true} />
//         </CalendarBlock>
//         <OpeningSentence
//           text={openingSentence.text}
//           citation={openingSentence.citation}
//         />
//         <Confession
//           office={officeDay}
//           useLongFormInvitation={useLongFormInvitation}
//           useDeaconOrLayAbsolution={useDeaconOrLayAbsolution}
//         />
//         <Invitatory office={office} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     margin: 25,
//   },
//   title: {
//     marginBottom: 10,
//   },
// });
