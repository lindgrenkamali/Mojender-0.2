import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {BoxColumnProps} from './Intefaces';
import Box from './Box';
import BoxInput from './BoxInput';

const BoxCol: React.FC<BoxColumnProps> = bCP => {
  const today = new Date().getDate();

  return (
    <View style={styles.boxRow}>
      <View style={styles.day}>
        <Text style={styles.dayNameText}>{bCP.nameOfDay.substring(0, 3)}</Text>
      </View>

      {bCP.boxes.map((d, index) =>
        d.date.getDate() == today ? (
          <BoxInput
            key={index}
            boxProps={{
              emoji: d.emoji,
              day: d.day,
              date: d.date,
              active: d.active,
            }}
            index={index}
          />
        ) : (
          <Box key={index} {...d} />
        ),
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  boxRow: {flexDirection: 'column', alignItems: 'flex-start'},
  day: {alignSelf: 'center'},
  dayNameText: {fontSize: 20},
});

export default BoxCol;
