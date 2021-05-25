import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomTextInput from "./../../component/CustomTextInput";
import { BlurView } from "expo-blur";

import masjet from "../../assets/masjed0.jpg";
import hafez from "../../assets/hafez.jpg";
import jamshid from "../../assets/takhtejamshid.jpg";

import m1 from "../../assets/m1.jpg";
import w2 from "../../assets/w2.jpg";
import m2 from "../../assets/m2.jpg";
import CardLook from "../../component/CardLook";

export default function Start({ navigation }) {
  const Data = [
    {
      id: "3",
      image: hafez,
      title: "آرمامگاه حافظ",
      text: "یکی از بهترین مکان های تاریخی ایران",
    },
    {
      id: "2",
      image: jamshid,
      title: "تخت جمشید",
      text: "یکی از بهترین مکان های تاریخی ایران",
    },

    {
      id: "1",
      image: masjet,
      title: "مسجد نصیرالملک",
      text: "یکی از بهترین مکان های تاریخی ایران",
      press: () => {
        navigation.navigate("ProfilePage");
      },
    },
  ];
  return (
    <ScrollView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#BCC0C3",
        }}
      >
        <View style={styles.cardOne}>
          <View style={styles.imageShadow}>
            <Image
              source={require("../../assets/woman.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
              }}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.viewForButtonTop}>
                <Ionicons name="location" size={16} color="#43abf4" />

                <Text style={{ fontFamily: "IranSansBold", fontSize: 12 }}>
                  شهر شیراز
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 90 }}>
            <View style={{ marginVertical: 5 }} />
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "IranSansBold",
                fontSize: 28,
              }}
            >
              به {<Text style={{ color: "#43abf4" }}>شیراز</Text>} خوش آمدید !
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "IranSansBold",
                fontSize: 14,
                color: "#313535",
              }}
            >
              شهر زیبایی ها و هنـر
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomTextInput
              placeholder="جستجوی مکان ها ..."
              autoCorrect={false}
              keyboardType="email-address"
              icon="ios-search-outline"
              placeholderTextColor="#fff"
            ></CustomTextInput>
          </View>
        </View>
        <View style={{ width: "100%", height: 300 }}>
          <Text
            style={{
              fontFamily: "IranSansBold",
              marginLeft: 15,
              fontSize: 18,
              color: "#696c6e",
            }}
          >
            محبوب ترین مکان ها
          </Text>
          <View style={{ marginVertical: 5 }} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={item.press}
                style={styles.CardLocationS}
              >
                <Image
                  source={item.image}
                  style={{ width: 180, height: 220, borderRadius: 20 }}
                />
                <BlurView intensity={260} style={styles.nonBlurredContent}>
                  <Text style={{ fontFamily: "IranSansBold", marginLeft: 10 }}>
                    {item.title}{" "}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "IranSans",
                      marginLeft: 10,
                      fontSize: 10,
                    }}
                  >
                    {item.text}{" "}
                  </Text>
                </BlurView>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
        <View style={{ width: "100%", height: 500 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "IranSansBold",
                marginLeft: 15,
                fontSize: 18,
                color: "#696c6e",
              }}
            >
              اخرین نظرات شیراز{" "}
            </Text>
            <Text
              style={{
                marginTop: 5,
                marginLeft: 155,
                fontFamily: "IranSansBold",
                fontSize: 14,
                color: "#3b8ecd",
              }}
            >
              + ثبت نظر جدید
            </Text>
          </View>
          <CardLook ax={m1} title={"تخت جمشید"} text={"تجربه بسیار خوبی بود"} />
          <CardLook
            ax={w2}
            title={"آرامگاه حاقظ"}
            text={"بسیار عالی حتما سر بزنید"}
          />
          <CardLook ax={m2} title={"مسیجد نصیرالملک"} text={"لذت بخش و زیبا"} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nonBlurredContent: {
    marginTop: 150,
    width: 180,
    height: 70,
    position: "absolute",
    borderRadius: 20,
    justifyContent: "center",
  },
  cardOne: {
    backgroundColor: "#fff",
    width: 394,
    height: 240,
    margin: 8,
    borderRadius: 30,
  },
  imageShadow: {
    marginTop: 20,
    marginLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    width: 60,
    height: 60,
    borderRadius: 12,
    elevation: 24,
    flexDirection: "row",
  },
  viewForButtonTop: {
    width: 95,
    height: 40,
    backgroundColor: "#ecf0f3",
    borderRadius: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 200,
  },
  CardLocationS: {
    width: 180,
    height: 220,
    marginHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 15,
  },
});
