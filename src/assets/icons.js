import React from "react";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const ArrowLeft = ({ size = 14, color = "black", ...props }) => (
  <FontAwesome name="arrow-left" size={size} color={color} />
);

export const ArrowRight = ({ size = 14, color = "black", ...props }) => (
  <FontAwesome name="arrow-right" size={size} color={color} />
);

export const CrossIcon = ({ size = 14, color = "black", ...props }) => (
  <FontAwesome5 name="cross" size={size} color={color} {...props} />
);

export const ClockIcon = ({ size = 12, color = "black", ...props }) => (
  <Feather name="clock" size={size} color={color} {...props} />
);

export const CalendarIcon = ({ size = 12, color = "black", ...props }) => (
  <MaterialCommunityIcons
    name="calendar-month-outline"
    size={size}
    color={color}
    {...props}
  />
);

export const CogIcon = ({ size = 12, color = "black", ...props }) => (
  <FontAwesome name="cog" size={size} color={color} {...props} />
);

export const ExternalLinkIcon = ({ size = 9, color = "black", ...props }) => (
  <FontAwesome5 name="external-link-alt" size={size} color={color} {...props} />
);
