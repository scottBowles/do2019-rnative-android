import * as WebBrowser from "expo-web-browser";
import React, { ReactNode } from "react";

interface WithLinkTypes {
  link: string;
  children?: ReactNode;
}

/**
 * Allows a url to be passed to a `link` prop for external links
 * @param Component Component to be made an external link
 */
export function withLink<P extends object>(Component: React.ComponentType<P>) {
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
