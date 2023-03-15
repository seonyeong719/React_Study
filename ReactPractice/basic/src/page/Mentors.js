import { useState } from "react";

function Mentors() {
  const [people, setPeople] = useState({
    name: "철수",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });

  console.log(people);

  const mentorChangeBtn = () => {
    const who = prompt("누구의 이름을 바꾸시겠습니까?");
    const nameChange = prompt("이름을 무엇으로 바꾸시겠습니까?");

    setPeople((people) => ({
      ...people,
      mentors: people.mentors.map((el) => {
        if (el.name === who) return { ...el, name: nameChange };
        return el;
      }),
    }));
  };

  return (
    <div>
      <h1>
        {people.name}는 {people.title}
      </h1>
      <p> {people.name}의 멘토는: </p>
      <ul>
        {people.mentors.map((mentor) => (
          <li>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={mentorChangeBtn}>멘토의 이름 바꾸기</button>
    </div>
  );
}
export default Mentors;
