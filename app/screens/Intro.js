import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Intro({ navigation }) {
  return (
    <ImageBackground
      style={styles.imageBgd}
      source={require("../assets/Shiraz1.jpg")}
      blurRadius={3}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={styles.imageCenter}
          source={require("../assets/Shiraz1.jpg")}
        />
      </View>
      <Text style={styles.textOne}>SHIRAZ</Text>

      <View
        style={{
          height: 210,
          width: "100%",
          backgroundColor: "dodgerblue",
          alignItems: "center",
          
        }}
      >
        <Text style={styles.textTwo}>اپلیکیشن گردشگری شیراز</Text>

        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <Text style={styles.text3}>ورود</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBgd: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCenter: {
    width: 390,
    height: 450,
    marginTop: 35,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  textOne: {
    marginBottom: 300,
    fontSize: 60,
    color: "#FFF",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "#313131",
  },
  textTwo: {
    fontFamily: "IranSans",
    fontSize: 18,
    color: "#FFF",
    marginTop: 50,
  },
  text3: {
    fontSize: 18,
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    textAlign: "center",
    marginTop: 20,
    paddingTop: 5,
    borderRadius: 40 / 2,
    borderWidth: 2,
    borderColor: "#313131",
  },
});
