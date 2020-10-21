import React from "react";
import { ComplineConfession } from "./ComplineConfession";
import { GreaterOfficeConfession } from "./GreaterOfficeConfession";

export const Confession = (props) => {
  switch (props.office) {
    case "morning":
    case "evening":
      return (
        <GreaterOfficeConfession
          useLongForm={props.useLongFormInvitation}
          useDeaconOrLayAbsolution={props.useDeaconOrLayAbsolution}
        />
      );
    case "compline":
      return <ComplineConfession />;
    default:
      return null;
  }
};
