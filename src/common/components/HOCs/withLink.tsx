import React from "react";
import * as WebBrowser from "expo-web-browser";

interface WithLinkTypes {
  link: string;
}

/**
 * Allows a url to be passed to a `link` prop for external links
 * @param Component Component to be made an external link
 */
export const withLink = <P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P & WithLinkTypes> => ({ link, ...props }) => (
  <Component
    onPress={() => {
      WebBrowser.openBrowserAsync(link);
    }}
    {...(props as P)}
  />
);
