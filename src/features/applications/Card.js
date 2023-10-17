import { View, Text } from 'react-native'
import React from 'react'
import colors from 'tailwindcss/colors'
import Pill from './Pill'

const Card = () => {
  return (
    <View className="bg-white self-start p-3 w-[320px] rounded-xl shadow-sm">
      <View className="flex-row justify-between items-center">
        <Text className="font-poppins600 text-gray-800"> House for 9 guests in Ubud</Text>
        <Text className="font-poppins600 text-gray-800"> 🔥 6 guests </Text>
      </View>
      <Text className="mt-4 font-poppins500 text-gray-500">
          Feb 14,2023 - Feb 24,2023
      </Text>
      <View className="mt-4 flex-row flex-wrap">
        <Pill color ={colors.teal[500]}> 9 guests </Pill>
        <Pill color ={colors.purple[500]}> 6 bedrooms </Pill>
        <Pill color ={colors.green[500]}> $100 - $900 </Pill>
        <Pill color ={colors.blue[500]}> Open Pool </Pill>
        <Pill color ={colors.orange[500]}> Kitchen </Pill>
        <Pill color ={colors.pink[500]}> Wi-Fi </Pill>
      </View>
    </View>
  )
}

export default Card