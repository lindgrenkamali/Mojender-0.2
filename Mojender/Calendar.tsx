import React, { Component, useEffect, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-swiper";
import { Provider, useDispatch } from "react-redux";

import { MonthProps } from "./Intefaces";
import Month from "./Month";

const Calendar: React.FC<MonthProps[]> = (months) => {
  const dispatch = useDispatch();

  return (
    <Swiper loop={false}>
      {months && months.map((x) => <Month {...x} />)}
    </Swiper>
  );
};

export default Calendar;
