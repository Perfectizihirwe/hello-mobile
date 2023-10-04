import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { StatusBar } from "expo-status-bar";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.rowContainer}>
        <Button
          title="Notification"
          style={{
            width: 200,
            backgroundColor: "red",
          }}
          action={() => {
            navigation.navigate("Notification");
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
