import React, {Component, Dispatch, useEffect, useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import Month from './Month';
import Swiper from 'react-native-swiper';

import {deleteAll, setLocalData} from './Storage';
import {MonthProps} from './Intefaces';
import {useDispatch} from 'react-redux';
import {set} from './redux/calendarSlice';

const renderMonths = (months: MonthProps[]) => {
  return (
    <Swiper loop={false}>
      {months.map((key, index) => (
        <Month key={index} {...key} />
      ))}
    </Swiper>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [months, setMonths] = useState<JSX.Element>();
  const dispatch = useDispatch();

  const getMonths = async () => {
    const m = await setLocalData();
    const renderedMonths = renderMonths(m);

    try {
      setMonths(renderedMonths);
    } catch (error) {}

    dispatch(set(m));
  };

  useEffect(() => {
    setTimeout(() => {
      getMonths();
    }, 1);
  }, []);

  return <View style={styles.app}>{months}</View>;
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
