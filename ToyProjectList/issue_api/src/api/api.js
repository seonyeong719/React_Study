import React, { useEffect, useState } from "react";
import axios from "axios";
function IssueAPI() {
  const [users, setUsers] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/angular/angular-cli/issues"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch {
      console.log("오류");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(users);

  return (
    <div>
      {users && users.map((user, index) => <div>{user.user.login}</div>)}
    </div>
  );
}

export default IssueAPI;
