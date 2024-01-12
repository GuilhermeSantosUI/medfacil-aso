import {
  ArrowUpRight,
  CalendarBlank,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../../../../app/utils";
import * as C from "./Calendar.styles";

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  const getHeader = () => {
    return (
      <div>
        <C.InfoRow>
          <CalendarBlank size={20} />
          <C.InfoTitle>Filtragem por datas</C.InfoTitle>
        </C.InfoRow>

        <div className="header">
          <h3>{capitalizeFirstLetter(format(activeDate, "MMMM yyyy"))}</h3>

          <div
            className="todayButton"
            onClick={() => {
              setSelectedDate(new Date());
              setActiveDate(new Date());
            }}
          >
            Hoje
          </div>

          <CaretLeft onClick={() => setActiveDate(subMonths(activeDate, 1))} />
          <CaretRight onClick={() => setActiveDate(addMonths(activeDate, 1))} />
        </div>
      </div>
    );
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div className="day weekNames" key={day}>
          {capitalizeFirstLetter(format(addDays(weekStartDate, day), "EEEEEE"))}
        </div>
      );
    }
    return <div className="weekContainer">{weekDays}</div>;
  };

  const generateDatesForCurrentWeek = (
    date: Date,
    selectedDate: Date,
    activeDate: Date
  ) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return (
      <div style={{ height: 288 }}>
        <div className="weekContainer">{allWeeks}</div>
      </div>
    );
  };

  return (
    <C.Container>
      <div>
        {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
      </div>

      <div
        className="todayButton"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Pesquisar
        <ArrowUpRight />
      </div>
    </C.Container>
  );
}
