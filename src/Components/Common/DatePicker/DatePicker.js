import { useEffect, useState } from "react";
import './datepicker.css'

function DatePicker() {
  const [year, setYear] = useState([new Date().getFullYear()]);
  const [date, setDate] = useState([new Date().getDate()]);
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });

  useEffect(() => {
    setYear(() => {
      var years = [];
      for (
        let i = new Date().getFullYear();
        i > new Date().getFullYear() - 100;
        i--
      ) {
        years.push(i);
      }
      return years;
    });

    setDate(() => {
      let date = [];
      for (let i = 1; i < 31; i++) {
        date.push(i);
      }
      return date;
    });
  }, []);

  const months = [
    " January",
    " February",
    "March",
    " April",
    "May",
    " June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

 

  return (
    <div className="datePicker">
      <span>
        <select
        className="monthSelect"
          name="month"
          id="month"
          defaultValue={months[new Date().getMonth()]}
          onChange={(e) => setBirthDate({ month: e.target.value })}
        >
          {months.map((month, ind) => {
            return (
              <option key={ind} value={month}>
                {" "}
                {month}
              </option>
            );
          })}
        </select>
      </span>

      <span>
        <select
        className="daySelect"

          name="day"
          id="day"
          defaultValue={new Date().getDate()}
          onChange={(e) => setBirthDate({ day: e.target.value })}
        >
          {date.map((month, ind) => {
            return (
              <option key={ind} value={month}>
                {" "}
                {month}
              </option>
            );
          })}
        </select>
      
      </span>

      <span>
        <select
          name="year"
          id="year"
          onChange={(e) => setBirthDate({ year: e.target.value })}
          className="yearSelect"
        
        >
          {year.map((year, ind) => {
            return (
              <option key={ind} value={year}>
                {" "}
                {year}
              </option>
            );
          })}
        </select>
      </span>
    </div>
  );
}

export default DatePicker;
