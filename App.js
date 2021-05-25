import React from "react";
import { StyleSheet, I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

// use for Persian writing
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

// import Pages
import Intro from "./app/screens/Intro";
import Profile from "./app/screens/TabScreen/Profile";
import Start from "./app/screens/TabScreen/Start";
import History from "./app/screens/TabScreen/History";
import Cost from "./app/screens/TabScreen/Cost";
import Settings from "./app/screens/TabScreen/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// screen for TabNavigator
function Home() {
  return (
    <Tab.Navigator
      initialRouteName="StartPage"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "StartPage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SettingsPage") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "ProfilePage") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "HistoryPage") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "CostPage") {
            iconName = focused ? "card-sharp" : "card-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: "gray",
        activeTintColor: "dodgerblue",
        style: {
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 7,
          marginBottom: 9,
          // borderTopRightRadius: 30,
          // borderTopLeftRadius: 30,
          borderRadius: 30,
          height: 70,
          width: 395,
          shadowColor: "#313131",
          position: "absolute",
        },
      }}
    >
      <Tab.Screen name="ProfilePage" component={Profile} />
      <Tab.Screen name="HistoryPage" component={History} />
      <Tab.Screen name="StartPage" component={Start} />
      <Tab.Screen name="CostPage" component={Cost} />
      <Tab.Screen name="SettingsPage" component={Settings} />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
    IranSans: require("./app/assets/fonts/IRANSansMobile(FaNum).ttf"),
    IranSansBold: require("./app/assets/fonts/IRANSansMobile(FaNum)_Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="IntroPage" component={Intro} />
          <Stack.Screen name="HomePage" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
