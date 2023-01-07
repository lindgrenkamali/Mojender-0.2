import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {BoxProps, MonthAction, UpdateValue} from './Intefaces';
import {update} from './redux/calendarSlice';
import {Provider, useDispatch} from 'react-redux';

const Box: React.FC<BoxProps> = ({emoji, day, date, active}) => {
  const dispatch = useDispatch();
  const [inputEmoji, setInputEmoji] = useState(emoji);

  let color;
  const today = new Date();
  let todayBool = false;
  if (active) color = styles.red;
  else {
    color = styles.gray;
  }

  return (
    <View>
      <View style={[styles.box, color]}>
        <View style={styles.top}>
          <Text style={styles.date}>{date.getDate()}</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.emoji}>{inputEmoji}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 45,
    height: 100,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 100,
    shadowOpacity: 0.25,
    elevation: 10,
    margin: 5,
  },
  date: {color: 'white', alignSelf: 'center', fontSize: 20},
  emoji: {textAlign: 'center', fontSize: 40, color: 'black'},
  top: {flex: 0.5},
  center: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
  red: {backgroundColor: 'red'},
  gray: {backgroundColor: 'gray'},
  lightBlue: {backgroundColor: 'lightblue'},
});

export default Box;
