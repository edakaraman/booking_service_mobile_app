import { View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";
import Tabs from "./Tabs";
import Cards from "./Cards";
import PopularStaysHeader from "./PopularStaysHeader";
import PopularStays from "./PopularStays";

const Applications = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar />
      <View className="flex-1 p-9">
        <Header />
        <Tabs/>
        <Cards/>
        <PopularStaysHeader/>
        <PopularStays/>
      </View>
    </SafeAreaView>
  );
};

export default Applications;
