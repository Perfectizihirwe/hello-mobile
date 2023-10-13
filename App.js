import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "./src/navigation/rootNavigation";
import AppIntroSlider from "react-native-app-intro-slider";
import { useState } from "react";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const RenderItem = (item) => {
    console.log(item.title, "Item from function");
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const bottomButton = () => {
    return (
      <View>
        <Text style={styles.text}>Next</Text>
      </View>
    );
  };

  return showRealApp ? (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  ) : (
    <AppIntroSlider
      data={slides}
      onDone={() => setShowRealApp(true)}
      renderItem={(item) => RenderItem(item.item)}
      bottomButton={bottomButton}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#000",
    textAlign: "center",
  },
});
