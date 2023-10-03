import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";

import styles from "./style";

export const Button = ({ title, style, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={[styles.container, style]}>
        <Text style={styles.textStyle}>{title || "Default"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const LargeButton = () => {
  return null;
};
