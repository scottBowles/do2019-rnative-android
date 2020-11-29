import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { BibleIcon, CalendarDarkIcon } from "assets/icons";
import { OutlineBtn } from "common/components";
import { Caption, H3, HR, P, Text } from "styles/typography";
import { ExternalLinks } from "assets/externalLinks";

export const About: React.FC = () => (
  <ScrollView>
    <View style={styles.container}>
      <H3>WHAT IS THIS SITE FOR?</H3>
      <P>
        This site invites you to join with Christians around the world in
        praying with the Church, at any time or in any place you may find
        yourself. It makes it easy to pray daily morning, midday, evening, and
        compline (bedtime) prayer without flipping pages, searching for
        scripture readings or calendars, or interpreting rubrics. The prayers
        are presented from{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>{" "}
        of the Anglican Church in North America and reflect the ancient patterns
        of daily prayer Christians have used since the earliest days of the
        church.
      </P>
      <H3>WHAT IS THE DAILY OFFICE?</H3>
      <P>
        Daily Morning Prayer and Daily Evening Prayer are the established rites
        (offices) by which, both corporately and individually, God’s people
        annually encounter the whole of the Holy Scriptures, daily confess their
        sins and praise Almighty God, and offer timely thanksgivings, petitions,
        and intercessions.
      </P>
      <Caption>From the Book of Common Prayer (2019)</Caption>
      <H3>WHERE ARE THE PRAYERS TAKEN FROM?</H3>
      <P>
        These prayers are excellent for use by Christians of any tradition, but
        this site is intended to accurately reflect the liturgy, calendar, and
        rubrics of{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>{" "}
        of the Anglican Church in North America. The official texts can be found
        on the{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.BcpOfficialText);
          }}
        >
          website of the Anglican Church in North America
        </P>
        . // TODO: LINK STYLE
      </P>
      <H3>
        IS THIS SITE A COMPLETE SUBSTITUTE FOR THE PAPER BOOK OF COMMON PRAYER?
      </H3>
      <P>
        No. While the site is a great and easy way to pray the Daily Offices of
        Morning, Midday, Evening, and Bedtime Prayer, there are many other
        excellent prayers and resources in the printed book.
      </P>
      <P>
        For personal devotions at home, some may like to use this site
        exclusively. Others, however, will prefer the meditative (and push
        notification-free) quality of reading from the physical book. This site
        can still be a great backup for occasions, such as traveling or at work,
        when you find yourself without a book.
      </P>
      <P>
        You can buy the 2019 Book of Common Prayer directly from{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.AnglicanHousePrayerBooks);
          }}
        >
          Anglican House Publishers
        </P>
        , which graciously sponsors this site. //TODO: LINK STYLE
      </P>
      <H3>WHICH TRANSLATION OF THE BIBLE IS USED?</H3>
      <P>
        Scripture readings are taken from the English Standard Version. Readings
        from the Deuterocanon (Apocrypha) are taken from the Revised Standard
        Version. The Psalter is the New Coverdale Psalter from{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>.
      </P>
      <P style={{ fontStyle: "italic" }}>
        Scripture quotations are from the ESV® Bible (The Holy Bible, English
        Standard Version®), copyright © 2001 by Crossway Bibles, a publishing
        ministry of Good News Publishers. Used by permission. All rights
        reserved. | Revised Standard Version of the Bible, 2nd edition,
        copyright 1971, by the Division of Christian Education of the National
        Council of the Churches of Christ in the United States of America. Used
        by permission. All rights reserved.
      </P>
      <H3>IS THERE A SHORTER VERSION?</H3>
      <P>
        Yes, try out the{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019Family);
          }}
        >
          Family Prayer version
        </P>
        , which follows the same basic pattern but is much shorter. It has its
        own dedicated settings page. TODO: LINK STYLE
      </P>
      <H3>
        CAN I CUSTOMIZE THE PRAYERS TO THE WAY I USUALLY PRAY THE DAILY OFFICE?
      </H3>
      <P>
        Yes! We’ve chosen good default options so you can start praying right
        away. If you prefer different options, we offer many choices under
        "Settings". Currently, it is possible to change from a one-year to a
        two-year cycle of scripture readings, switch from a sixty-day cycle to a
        thirty-day cycle of psalms, and make other choices as permitted in the
        rubrics of{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>.
        More options are coming soon. Your settings will be saved the next time
        you pray on the same computer/phone/device and browser.
      </P>
      <H3>IS THIS AN OFFICIAL PROJECT?</H3>
      <P>
        This site and app were built as a personal project. They intend, as much
        as possible, to accurately reflect{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>{" "}
        of the Anglican Church in North America. It is now financially supported
        by{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.AnglicanHousePublishers);
          }}
        >
          Anglican House Publishers
        </P>
        , which prints the prayerbook. TODO: LINK STYLE
      </P>
      <H3>WHY SHOULD I USE THIS SITE INSTEAD OF THE OTHERS ALSO AVAILABLE?</H3>
      <P>
        This site and app are built to be streamlined, clean, and easy-to-use
        while being extremely flexible for those who want a greater level of
        control over how they pray. They are also very accurate and faithful to
        the text, rubrics, and calendar of{" "}
        <P style={{ fontStyle: "italic" }}>The Book of Common Prayer (2019)</P>.
        All that said, please use what works for you.{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.LegeremeBcp2019);
          }}
        >
          Legereme / BCP 2019
        </P>{" "}
        or{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.IncarnationBcsME);
          }}
        >
          Church of the Incarnation, Bryan/College Station
        </P>{" "}
        are other great options for the 2019 prayer book texts.{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.VeniteApp);
          }}
        >
          Venite.app
        </P>
        ,{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.StBedesBreviary);
          }}
        >
          St. Bede's Breviary
        </P>
        ,{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.MissionStClare);
          }}
        >
          Mission St. Clare
        </P>
        , and{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DailyOfficeApp);
          }}
        >
          dailyoffice.app
        </P>{" "}
        are great options for the 1979 prayer book texts. TODO: 6 LINK STYLES
      </P>
      <H3>HOW CAN I USE THIS SITE TO PRAY IN A GROUP OR REMOTELY?</H3>
      <P>
        After you set up your preferred settings, copy the link from the
        "Praying in a group" section at the bottom of the page. Share this link
        via email, text message, Facebook, or your website. This ensures
        everyone will be praying with the same settings.
      </P>
      <P>
        Many churches have also choosen to display dailyoffice2019.com with the
        "Share screen" or "Presentation" mode of Zoom, Google Meet, Facebok
        Live, or other live streaming or pre-recorded platforms, so those
        watching can follow along.
      </P>
      <H3>WHAT NEW FEATURES ARE COMING SOON?</H3>
      <P>Traditional language version</P>
      <P>More audio options</P>
      <P>
        Ability to create an account to save your settings across multiple
        computers, phones, and browsers
      </P>
      <P>Communion and Ante-communion services</P>
      <P>An easier group-praying experience</P>
      <P>Biographies for individual saints</P>
      <P>
        Much more ... if you would like to request a feature, email us at
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019MailTo);
          }}
        >
          feedback@dailyoffice2019.com
        </P>
        . TODO: LINK STYLE
      </P>
      <H3>WHERE CAN I PROVIDE FEEDBACK?</H3>
      <P>
        Send an email to{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019MailTo);
          }}
        >
          feedback@dailyoffice2019.com
        </P>{" "}
        or post in our{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019Facebook);
          }}
        >
          Facebook group
        </P>
        . We welcome suggestions for new features or ways to make this site
        easier to use. We especially appreciate corrections for errors in the
        text, calendar, or rubrics. TODO: 2 LINK STYLES && OPEN FB LINK IN FB
        APP?
      </P>
      <H3>HOW MUCH OF SCRIPTURE IS READ?</H3>
      <P>
        The Old Testament is read in its entirety once each year (with the
        exception of a few passages in Leviticus, Numbers, Joshua, Judges, Ezra,
        Nehemiah, Ezekiel, and the majority of Chronicles). The Gospels and Acts
        are read in their entirety twice each year, at Morning Prayer during the
        first part of the year, at Evening Prayer during the second part of the
        year. The Epistles are read twice each year in the opposite pattern,
        except for the Revelation to John, which is read only once, during the
        Advent season. Select passages of the Apocrypha have been retained. In
        general, readings move continuously through books of the Bible,
        interrupted only by Holy Days. For most Holy Days a single proper lesson
        is included, usually in Morning Prayer. For major feasts of our Lord,
        two proper lessons are included.
      </P>
      <Caption>Adapted from the Book of Common Prayer (2019)</Caption>
      <H3>CAN I HELP BUILD THIS SITE?</H3>
      <P>Yes!</P>
      <P>
        If you are a coder, go to the{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019GitHub);
          }}
        >
          GitHub repo
        </P>
        , look at the issues list, and consider contributing to the code base.
        If you have an idea that isn't listed, just submit it as an issue and we
        can discuss. TODO: LINK STYLE
      </P>
      <P>
        If you aren't a coder, there are many other ways to help. Get in touch
        at{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019MailTo);
          }}
        >
          feedback@dailyoffice2019.com
        </P>
        . TODO: LINK STYLE
      </P>
      <H3>WHY HASN'T THE ADDRESS BEEN UPDATED TO DAILYOFFICE2020.COM?</H3>
      <P>
        The 2019 in the site's address reflects that this site uses prayers from
        the 2019 edition of the Book of Common Prayer. It doesn't reflect the
        current year.
      </P>
      <H3>ACKNOWLEDGMENTS</H3>
      <P>
        This site was initially created by Benjamin Locher. Many others have
        contributed since then. Thanks especially to:
      </P>
      <P>
        -{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(
              ExternalLinks.AnglicanCompassLectionarySpreadsheet
            );
          }}
        >
          Fr. Joshua Steele at Anglican Compass
        </P>{" "}
        for his spreadsheet of readings and ongoing advice and publicity TODO:
        LINK STYLE
      </P>
      <P>
        -{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.AnglicanCompassBCPDesign);
          }}
        >
          Fr. Ben Jefferies
        </P>{" "}
        for his design inspiration, advice, and coordination with Anglican House
        Publishers (the publisher of the prayerbook) TODO: LINK STYLE
      </P>
      <P>
        -{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.LiturgicalCalendar);
          }}
        >
          liturgical-calendar.com
        </P>{" "}
        for providing the Sunday and holy day lectionary TODO: LINK STYLE
      </P>
      <P>
        -{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.StAelfricCanticleGuide);
          }}
        >
          Fr. Matthew Brench at St. Aelfric's Customary
        </P>{" "}
        for his work on the canticle schedule and other parts of the site TODO:
        LINK STYLE
      </P>
      <P>
        -{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.AnglicanHousePublishers);
          }}
        >
          Anglican House Publishers
        </P>{" "}
        for financial support TODO: LINK STYLE
      </P>
      <P>
        Thanks also to the many users who have provided feedback, suggestions,
        and bug reports via{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019MailTo);
          }}
        >
          feedback@dailyoffice2019.com
        </P>{" "}
        or the{" "}
        <P
          onPress={() => {
            WebBrowser.openBrowserAsync(ExternalLinks.DO2019Facebook);
          }}
        >
          Facebook Group
        </P>
        . TODO: 2 LINK STYLES -- OPEN FB IN FB APP?
      </P>
      <HR />
      <P>testtesttest</P>
      <H3>RESOURCES</H3>
      <View style={styles.buttonsContainer}>
        <OutlineBtn style={styles.outlineBtn}>
          <BibleIcon />
          <Text>
            <Text style={styles.firstLetter}>P</Text>
            <Text style={styles.item}>salter</Text>
          </Text>
        </OutlineBtn>
        <OutlineBtn style={styles.outlineBtn}>
          <CalendarDarkIcon />
          <Text>
            <Text style={styles.firstLetter}>C</Text>
            <Text style={styles.item}>alendar (ical file)</Text>
          </Text>
        </OutlineBtn>
      </View>
      <H3>WEB ADDRESS</H3>
      <P
        onPress={() => {
          WebBrowser.openBrowserAsync(ExternalLinks.DO2019);
        }}
      >
        https://www.dailyoffice2019.com/ TODO:LINK STYLE
      </P>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 22,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  outlineBtn: {
    flexDirection: "row",
  },
  linkItem: {
    borderRadius: 10,
  },
  item: {
    fontSize: 11,
    textTransform: "uppercase",
  },
  firstLetter: {
    fontSize: 15,
    textTransform: "uppercase",
  },
  icons: {
    marginRight: 4,
  },
});
