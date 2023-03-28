import { Axios } from "./@core";

const PATH = "/repos/angular/angular-cli/issues";

const IssuesApi = {
  getIssueList() {
    return Axios.get(PATH);
  },
  getAnIssue(id) {
    return Axios.get(PATH + `/${id}`);
  },
};

export default IssuesApi;
