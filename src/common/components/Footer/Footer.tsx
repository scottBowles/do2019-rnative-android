import React from "react";
import { HR } from "styles/typography";

import { AnglicanHousePublishers } from "./AnglicanHousePublishers";
import { EmailSignUp } from "./EmailSignUp";
import { FeedbackWelcome } from "./FeedbackWelcome";
import { FindUs } from "./FindUs";
import { FooterResources } from "./FooterResources";
import { PrivacyPolicyLink } from "./PrivacyPolicyLink";
import { ShareSettings } from "./ShareSettings";

export const Footer: React.FC = () => (
  <>
    <HR />
    <FooterResources />
    <FindUs />
    <AnglicanHousePublishers />
    <ShareSettings />
    <FeedbackWelcome />
    <EmailSignUp />
    <PrivacyPolicyLink />
  </>
);
