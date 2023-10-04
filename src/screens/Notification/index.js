import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { StatusBar } from "expo-status-bar";

export const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Norification Screen</Text>
      <View style={styles.rowContainer}>
        <Button
          title="Call now"
          style={{
            width: 200,
            backgroundColor: "red",
          }}
          action={() => {
            navigation.navigate("MainNavigation");
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
