import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  useWindowDimensions,
  StatusBar,
  Animated,
  ActivityIndicator,
} from "react-native";

const seasonArray = [
  //Spring
  "🌱",
  //Summer
  "🔆",
  //Fall
  "🍂",
  //Winter
  "❄",
];

const Loading: React.FC = () => {
  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.logo}>&#128197;</Text>
      <Text style={styles.logoText}>Mojender</Text>
      <ActivityIndicator size={50}></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {},
  logo: { fontSize: 100 },
  logoText: { color: "white", fontSize: 25 },
  loadingAnimationContainer: {},
  loadingCircle: { fontSize: 50 },
});

export default Loading;
