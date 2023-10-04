import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { Notification } from "../screens/Notification";
import { View, Text } from "react-native";
import { MainNavigation } from "./mainNavigation";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Notification" component={Notification} />
      <Screen name="MainNavigation" component={MainNavigation} />
    </Navigator>
  );
};

export const AuthNavigation = () => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={() => {
          return (
            <View>
              <Text>Login</Text>
            </View>
          );
        }}
      />
    </Navigator>
  );
};
