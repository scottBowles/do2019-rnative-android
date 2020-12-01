import React from "react";
import * as WebBrowser from "expo-web-browser";

interface WithLinkTypes {
  link: string;
}

/**
 * Allows a url to be passed to a `link` prop for external links
 * @param Co Component to be made an external link
 */
export function withLink<P extends {}>(Component: React.ComponentType<P>) {
  const C = (props: WithLinkTypes & P) => (
    <Component
      onPress={() => {
        WebBrowser.openBrowserAsync(props.link);
      }}
      {...(props as P)}
    />
  );
  return C;
}
