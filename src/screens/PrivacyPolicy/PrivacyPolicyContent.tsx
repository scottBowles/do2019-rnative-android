import { ExternalLinks } from "assets/ExternalLinks";
import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import { StyledComponent } from "styled-components";

const styles = StyleSheet.create({
  smallItalic: {
    fontSize: 12.8,
    fontStyle: "italic",
  },
});

interface IProps {
  Title: StyledComponent<typeof NativeText, any, object, never>;
  Heading: StyledComponent<typeof NativeText, any, object, never>;
  Para: StyledComponent<typeof NativeText, any, object, never>;
  ParaLink: ({
    link,
    children,
  }: {
    link: ExternalLinks;
    children: React.ReactNode;
  }) => JSX.Element;
}

export const PrivacyPolicyContent = ({
  Title,
  Heading,
  Para,
  ParaLink,
}: IProps) => (
  <>
    <Title>Privacy Policy</Title>
    <Para>
      This policy applies to all information collected or submitted on{" "}
      <Para style={styles.smallItalic}>
        The Daily Office, Morning and Evening Prayer according to the Book of
        Common Prayer, 2019, Anglican Church in North America
      </Para>{" "}
      website and apps for iOS, Android, and any other devices and platforms.
    </Para>
    <Heading>INFORMATION WE COLLECT</Heading>
    <Para>
      We do not require the collection of any information to use the site or
      apps.
    </Para>
    <Para>
      You may optionally add an email address which is used to send you
      occasional email updates. You may unsubscribe at any time. In order to
      facilitate email messages, your email address may be shared with services
      used to send email, including:
    </Para>
    <ParaLink link={ExternalLinks.NetlifyPrivacyPolicy}>Netlify</ParaLink>
    <ParaLink link={ExternalLinks.MailChimpPrivacyPolicy}>MailChimp</ParaLink>
    <Para>We never sell or share any of your information.</Para>
    <Heading>TECHNICAL BASICS</Heading>
    <Para>
      We use local storage on the site or app to retain your preferences. This
      storage is not connected to any personally identifiable information.
    </Para>
    <Para>
      We or our hosting provider may also store basic technical information,
      such as your IP address, in temporary memory or logs.
    </Para>
    <Heading>ANALYTICS</Heading>
    <Para>
      The site and app collects aggregate, anonymous statistics, such as the
      percentage of users who use particular features, to improve the app.
    </Para>
    <Para>
      The app or site may use the following third party services for anonymous
      analytics tracking:
    </Para>
    <ParaLink link={ExternalLinks.NetlifyPrivacyPolicy}>Netlify</ParaLink>
    <ParaLink link={ExternalLinks.GoogleAnalyticsPrivacy}>
      Google Analytics
    </ParaLink>
    <ParaLink link={ExternalLinks.FirebaseAnalyticsPrivacy}>
      Firebase Analytics
    </ParaLink>
    <Heading>INFORMATION USAGE</Heading>
    <Para>
      We use the information we collect to operate and improve our website,
      apps, and support.
    </Para>
    <Para>
      We do not share personal information with outside parties except to the
      extent necessary to accomplish the app’s functionality. We may share
      anonymous, aggregate statistics with outside parties.
    </Para>
    <Para>
      We may disclose your information in response to subpoenas, court orders,
      or other legal requirements; to exercise our legal rights or defend
      against legal claims; to investigate, prevent, or take action regarding
      illegal activities, suspected fraud or abuse; or to protect our rights and
      property.
    </Para>
    <Heading>SECURITY</Heading>
    <Para>
      We implement a variety of security measures to help keep your information
      secure. For instance, all communication with the app and website requires
      HTTPS.
    </Para>
    <Heading>THIRD-PARTY LINKS AND CONTENT</Heading>
    <Para>
      The site and apps display links and content to third-party sites. These
      have their own independent privacy policies, and we have no responsibility
      or liability for their content or activities.
    </Para>
    <Heading>CALIFORNIA ONLINE PRIVACY PROTECTION ACT COMPLIANCE</Heading>
    <Para>
      We comply with the California Online Privacy Protection Act. We therefore
      will not distribute your personal information to outside parties without
      your consent.
    </Para>
    <Heading>CHILDREN’S ONLINE PRIVACY PROTECTION ACT COMPLIANCE</Heading>
    <Para>
      We never collect or maintain information at our website from those we
      actually know are under 13, and no part of our website is structured to
      attract anyone under 13.
    </Para>
    <Heading>INFORMATION FOR EUROPEAN UNION USERS</Heading>
    <Para>
      By using the app or site and providing your information, you authorize us
      to collect, use, and store your information outside of the European Union.
    </Para>
    <Heading>INTERNATIONAL TRANSFERS OF INFORMATION</Heading>
    <Para>
      Information may be processed, stored, and used outside of the country in
      which you are located. Data privacy laws vary across jurisdictions, and
      different laws may be applicable to your data depending on where it is
      processed, stored, or used.
    </Para>
    <Heading>YOUR CONSENT</Heading>
    <Para>By using our site or apps, you consent to our privacy policy.</Para>
    <Heading>CONTACTING US</Heading>
    <Para>
      If you have questions regarding this privacy policy, you may email{" "}
      <ParaLink link={ExternalLinks.DO2019MailTo}>
        feedback@dailyoffice2019.com
      </ParaLink>
      .
    </Para>
  </>
);
