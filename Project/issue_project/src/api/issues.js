import { Axios } from "./@core";

const PATH = "/repos/angular/angular-cli/issues";

const IssuesApi = {
  getIssueList(params) {
    return Axios.get(PATH, { params });
  },
  getAnIssue(number) {
    return Axios.get(PATH + `/${number}`);
  },
};

export default IssuesApi;
