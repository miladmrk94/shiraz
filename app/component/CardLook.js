import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardLook({ ax, title, text }) {
  return (
    <View
      style={{
        marginLeft: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "90%",
        height: 100,
        margin: 8,
        borderRadius: 30,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 12,
        elevation: 25,
        alignItems: "center",
      }}
    >
      <Image
        source={ax}
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          marginLeft: 20,
        }}
      />
      <View style={{ marginHorizontal: 5 }} />
      <View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="location" size={16} color="#43abf4" />

          <Text
            style={{
              fontFamily: "IranSansBold",
              marginLeft: 10,
              textAlign: "left",
            }}
          >
            {title}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "IranSans",
            marginLeft: 10,
            fontSize: 10,
          }}
        >
          {text}{" "}
        </Text>
      </View>
    </View>
  );
}
