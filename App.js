import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, LargeButton } from "./src/components/Button/button";

export const GG = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.rowContainer}>
        <Button
          title="Call now"
          style={{
            width: 200,
            backgroundColor: "red",
          }}
          action={() => {
            alert("Call me");
          }}
        />
        <Button
          style={{
            backgroundColor: "green",
            borderRadius: 0,
          }}
          action={() => {
            alert("Find doctor");
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
