import { useState } from "react";
import "./style.css";

export default function App() {
  const [courses] = useState([
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ]);

  const [data, setData] = useState("");
  const [courseNumber, setCourseNumber] = useState("");

  function showResult() {
    console.log(data);
    if (courses.indexOf(courses[courseNumber - 1]) != -1) {
      console.log(courses[courseNumber - 1]);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  }

  return (
    <>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((course, idx) => {
          return <li key={idx}>{course}</li>;
        })}
      </ol>

      <label>
        Imię i nazwisko:
        <input
          type="text"
          name="personal-data"
          id="personal-data"
          onInput={(event) => setData(event.target.value)}
        />
      </label>
      <label>
        Number kursu:
        <input
          type="number"
          name="course-number"
          id="course-number"
          onInput={(event) => setCourseNumber(parseInt(event.target.value))}
        />
      </label>
      <button onClick={showResult}>Zapisz do kursu</button>
    </>
  );
}
