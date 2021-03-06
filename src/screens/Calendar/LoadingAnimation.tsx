import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

/**
 * Loading animation while fetching data
 */
export const LoadingAnimation: React.FC<{ isLoading?: boolean }> = React.memo(
  ({ isLoading = true }) => {
    return (
      <View style={styles.footer}>
        {isLoading ? (
          <ActivityIndicator color="black" style={styles.loadingAnimation} />
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadingAnimation: {
    margin: 15,
  },
});
