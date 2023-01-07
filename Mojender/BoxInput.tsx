import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {BoxInputProps, BoxProps, MonthAction, UpdateValue} from './Intefaces';
import * as calendarSlice from './redux/calendarSlice';
import {Provider, useDispatch} from 'react-redux';
import {CorrectDay} from './Create';

const BoxInput: React.FC<BoxInputProps> = ({boxProps, index}) => {
  const dispatch = useDispatch();
  const [inputEmoji, setInputEmoji] = useState(boxProps.emoji);

  const color = styles.lightBlue;

  return (
    <View>
      <View style={[styles.box, color]}>
        <View style={styles.top}>
          <Text style={styles.date}>{boxProps.date.getDate()}</Text>
        </View>
        <View style={styles.center}>
          <TextInput
            onChangeText={setInputEmoji}
            placeholder={inputEmoji}
            style={styles.emoji}
            placeholderTextColor={'black'}
            onBlur={x => {
              const updateValue: UpdateValue = {
                monthIndex: boxProps.date.getMonth(),
                boxColumnIndex: CorrectDay(boxProps.date.getDay()),
                boxIndex: index,
                emoji: inputEmoji,
              };
              dispatch(calendarSlice.update(updateValue));
            }}
            caretHidden={true}></TextInput>
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

export default BoxInput;
