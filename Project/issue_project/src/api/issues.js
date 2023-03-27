import { Axios } from "./@core";

const PATH = "/repos/angular/angular-cli/issues";

const IssuesApi = {
  getIssueList(id) {
    return Axios.get(PATH + `/${id}`);
  },
  getAnIssue(issue) {
    return Axios.get(PATH, `${issue}`);
  },
};

export default IssuesApi;
