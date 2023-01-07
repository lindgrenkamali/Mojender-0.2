import {
  BoxColumnProps,
  BoxProps,
  CalendarProps,
  MonthProps,
  YearProps,
} from "./Intefaces";

const amountOfYears = 3;

const amountOfDays = 7;
const startYear = 2021;

const seasonArray = [
  //Spring
  "🌱",
  //Summer
  "🔆",
  //Fall
  "🍂",
  //Winter
  "❄",
];

const nameOfDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const nameOfMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function GetSeasonEmoji(monthNumber: number) {
  if (monthNumber == 2 || monthNumber == 3 || monthNumber == 4) {
    return seasonArray[0];
  } else if (monthNumber == 5 || monthNumber == 6 || monthNumber == 7) {
    return seasonArray[1];
  } else if (monthNumber == 8 || monthNumber == 9 || monthNumber == 10) {
    return seasonArray[2];
  }

  return seasonArray[3];
}

export function CreateCalendar() {
  let calendarProp: CalendarProps = { years: [] };

  for (let index = 0; index < amountOfYears; index++) {
    calendarProp.years.push(CreateYear(startYear + index));
  }

  return calendarProp;
}

export function CreateYear(year: number) {
  let yearProps: YearProps = {
    year: year,
    months: [],
  };
  for (let x = 0; x < 12; x++) {
    yearProps.months.push(CreateMonth(year, x));
  }

  return yearProps;
}

export function CreateMonth(year: number, month: number) {
  const date = new Date(year, month + 1, 0);

  let monthProps: MonthProps = {
    monthName: nameOfMonths[month],
    monthDate: date,
    boxColumns: [],
    monthEmoji: GetSeasonEmoji(month),
  };

  const daysInMonth = date.getDate();

  monthProps.boxColumns = CreateBoxCols(year, month, daysInMonth);

  return monthProps;
}

export function CreateBoxCols(
  year: number,
  month: number,
  daysInMonth: number
) {
  let boxColumns: BoxColumnProps[] = [];

  let boxArray: BoxProps[] = [];

  //-------------------------------------------------
  let lastMonth = month;
  let lastYear = year;

  if (month == 0) {
    lastYear--;
    lastMonth = 11;
  } else {
    lastMonth--;
  }

  const previousDays = CorrectDay(new Date(year, month, 1).getDay());

  const previousMonthDate = new Date(lastYear, lastMonth + 1, 0).getDate();

  //Create former month dates
  for (let x = 0; x < previousDays; x++) {
    const date = new Date(lastYear, lastMonth, previousMonthDate - x);

    const day = CorrectDay(date.getDay());

    boxArray.push(CreateBox("", nameOfDays[day], date, false));
  }

  //-------------------------------------------------

  //Create all days in month
  for (let x = 1; x <= daysInMonth; x++) {
    const date = new Date(year, month, x);
    const dayNumber = CorrectDay(date.getDay());

    boxArray.push(CreateBox("", nameOfDays[dayNumber], date, true));
  }

  for (let x = 1; x <= 7; x++) {
    let nameOfDay;
    if (x == 7) {
      nameOfDay = 6;
    } else {
      nameOfDay = x - 1;
    }

    let boxCol: BoxColumnProps = {
      nameOfDay: nameOfDays[nameOfDay],
      boxes: [],
    };

    boxColumns.push(boxCol);
  }

  for (let x = 0; x < boxArray.length; x++) {
    const day = boxArray[x].date.getDay();

    const realday = CorrectDay(day);

    boxColumns[realday].boxes.push(boxArray[x]);
  }

  return boxColumns;
}

export function CreateBoxes(year: number, month: number, days: number) {
  let boxes: BoxProps[] = [];

  for (let x = 1; x <= days; x++) {
    const date = new Date(year, month, x);
    boxes.push(
      CreateBox(
        "",
        nameOfDays[date.getDay()],
        new Date(year, month, days),
        true
      )
    );
  }

  return boxes;
}

export function CreateBox(
  emoji: string,
  day: string,
  date: Date,
  active: boolean
) {
  let box: BoxProps = { emoji: emoji, day: day, date: date, active: active };
  return box;
}

export function CorrectDay(originalDay: number) {
  if (originalDay == 0) {
    return 6;
  }

  return originalDay - 1;
}
