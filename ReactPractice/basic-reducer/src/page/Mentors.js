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

  //수정
  const mentorAddBtn = () => {
    const mentorName = prompt("멘토의 이름은?");
    const mentorsJob = prompt("멘토의 직함은?");

    setPeople((people) => ({
      ...people,
      mentors: [...people.mentors, { name: mentorName, title: mentorsJob }],
    }));
  };

  // 삭제
  const mentorRemoveBtn = () => {
    const remove = prompt("누구를 삭제하시겠습니까?");

    setPeople((people) => ({
      ...people,
      mentors: people.mentors.filter((el) => {
        return el.name !== remove;
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
      <button onClick={mentorAddBtn}>멘토의 추가하기</button>
      <button onClick={mentorRemoveBtn}>멘토의 삭제하기</button>
    </div>
  );
}
export default Mentors;
