import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#fff", justifyContent: "flex-start" }}
    >
      <View style={styles.ViewOne}>
        <Image
          style={styles.image}
          source={require("../../assets/masjed.jpg")}
        />
        <View style={styles.ViewTwo}>
          <View style={styles.ViewThree} />

          <Image
            style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 15 }}
            source={require("../../assets/woman.png")}
          />
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              position: "absolute",
              marginLeft: 30,
            }}
            source={require("../../assets/m1.jpg")}
          />
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              position: "absolute",
              marginLeft: 60,
            }}
            source={require("../../assets/w2.jpg")}
          />
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              position: "absolute",
              marginLeft: 80,
            }}
            source={require("../../assets/m2.jpg")}
          />

          <Text
            style={{ marginLeft: 75, marginRight: 65, fontFamily: "IranSans" }}
          >
            بیش از 20هزار نفر مسجد نصیرالملک را پیشنهاد داده اند
          </Text>
        </View>

        <Image
          style={styles.imageTwo}
          source={require("../../assets/map.png")}
        />
        <View style={styles.View4}>
          <TouchableOpacity
            style={{
              width: 280,
              height: "100%",
              backgroundColor: "#43abf4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              flexDirection: "row",
            }}
          >
            <Ionicons name="people-circle-sharp" size={26} color="#fff" />
            <Text
              style={{ fontFamily: "IranSans", fontSize: 16, color: "#fff" }}
            >
              {"  "}همسفر برام پیدا کن
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              flexDirection: "row",
              borderWidth: 2,
              borderColor: "#43abf4",
            }}
          >
            <Ionicons name="heart-outline" size={24} color="#43abf4" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 395,
    height: 280,
    borderRadius: 30,
  },
  ViewOne: {
    width: "100%",
    height: 420,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  ViewTwo: {
    width: "90%",
    height: 70,
    position: "absolute",
    marginTop: 200,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  ViewThree: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 200,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
  },
  View4: {
    width: "90%",
    height: 60,
    position: "absolute",
    marginTop: 510,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
