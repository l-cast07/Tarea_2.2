import { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.luz,
          { backgroundColor: isOn ? "yellow" : "gray" }
        ]}
      />
      <Switch value={isOn} onValueChange={setIsOn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  luz: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 }
});