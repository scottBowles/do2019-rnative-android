import { ExternalLinks } from "assets/ExternalLinks";
import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { H1, H3, P, PLink } from "styles/typography";

export const PrivacyPolicy: React.FC = () => (
  <ScrollView>
    <View style={styles.container}>
      <H1>Privacy Policy</H1>
      <P>
        This policy applies to all information collected or submitted on{" "}
        <P style={styles.smallItalic}>
          The Daily Office, Morning and Evening Prayer according to the Book of
          Common Prayer, 2019, Anglican Church in North America
        </P>{" "}
        website and apps for iOS, Android, and any other devices and platforms.
      </P>
      <H3>INFORMATION WE COLLECT</H3>
      <P>
        We do not require the collection of any information to use the site or
        apps.
      </P>
      <P>
        You may optionally add an email address which is used to send you
        occasional email updates. You may unsubscribe at any time. In order to
        facilitate email messages, your email address may be shared with
        services used to send email, including:
      </P>
      <PLink link={ExternalLinks.NetlifyPrivacyPolicy}>Netlify</PLink>
      <PLink link={ExternalLinks.MailChimpPrivacyPolicy}>MailChimp</PLink>
      <P>We never sell or share any of your information.</P>
      <H3>TECHNICAL BASICS</H3>
      <P>
        We use local storage on the site or app to retain your preferences. This
        storage is not connected to any personally identifiable information.
      </P>
      <P>
        We or our hosting provider may also store basic technical information,
        such as your IP address, in temporary memory or logs.
      </P>
      <H3>ANALYTICS</H3>
      <P>
        The site and app collects aggregate, anonymous statistics, such as the
        percentage of users who use particular features, to improve the app.
      </P>
      <P>
        The app or site may use the following third party services for anonymous
        analytics tracking:
      </P>
      <PLink link={ExternalLinks.NetlifyPrivacyPolicy}>Netlify</PLink>
      <PLink link={ExternalLinks.GoogleAnalyticsPrivacy}>
        Google Analytics
      </PLink>
      <PLink link={ExternalLinks.FirebaseAnalyticsPrivacy}>
        Firebase Analytics
      </PLink>
      <H3>INFORMATION USAGE</H3>
      <P>
        We use the information we collect to operate and improve our website,
        apps, and support.
      </P>
      <P>
        We do not share personal information with outside parties except to the
        extent necessary to accomplish the app’s functionality. We may share
        anonymous, aggregate statistics with outside parties.
      </P>
      <P>
        We may disclose your information in response to subpoenas, court orders,
        or other legal requirements; to exercise our legal rights or defend
        against legal claims; to investigate, prevent, or take action regarding
        illegal activities, suspected fraud or abuse; or to protect our rights
        and property.
      </P>
      <H3>SECURITY</H3>
      <P>
        We implement a variety of security measures to help keep your
        information secure. For instance, all communication with the app and
        website requires HTTPS.
      </P>
      <H3>THIRD-PARTY LINKS AND CONTENT</H3>
      <P>
        The site and apps display links and content to third-party sites. These
        have their own independent privacy policies, and we have no
        responsibility or liability for their content or activities.
      </P>
      <H3>CALIFORNIA ONLINE PRIVACY PROTECTION ACT COMPLIANCE</H3>
      <P>
        We comply with the California Online Privacy Protection Act. We
        therefore will not distribute your personal information to outside
        parties without your consent.
      </P>
      <H3>CHILDREN’S ONLINE PRIVACY PROTECTION ACT COMPLIANCE</H3>
      <P>
        We never collect or maintain information at our website from those we
        actually know are under 13, and no part of our website is structured to
        attract anyone under 13.
      </P>
      <H3>INFORMATION FOR EUROPEAN UNION USERS</H3>
      <P>
        By using the app or site and providing your information, you authorize
        us to collect, use, and store your information outside of the European
        Union.
      </P>
      <H3>INTERNATIONAL TRANSFERS OF INFORMATION</H3>
      <P>
        Information may be processed, stored, and used outside of the country in
        which you are located. Data privacy laws vary across jurisdictions, and
        different laws may be applicable to your data depending on where it is
        processed, stored, or used.
      </P>
      <H3>YOUR CONSENT</H3>
      <P>By using our site or apps, you consent to our privacy policy.</P>
      <H3>CONTACTING US</H3>
      <P>
        If you have questions regarding this privacy policy, you may email{" "}
        <PLink link={ExternalLinks.DO2019MailTo}>
          feedback@dailyoffice2019.com
        </PLink>
        .
      </P>
      <Footer />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 22,
  },
  smallItalic: {
    fontSize: 12.8,
    fontStyle: "italic",
  },
});
