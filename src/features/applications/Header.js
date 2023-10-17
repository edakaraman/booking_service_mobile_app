import { View, Text,TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import React from "react";

const Header = () => {
  return (
    <View className="flex-row items-baseline justify-between pt-3">
      <Text className="text-4xl font-semibold text-gray-800 font-poppins600">
        Applications
      </Text>
      <TouchableOpacity className="bg-yellow-400 p-2 rounded-full">
        <Feather name="plus" size={25} color={colors.gray[700]} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
