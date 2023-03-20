function personReducer(people, action) {
  switch (action.type) {
    case "update": {
      const { who, nameChange } = action;
      return {
        ...people,
        mentors: people.mentors.map((el) => {
          if (el.name === who) {
            return { ...el, name: nameChange };
          }
          return el;
        }),
      };
    }
    case "added": {
      const { mentorName, mentorsJob } = action;
      return {
        ...people,
        mentors: [...people.mentors, { name: mentorName, title: mentorsJob }],
      };
    }
    case "deleted": {
      return {
        ...people,
        mentors: people.mentors.filter((el) => {
          return el.name !== action.remove;
        }),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입 입니다: ${action.type}`);
    }
  }
}
export default personReducer;
