import { useState } from "react";

function Mentor() {
  const [person, setPerson] = useState({
    name: "홍길동",
    job: "개발자",
    mentor: {
      name: "밥",
      job: "시니어",
    },
  });

  const mentorName = () => {
    const name = prompt("이름을 바꾸시겠습니까?");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, name },
    }));
  };

  const mentorJob = () => {
    const job = prompt("직업을 바꾸시겠습니까?");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, job },
    }));
  };

  return (
    <>
      <div>
        <h1>
          {person.name}는 {person.job}
        </h1>
        <p>
          {person.name}의 멘토는 {person.mentor.name} ({person.mentor.job})
        </p>
        <button onClick={() => mentorName()}>멘토 이름 바꾸기</button>
        <button onClick={() => mentorJob()}>멘토 직업 바꾸기</button>
      </div>
    </>
  );
}

export default Mentor;
