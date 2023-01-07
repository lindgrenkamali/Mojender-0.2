import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {CreateMonth, CreateYear} from './Create';
import {BoxColumnProps, MonthProps, YearProps} from './Intefaces';

export async function setLocalData() {
  const today = new Date();
  let todayFileName = today.getFullYear() + '/' + today.getMonth();

  let monthProps: MonthProps[] = [];
  const keys = await getAllKeys();
  let fileAlreadyExist = false;

  if (keys != undefined) {
    keys.forEach(name => {
      if (todayFileName == name) {
        fileAlreadyExist = true;
      }
    });
  }

  if (fileAlreadyExist == false) {
    const newMonth = CreateMonth(today.getFullYear(), today.getMonth());

    monthProps.push(newMonth);
    await updateMonth(newMonth);
  }

  if (keys != undefined) {
    const months = await getMonthsData(keys);

    for (let index = 0; index < months.length; index++) {
      monthProps.push(months[index]);
    }
  }

  return monthProps;
}

export async function getMonthsData(keys: readonly string[]) {
  let months: MonthProps[] = [];
  for (let index = 0; index < keys.length; index++) {
    const file = await getMonthData(keys[index]);
    if (file != undefined) {
      const month = deserialize(file);
      months.push(month);
    }
  }

  return months;
}

export async function getMonthData(fileName: string) {
  return await AsyncStorage.getItem(fileName);
}

export async function getLocalData() {
  let keys = await getAllKeys();
  try {
  } catch (e) {}
}

export async function getAllKeys() {
  let keys = [];
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }
}

export async function updateMonth(month: MonthProps) {
  try {
    const monthString = JSON.stringify(month);

    const fileString =
      month.monthDate.getFullYear() + '/' + month.monthDate.getMonth();
    console.log(await AsyncStorage.getAllKeys());
    await AsyncStorage.setItem(fileString, monthString);
  } catch (e) {
    console.log(e);
  }
}

export async function deleteAll() {
  let files = await getAllKeys();

  if (files != undefined) {
    try {
      files.forEach(element => {
        AsyncStorage.removeItem(element);
      });
    } catch (error) {}
  }
}

export function deserialize(jsonObj: string) {
  let month: MonthProps = JSON.parse(jsonObj);
  month.monthDate = new Date(month.monthDate);
  for (let i = 0; i < month.boxColumns.length; i++) {
    for (let y = 0; y < month.boxColumns[i].boxes.length; y++) {
      month.boxColumns[i].boxes[y].date = new Date(
        month.boxColumns[i].boxes[y].date,
      );
    }
  }

  return month;
}
