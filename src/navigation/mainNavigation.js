import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <Navigator>
      <Screen
        options={{
          tabBarActiveTintColor: "red",
        }}
        name="Home"
        component={() => {
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Home</Text>
          </View>;
        }}
      />
      <Screen
        name="alert"
        component={() => {
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Alert</Text>
          </View>;
        }}
      />
    </Navigator>
  );
};
