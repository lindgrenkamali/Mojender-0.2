import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider, useDispatch} from 'react-redux';

import BoxCol from './BoxCol';

import {MonthProps} from './Intefaces';

const Month: React.FC<MonthProps> = mp => {
  const [month, setMonth] = useState(mp);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.lgWhite}>
            {month.monthName} {month.monthDate.getFullYear()} {month.monthEmoji}
          </Text>
        </View>
      </View>

      <View style={styles.emojiCalendarContainer}>
        <View style={styles.emojiCalendar}>
          <View style={{flexDirection: 'row'}}>
            {mp.boxColumns.map(x => (
              <BoxCol
                key={x.nameOfDay}
                nameOfDay={x.nameOfDay}
                boxes={x.boxes}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {flex: 8},
  header: {backgroundColor: 'black', alignItems: 'center'},
  lgWhite: {color: 'white', fontSize: 40, fontWeight: '600'},
  headerContainer: {margin: 10},
  emojiCalendar: {},
  emojiCalendarContainer: {margin: 0},
});

export default Month;
