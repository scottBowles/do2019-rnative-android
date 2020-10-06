import React from "react";
import { ComplineConfession, GreaterOfficeConfession } from "./";

const Confession = (props) => {
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

export default Confession;
