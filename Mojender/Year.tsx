import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { YearProps } from "./Intefaces";
import Month from "./Month";

const Year: React.FC<YearProps> = ({ year, months }) => {
  return (
    <View>
      {months.map((x) => (
        <Month
          monthName={x.monthName}
          boxColumns={x.boxColumns}
          monthDate={x.monthDate}
          monthEmoji={x.monthEmoji}
        />
      ))}
    </View>
  );
};

export default Year;
