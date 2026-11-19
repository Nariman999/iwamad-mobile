import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Nariman Bakitbekov</Text>

      <Pressable
        style={styles.button}
        onPress={() => setLikes((prev) => prev + 1)}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <Text style={styles.likes}>Likes: {likes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  name: {
    fontSize: 18,
  },
  button: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2563eb",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  likes: {
    fontSize: 16,
  },
});