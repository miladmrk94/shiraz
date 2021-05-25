import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} {...otherProps}></TextInput>
      {icon && (
        <Ionicons name={icon} size={24} color="#FFF" style={styles.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginTop: 12 },
  icon: {
    position: "absolute",
    marginLeft: 310,
    height: 37,
    alignSelf: "center",
  },
  text: {
    width: "90%",
    height: 50,
    backgroundColor: "#43abf4",
    borderRadius: 15,
    textAlign: "right",
    fontFamily: "IranSans",
    fontSize: 16,
    marginBottom: 15,
    color: "#fff",
    paddingLeft: 20,
  },
});
