import Box from './Box';

export type AppProps = {
  currentDate: Date;
  currentDateEmoji: string;
  currentDateString: string;
};

export type BoxProps = {
  emoji: string;
  day: string;
  date: Date;
  active: boolean;
};

export type BoxColumnProps = {
  nameOfDay: string;
  boxes: BoxProps[];
};

export type MonthProps = {
  monthName: string;
  monthDate: Date;
  boxColumns: BoxColumnProps[];
  monthEmoji: string;
};

export type YearProps = {
  year: number;
  months: MonthProps[];
};

export type CalendarProps = {
  years: YearProps[];
};

export type MonthAction = {
  type: string;
  month: MonthProps;
};

export type UpdateValue = {
  monthIndex: number;
  boxColumnIndex: number;
  boxIndex: number;
  emoji: string;
};

export type BoxInputProps = {
  boxProps: BoxProps;
  index: number;
};
