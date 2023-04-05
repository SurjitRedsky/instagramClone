import { useEffect, useState } from "react";
import './datepicker.css'

function DatePicker() {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("");


  let lengthNum = 31
  if (month == 2) {
    lengthNum = 28
  }

  const days = Array.from({ length: lengthNum }, (_, i) => i + 1);
  const months = [
    { name: "January", value: "1" },
    { name: "February", value: "2" },
    { name: "March", value: "3" },
    { name: "April", value: "4" },
    { name: "May", value: "5" },
    { name: "June", value: "6" },
    { name: "July", value: "7" },
    { name: "August", value: "8" },
    { name: "September", value: "9" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" }
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);




  // const [year, setYear] = useState([new Date().getFullYear()]);
  // const [date, setDate] = useState([new Date().getDate()]);
  // const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });

  // useEffect(() => {
  //   setYear(() => {
  //     var years = [];
  //     for (
  //       let i = new Date().getFullYear();
  //       i > new Date().getFullYear() - 100;
  //       i--
  //     ) {
  //       years.push(i);
  //     }
  //     return years;
  //   });

  //   setDate(() => {
  //     let date = [];
  //     for (let i = new Date().getDate(); i < 31; i++) {
  //       date.push(i);
  //     }
  //     return date;
  //   });
  // }, []);


  // const months = [
  //   " January",
  //   " February",
  //   "March",
  //   " April",
  //   "May",
  //   " June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];



  return (
    <div className="datePicker">
      <span>
        <select
          className="monthSelect"
          name="month"
          id="month"
          defaultValue={`${new Date().getMonth() + 1}`}
          onChange={(e) => setMonth(e.target.value)}

        >
          {months.map((month, ind) => {
            return (
              <option key={ind} value={month.value}>
                {" "}
                {month.name}
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
          onChange={(e) => setDay(e.target.value)}
        >
          {days.map((day, ind) => {
            return (
              <option key={ind} value={day}>
                {" "}
                {day}
              </option>
            );
          })}
        </select>

      </span>

      <span>
        <select
          name="year"
          id="year"
          onChange={(e) => setYear(e.target.value)}
          className="yearSelect"


        >
          {years.map((year, ind) => {
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
