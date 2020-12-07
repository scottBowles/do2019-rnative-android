import { ExternalLinks } from "assets/ExternalLinks";
import React from "react";
import { Text as NativeText } from "react-native";
import { StyledComponent } from "styled-components";

interface IProps {
  Title: StyledComponent<typeof NativeText, any, object, never>;
  Heading: StyledComponent<typeof NativeText, any, object, never>;
  Para: StyledComponent<typeof NativeText, any, object, never>;
  Caption: StyledComponent<typeof NativeText, any, object, never>;
  ParaLink: ({
    link,
    children,
  }: {
    link: ExternalLinks;
    children: React.ReactNode;
  }) => JSX.Element;
}

export const AboutContent = ({
  Title,
  Heading,
  Para,
  Caption,
  ParaLink,
}: IProps) => (
  <>
    <Title>About</Title>
    <Heading>WHAT IS THIS SITE FOR?</Heading>
    <Para>
      This site invites you to join with Christians around the world in praying
      with the Church, at any time or in any place you may find yourself. It
      makes it easy to pray daily morning, midday, evening, and compline
      (bedtime) prayer without flipping pages, searching for scripture readings
      or calendars, or interpreting rubrics. The prayers are presented from{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>{" "}
      of the Anglican Church in North America and reflect the ancient patterns
      of daily prayer Christians have used since the earliest days of the
      church.
    </Para>
    <Heading>WHAT IS THE DAILY OFFICE?</Heading>
    <Para>
      Daily Morning Prayer and Daily Evening Prayer are the established rites
      (offices) by which, both corporately and individually, God’s people
      annually encounter the whole of the Holy Scriptures, daily confess their
      sins and praise Almighty God, and offer timely thanksgivings, petitions,
      and intercessions.
    </Para>
    <Caption>From the Book of Common Prayer (2019)</Caption>
    <Heading>WHERE ARE THE PRAYERS TAKEN FROM?</Heading>
    <Para>
      These prayers are excellent for use by Christians of any tradition, but
      this site is intended to accurately reflect the liturgy, calendar, and
      rubrics of{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>{" "}
      of the Anglican Church in North America. The official texts can be found
      on the{" "}
      <ParaLink link={ExternalLinks.BcpOfficialText}>
        website of the Anglican Church in North America
      </ParaLink>
      .
    </Para>
    <Heading>
      IS THIS SITE A COMPLETE SUBSTITUTE FOR THE PAPER BOOK OF COMMON PRAYER?
    </Heading>
    <Para>
      No. While the site is a great and easy way to pray the Daily Offices of
      Morning, Midday, Evening, and Bedtime Prayer, there are many other
      excellent prayers and resources in the printed book.
    </Para>
    <Para>
      For personal devotions at home, some may like to use this site
      exclusively. Others, however, will prefer the meditative (and push
      notification-free) quality of reading from the physical book. This site
      can still be a great backup for occasions, such as traveling or at work,
      when you find yourself without a book.
    </Para>
    <Para>
      You can buy the 2019 Book of Common Prayer directly from{" "}
      <ParaLink link={ExternalLinks.AnglicanHousePrayerBooks}>
        Anglican House Publishers
      </ParaLink>
      , which graciously sponsors this site.
    </Para>
    <Heading>WHICH TRANSLATION OF THE BIBLE IS USED?</Heading>
    <Para>
      Scripture readings are taken from the English Standard Version. Readings
      from the Deuterocanon (Apocrypha) are taken from the Revised Standard
      Version. The Psalter is the New Coverdale Psalter from{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>
      .
    </Para>
    <Para style={{ fontStyle: "italic" }}>
      Scripture quotations are from the ESV® Bible (The Holy Bible, English
      Standard Version®), copyright © 2001 by Crossway Bibles, a publishing
      ministry of Good News Publishers. Used by permission. All rights reserved.
      | Revised Standard Version of the Bible, 2nd edition, copyright 1971, by
      the Division of Christian Education of the National Council of the
      Churches of Christ in the United States of America. Used by permission.
      All rights reserved.
    </Para>
    <Heading>IS THERE A SHORTER VERSION?</Heading>
    <Para>
      Yes, try out the{" "}
      <ParaLink link={ExternalLinks.DO2019Family}>
        Family Prayer version
      </ParaLink>
      , which follows the same basic pattern but is much shorter. It has its own
      dedicated settings page.
    </Para>
    <Heading>
      CAN I CUSTOMIZE THE PRAYERS TO THE WAY I USUALLY PRAY THE DAILY OFFICE?
    </Heading>
    <Para>
      Yes! We’ve chosen good default options so you can start praying right
      away. If you prefer different options, we offer many choices under
      "Settings". Currently, it is possible to change from a one-year to a
      two-year cycle of scripture readings, switch from a sixty-day cycle to a
      thirty-day cycle of psalms, and make other choices as permitted in the
      rubrics of{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>
      . More options are coming soon. Your settings will be saved the next time
      you pray on the same computer/phone/device and browser.
    </Para>
    <Heading>IS THIS AN OFFICIAL PROJECT?</Heading>
    <Para>
      This site and app were built as a personal project. They intend, as much
      as possible, to accurately reflect{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>{" "}
      of the Anglican Church in North America. It is now financially supported
      by{" "}
      <ParaLink link={ExternalLinks.AnglicanHousePublishers}>
        Anglican House Publishers
      </ParaLink>
      , which prints the prayerbook.
    </Para>
    <Heading>
      WHY SHOULD I USE THIS SITE INSTEAD OF THE OTHERS ALSO AVAILABLE?
    </Heading>
    <Para>
      This site and app are built to be streamlined, clean, and easy-to-use
      while being extremely flexible for those who want a greater level of
      control over how they pray. They are also very accurate and faithful to
      the text, rubrics, and calendar of{" "}
      <Para style={{ fontStyle: "italic" }}>
        The Book of Common Prayer (2019)
      </Para>
      . All that said, please use what works for you.{" "}
      <ParaLink link={ExternalLinks.LegeremeBcp2019}>
        Legereme / BCP 2019
      </ParaLink>{" "}
      or{" "}
      <ParaLink link={ExternalLinks.IncarnationBcsME}>
        Church of the Incarnation, Bryan/College Station
      </ParaLink>{" "}
      are other great options for the 2019 prayer book texts.{" "}
      <ParaLink link={ExternalLinks.VeniteApp}>Venite.app</ParaLink>,{" "}
      <ParaLink link={ExternalLinks.StBedesBreviary}>
        St. Bede's Breviary
      </ParaLink>
      ,{" "}
      <ParaLink link={ExternalLinks.MissionStClare}>Mission St. Clare</ParaLink>
      , and{" "}
      <ParaLink link={ExternalLinks.DailyOfficeApp}>dailyoffice.app</ParaLink>{" "}
      are great options for the 1979 prayer book texts.
    </Para>
    <Heading>HOW CAN I USE THIS SITE TO PRAY IN A GROUP OR REMOTELY?</Heading>
    <Para>
      After you set up your preferred settings, copy the link from the "Praying
      in a group" section at the bottom of the page. Share this link via email,
      text message, Facebook, or your website. This ensures everyone will be
      praying with the same settings.
    </Para>
    <Para>
      Many churches have also choosen to display dailyoffice2019.com with the
      "Share screen" or "Presentation" mode of Zoom, Google Meet, Facebok Live,
      or other live streaming or pre-recorded platforms, so those watching can
      follow along.
    </Para>
    <Heading>WHAT NEW FEATURES ARE COMING SOON?</Heading>
    <Para>Traditional language version</Para>
    <Para>More audio options</Para>
    <Para>
      Ability to create an account to save your settings across multiple
      computers, phones, and browsers
    </Para>
    <Para>Communion and Ante-communion services</Para>
    <Para>An easier group-praying experience</Para>
    <Para>Biographies for individual saints</Para>
    <Para>
      Much more ... if you would like to request a feature, email us at{" "}
      <ParaLink link={ExternalLinks.DO2019MailTo}>
        feedback@dailyoffice2019.com
      </ParaLink>
      .
    </Para>
    <Heading>WHERE CAN I PROVIDE FEEDBACK?</Heading>
    <Para>
      Send an email to{" "}
      <ParaLink link={ExternalLinks.DO2019MailTo}>
        feedback@dailyoffice2019.com
      </ParaLink>{" "}
      or post in our{" "}
      <ParaLink link={ExternalLinks.DO2019Facebook}>Facebook group</ParaLink>.
      We welcome suggestions for new features or ways to make this site easier
      to use. We especially appreciate corrections for errors in the text,
      calendar, or rubrics. TODO: OPEN FB LINK IN FB APP?
    </Para>
    <Heading>HOW MUCH OF SCRIPTURE IS READ?</Heading>
    <Para>
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
      is included, usually in Morning Prayer. For major feasts of our Lord, two
      proper lessons are included.
    </Para>
    <Caption>Adapted from the Book of Common Prayer (2019)</Caption>
    <Heading>CAN I HELP BUILD THIS SITE?</Heading>
    <Para>Yes!</Para>
    <Para>
      If you are a coder, go to the{" "}
      <ParaLink link={ExternalLinks.DO2019GitHub}>GitHub repo</ParaLink>, look
      at the issues list, and consider contributing to the code base. If you
      have an idea that isn't listed, just submit it as an issue and we can
      discuss.
    </Para>
    <Para>
      If you aren't a coder, there are many other ways to help. Get in touch at{" "}
      <ParaLink link={ExternalLinks.DO2019MailTo}>
        feedback@dailyoffice2019.com
      </ParaLink>
      .
    </Para>
    <Heading>
      WHY HASN'T THE ADDRESS BEEN UPDATED TO DAILYOFFICE2020.COM?
    </Heading>
    <Para>
      The 2019 in the site's address reflects that this site uses prayers from
      the 2019 edition of the Book of Common Prayer. It doesn't reflect the
      current year.
    </Para>
    <Heading>ACKNOWLEDGMENTS</Heading>
    <Para>
      This site was initially created by Benjamin Locher. Many others have
      contributed since then. Thanks especially to:
    </Para>
    <Para>
      -{" "}
      <ParaLink link={ExternalLinks.AnglicanCompassLectionarySpreadsheet}>
        Fr. Joshua Steele at Anglican Compass
      </ParaLink>{" "}
      for his spreadsheet of readings and ongoing advice and publicity
    </Para>
    <Para>
      -{" "}
      <ParaLink link={ExternalLinks.AnglicanCompassBCPDesign}>
        Fr. Ben Jefferies
      </ParaLink>{" "}
      for his design inspiration, advice, and coordination with Anglican House
      Publishers (the publisher of the prayerbook)
    </Para>
    <Para>
      -{" "}
      <ParaLink link={ExternalLinks.LiturgicalCalendar}>
        liturgical-calendar.com
      </ParaLink>{" "}
      for providing the Sunday and holy day lectionary
    </Para>
    <Para>
      -{" "}
      <ParaLink link={ExternalLinks.StAelfricCanticleGuide}>
        Fr. Matthew Brench at St. Aelfric's Customary
      </ParaLink>{" "}
      for his work on the canticle schedule and other parts of the site
    </Para>
    <Para>
      -{" "}
      <ParaLink link={ExternalLinks.AnglicanHousePublishers}>
        Anglican House Publishers
      </ParaLink>{" "}
      for financial support
    </Para>
    <Para>
      Thanks also to the many users who have provided feedback, suggestions, and
      bug reports via{" "}
      <ParaLink link={ExternalLinks.DO2019MailTo}>
        feedback@dailyoffice2019.com
      </ParaLink>{" "}
      or the{" "}
      <ParaLink link={ExternalLinks.DO2019Facebook}>Facebook Group</ParaLink>.
      TODO: OPEN FB IN FB APP?
    </Para>
  </>
);
