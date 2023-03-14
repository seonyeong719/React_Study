import { useState } from "react";

function Mentors() {
  const [people, setPeople] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "",
        title: "",
      },
      {
        name: "",
        title: "",
      },
    ],
  });
  return (
    <div>
      <h1>
        {people.name}는 {people.title}
      </h1>
      <p> {people.name}의 멘토는: </p>
      <ul>
        {people.mentors.map((mentor, index) => (
          <li>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button>멘토의 이름 바꾸기</button>
    </div>
  );
}
export default Mentors;
